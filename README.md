# web

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


刷新用户列表事件， 当用户从ws中获取到事件后，如果是接受到消息事件, 那就采用pubsub subscribe来监听该事件，用于刷新用户列表，如果该事情对应的uer是sessionusre,则出发当前会话session事件

刷新当前会话session事件， 如果是当前用户发送消息给其他用户，则触发该事件


A -> B: 

B -> A

session: A and B => A->B + B->A


A senMessage -> B, 数据库存　