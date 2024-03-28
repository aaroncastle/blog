# 关于本博客

开发版本：nodejs v20.10.0

包管理工具： yarn v1.22.22

## 用途

搭建自定义博客后端，提供 API 接口。

## 功能

- 支持服务器的后端代码

- 提供标准HTML、CSS、JavaScript的前端代码

- 后端同时提供为 [upic](https://github.com/gee1k/uPic) 服务的图片存储功能

  > 与博客内的图片、视频、文档一样，为upic提供的上传资源（这里特指图片）并不存在于服务器上，而是存在于阿里云OSS对象存储内，以节省宝贵的服务器资源。这些需要用户在`config.json`中自定义

- 提供自定义本地服务器部署，将私人资源保存在本地服务器上。

- 数据库为`MongoDB`，采用OEM框架为`Mongoose`



## 配置

配置文件在`config/config.json`中。具体配置如下：

|         字段         |  类型  | 默认值 |                           说明                            |
| :------------------: | :----: | :----: | :-------------------------------------------------------: |
|    defaultAvatar     | string |  none  |                      默认头像url地址                      |
|   mongoDBBasename    | string | "blog" |                      默认数据库名称                       |
|    mongoDBServer     | object |  none  | 自定义数据库地址，默认无，不配置时是本址的localhost:27017 |
| mongoDBServer.domain | string |  none  |             自定义数据库服务器的域名或ip地址              |
|  mongoDBServer.port  | string |  none  |              自定义数据库服务器地址的端口号               |

