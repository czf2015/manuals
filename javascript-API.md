### conosle.log 如何格式化输出
在浏览器中，可以使用 %c 占位符和 CSS 样式来格式化输出 console.log()。这些占位符和样式可以用于在控制台输出不同颜色、字体样式等效果。

以下是一些常用的占位符和样式：

%c：用于指定后面输出文本的样式
%s：用于输出字符串
%d：用于输出数字
%f：用于输出浮点数
%o：用于输出对象
%O：用于输出对象的详细信息
%i：用于输出整数
%b：用于输出布尔值
%x：用于将数字转换为十六进制
%e：用于将数字输出为科学计数法
以下是一个使用 %c 占位符和样式的示例：

```javascript
console.log('%c Hello, world!', 'color: blue; font-size: 20px;');

const obj = {name: 'binjie', age: 24};
console.log('%c My object:', 'font-weight: bold;', obj);
```
在上述示例中，我们首先使用 %c 占位符来指定输出文本的样式。在第一次调用 console.log() 中，我们将文本颜色设置为蓝色，字体大小设置为 20 像素。在第二次调用 console.log() 中，我们使用 %c 指定标题文本的样式为粗体字，然后输出了一个对象的内容。

需要注意的是，不同浏览器对于 %O 和 %i 占位符的支持可能有所不同。在某些浏览器中，这些占位符可能没有正确处理。因此，在实际应用中，建议进行兼容性测试并提供备选方案

### File对象能否支持写入？
JavaScript中的File对象是Blob对象的一种特殊类型，用于表示从用户计算机中选定的文件。与Blob对象类似，File对象也支持写入数据，但需要借助文件系统API来实现。

在Web平台中，我们可以使用Web API提供的FileReader对象和FileWriter对象来读取和写入文件内容。下面是一个简单的示例：

```javascript
// 选择一个文本文件
var fileInput = document.querySelector('input[type="file"]');
var file = fileInput.files[0];

// 创建一个FileReader对象，并读取文件内容
var reader = new FileReader();
reader.readAsText(file);
reader.onload = function() {
  var content = reader.result;
  
  // 使用FileWriter对象写入文件内容
  window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
    fs.root.getFile(file.name, {create: true}, function(fileEntry) {
      fileEntry.createWriter(function(writer) {
        writer.write(content);
      });
    });
  });
};
```
在上述示例中，我们首先选择了一个文本文件，并使用FileReader对象读取其内容。在读取完成后，我们使用FileWriter对象将文件内容写入到临时文件系统中。

需要注意的是，写入文件需要获取用户授权，因此在使用文件系统API时需要请求浏览器的访问权限。另外，不同的浏览器可能对文件系统API的支持程度有所不同，因此在编写跨浏览器的Web应用程序时需要考虑到这种情况。


### crypto

```js 
// 验证网站：https://download-origin.cdn.mozilla.net/
(async function() {
  const mozillaCdnUrl = '//download-origin.cdn.mozilla.net/pub/firefox/releases/67.0/'
  const firefoxBinaryFilename = 'linux-x86_64/en-US/firefox-67.0.tar.bz2'; 
  const firefoxShaFilename = 'SHA512SUMS'

  console.log('Fetching Firefox binary...');
  const fileArrayBuffer = await (await fetch(mozillaCdnUrl + firefoxBinaryFilename)).arrayBuffer() ;
  console.log('Calculating Firefox digest...');
  const firefoxBinaryDigest = await crypto.subtle.digest('SHA-512', fileArrayBuffer); 
  const firefoxHexDigest = Array.from(new Uint8Array(firefoxBinaryDigest))
    .map((x) => x.toString(16).padStart(2,'0'))
    .join('');
  console.log('Fetching published binary digests...'); // SHA文件包含此次发布的所有Firefox二进制文件的摘要，
  // 因此要根据其格式进制拆分
  const shaPairs= (await (await fetch(mozillaCdnUrl + firefoxShaFilename)).text())
    .split(/\n/)
    .map((x) => x.split(/\s+/));
  let verified = false; 
  console.log('Checking calculated digest against published digests...')
  for (const [sha, filename] of shaPairs) {
    if (filename == firefoxBinaryFilename) {
      if (sha === firefoxHexDigest) {
        verified = true
        break
      }
    }
  }
  console.log('Verified:', verified)
})()

```

### Page Visibility API
document.visibilityState是一个属性，用于获取当前文档（document）的可见性状态。它是Document对象的一个只读属性，返回一个表示文档可见性状态的字符串。

document.visibilityState属性可以有以下几种可能的值：

"visible"：表示文档当前处于可见状态。这意味着文档在浏览器窗口中可见，并且用户当前正在与之交互。

"hidden"：表示文档当前处于隐藏状态。这意味着文档不在浏览器窗口中可见，可能是因为用户切换到了其他标签页、最小化了浏览器窗口或将浏览器窗口置于了后台。

"prerender"：表示文档处于预渲染状态。这是一种特殊情况，当浏览器将文档预先渲染以提高加载速度时，文档处于这种状态。在预渲染期间，文档并不可见。

"unloaded"：表示文档已卸载或未加载。这是文档可见性状态的初始值，在文档加载完成之前或在文档被卸载后使用。

可以通过监听visibilitychange事件来检测文档可见性状态的变化。当文档的可见性状态发生变化时，浏览器会触发visibilitychange事件，并提供新的可见性状态信息。