# Eva-DingDing
### [钉钉官方文档地址](https://open-doc.dingtalk.com/docs/doc.htm?treeId=257&articleId=105735&docType=1https://open-doc.dingtalk.com/docs/doc.htm?treeId=257&articleId=105735&docType=1)
### 使用方法
```
下载工程后，在根目录新建文件webhook.js 文件
写入内容
module.exports={
  webhook: 'dingdinghook'
}
```

### markdown 模式支持的 markdown 语法
```
标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
 
引用
> A man who stands for nothing will fall for anything.
 
文字加粗、斜体
**bold**
*italic*
 
链接
[this is a link](https://www.dingtalk.com/)
 
图片
![](http://name.com/pic.jpg)
 
无序列表
- item1
- item2
 
有序列表
1. item1
2. item2
```
### 整体跳转ActionCard类型
```
参数	必选	类型	说明
msgtype	true	string	此消息类型为固定actionCard
title	true	string	首屏会话透出的展示内容
text	true	string	markdown格式的消息
singleTitle	true	string	单个按钮的方案。(设置此项和singleURL后btns无效。)
singleURL	true	string	点击singleTitle按钮触发的URL
btnOrientation	false	string	0-按钮竖直排列，1-按钮横向排列
hideAvatar	false	string	0-正常发消息者头像,1-隐藏发消息者头像
```
### 独立跳转ActionCard类型
```
参数	必选	类型	说明
msgtype	true	string	此消息类型为固定actionCard
title	true	string	首屏会话透出的展示内容
text	true	string	markdown格式的消息
btns	true	array	按钮的信息：title-按钮方案，actionURL-点击按钮触发的URL
btnOrientation	false	string	0-按钮竖直排列，1-按钮横向排列
hideAvatar	false	string	0-正常发消息者头像,1-隐藏发消息者头像
```
