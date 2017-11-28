# foxsnower

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# by Fox Snower -----2017/11/22

自从vue移除dev-server.js 后，就没有现成的本地服务了，为了能够本地模拟数据，方便开发，
新建了server文件夹，专门提供本地服务，若需要调取本地json数据，需要满足以下两个条件

	* 打开 >src>api>api.js    

	`const IsLoacalData = true; //本地数据`


	* 启动本地服务 ，在server文件夹下 打开命令窗口

	执行`node index.js`



