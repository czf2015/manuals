```go
package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type User struct {
	ID   uint   `gorm:"primaryKey"`
	Name string `gorm:"not null"`
	Age  int    `gorm:"not null"`
}

func main() {
	dsn := "user:password@tcp(localhost:3306)/database?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	// 自动迁移数据库表
	err = db.AutoMigrate(&User{})
	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()

	// 获取所有用户列表
	r.GET("/users", func(c *gin.Context) {
		var users []User
		result := db.Find(&users)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}
		c.JSON(http.StatusOK, users)
	})

	// 创建新用户
	r.POST("/users", func(c *gin.Context) {
		var user User
		err := c.ShouldBindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		result := db.Create(&user)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}
		c.JSON(http.StatusCreated, user)
	})

	// 获取单个用户
	r.GET("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		var user User
		result := db.First(&user, id)
		if result.Error != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}
		c.JSON(http.StatusOK, user)
	})

	// 更新用户信息
	r.PUT("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		var user User
		result := db.First(&user, id)
		if result.Error != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}

		err := c.ShouldBindJSON(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		result = db.Save(&user)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}
		c.JSON(http.StatusOK, user)
	})

	// 删除用户
	r.DELETE("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		var user User
		result := db.First(&user, id)
		if result.Error != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
			return
		}

		result = db.Delete(&user)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": fmt.Sprintf("User %v deleted", id)})
	})

	// 导出用户信息到 CSV 文件
	r.GET("/users/export", func(c *gin.Context) {
		var users []User
		result := db.Find(&users)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}

		fileName := "users.csv"
		file, err := os.Create(fileName)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer file.Close()

		writer := csv.NewWriter(file)
		defer writer.Flush()

		// 写入 CSV 表头
		header := []string{"ID", "Name", "Age"}
		err = writer.Write(header)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// 写入 CSV 数据
		for _, user := range users {
			row := []string{strconv.Itoa(int(user.ID)), user.Name, strconv.Itoa(user.Age)}
			err = writer.Write(row)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
		}

		c.Header("Content-Description", "File Transfer")
		c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=%s", fileName))
		c.Header("Content-Type", "text/csv")
		c.File(fileName)
	})

	// 导入用户信息从 CSV 文件
	r.POST("/users/import", func(c *gin.Context) {
		file, err := c.FormFile("file")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		src, err := file.Open()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer src.Close()

		reader := csv.NewReader(src)
		rows, err := reader.ReadAll()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		var users []User
		for i, row := range rows {
			if i == 0 { // 跳过 CSV 表头
				continue
			}
			id, _ := strconv.Atoi(row[0])
			age, _ := strconv.Atoi(row[2])
			user := User{
				ID:   uint(id),
				Name: row[1],
				Age:  age,
			}
			users = append(users, user)
		}

		result := db.Create(&users)
		if result.Error != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Users imported"})
	})

	err = r.Run(":8080")
	if err != nil {
		log.Fatal(err)
	}
}

```