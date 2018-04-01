# sketch-viewer-frontend

> sketch 设计稿管理工具（后端）, 主要解决的问题是可以统一管理设计稿，方便后期查找各个版本的差异，同时也免去开发人员存储设计稿到本地磁盘的占用和管理

## Build Setup

``` bash
# install dependencies
npm install

# install nodemon in global
npm i nodemon -g

# setup app
nodemon app.js

# deploy

npm i pm2 -g
pm2 start app.js

## 技术栈
```
* [koa2](https://github.com/koajs/koa)
* [mongoose](https://github.com/Automattic/mongoose)
* [busboy](https://github.com/mscdex/busboy)

## TODOLIST

* 项目管理 ✅
* 子项目管理 ✅
* 设计稿上传 ✅
* 设计稿预览 ✅
* 设计稿下载 ❌
* 用户管理 ❌
* 权限分配 ❌
* 消息推送 ❌