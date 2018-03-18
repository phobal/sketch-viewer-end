### Sketch-Viewer 接口文档

1. 创建项目  

描述： 用户创建一个项目，用于归类项目属性  
接口名称: `/project`  
请求方式: `POST`,  
请求参数:

``` json
{
  "name": "String", // 项目名称
  "description": "String", // 项目描述
}
```
返回值:

``` json
{
   "success": true,
    "data": null,
    "exeCode": 200,
    "exeMsg": null
}
```

2. 删除项目  

描述： 根据项目 ID 来删除一个项目  
接口名称: `/project`  
请求方式: `DELETE`,  
请求参数:

``` json
{
  "_id": "String", // 项目名称
}
```
返回值:

``` json
{
   "success": true,
    "data": null,
    "exeCode": 200,
    "exeMsg": null
}
```
3. 编辑项目

描述： 修改现有项目的属性  
接口名称: `/project`  
请求方式: `PUT`,  
请求参数:

``` json
{
  "_id": "String", // 项目 ID
  "name": "String", // 项目名称
  "description": "String", // 项目描述
}
```
返回值:

``` json
{
   "success": true,
    "data": null,
    "exeCode": 200,
    "exeMsg": null
}
```

4. 查询所有项目列表  

描述： 修改现有项目的属性  
接口名称: `/project`  
请求方式: `GET`,  
请求参数: 无
返回值:

``` json
{
   "success": true,
    "data": [{
      "_id": "String",
      "name": "String",
      "description": "String",
      "createdAt": "String",
      "updateAt": "String"
    }],
    "exeCode": 200,
    "exeMsg": null
}
```

5. 上传 .zip 文件

描述： 上传 zip 格式的设计稿文件  
接口名称: `/upload`  
请求方式: `POST`,  
请求参数: stream 文件流
返回值:

``` json
{
   "success": true,
    "data": null,
    "exeCode": 200,
    "exeMsg": null
}
```
