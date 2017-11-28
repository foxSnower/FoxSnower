/**
 * 入口文件
 */
// 引入编写好的api
// const api = require('./api'); 




// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(api);
// 
// 

//自定义本地json数据------------------------------------------------
// 创建 application/x-www-form-urlencoded 编码解析

var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.post('/local', urlencodedParser, function(req, res) {
  //console.log(req.body.local)
  if (req.body.local != undefined) { //读取本地json文件
    var data = JSON.parse(fs.readFileSync('local.json'));
    var local = req.body.local;
    local = eval('(' + local + ')'); //字符串转化成json
    var obj = data[local.localType];
      // console.log(obj);
      // console.log(local);
      // console.log(local.localType);
    res.send(obj);
  }
})

//自定义本地json数据-------------------------------------------------------


// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
// 监听8086端口
app.listen(8079);
console.log('success listen…………');