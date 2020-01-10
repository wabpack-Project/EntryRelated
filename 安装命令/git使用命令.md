### 初次使用需要设置姓名和邮箱

git config –global user.name “李雪”
git config –global user.email lixue1@neunb.com

git config --global user.name “gitsweets”
git config --global user.email “1553288528@qq.com”

$ git log #我们用git log查看当前仓库的提交（commit）日志，----英文状态下按Q退出
commit 71948005382ff8e02dd8d5e8d2b4834428eece24
Author: author <author@corpmail.com>
Date: Thu Jan 20 12:58:05 2011 +0800
Project init
下面的这两行命令就是设置用户名和email：

$ git config --global user.name author #将用户名设为author
$ git config --global user.email author@corpmail.com #将用户邮箱设为author@corpmail.com
Git的配置信息分为全局和项目两种，上面命令中带了“--global"参数，这就意味是在进行全局配置，它会影响本机上的每个一个Git项目。

大家看到，上面我们用的是@corpmail（公司邮箱）；但是有时候我们可能也参与了一些开源项目，那么就需要新的用户名和自己的私人邮箱，Git 可以为每个项目设定不同的配置信息。

在命令行环境，进入Git项目所在目录，执行下面的命令：

$ git config　user.name nickname#将用户名设为nickname
$ git config　user.email nickname@gmail.com #将用户邮箱设为nickname@gmail.com

clone 项目

git clone git@github.com:jirengu/blog.git

cd blog

git clone git@gitlab.neunb.rd:DEKT/teacherSoftware.git
git clone http://gitlab.neunb.rd/DEKT/teacherSoftware.git
git clone git@gitlab.neunb.rd:neunb-platform/neunb_web_project.git
git clone https://code.aliyun.com/flylee2011/lankacheck.git
git clone https://github.com/ElemeFE/element.git
git clone https://github.com/mrxu0/nativePhoneUI.git
git clone https://github.com/breezefeng/vue-cli-multipage.git

### 命令(删除文件时)
1、git status/查看代码的修改状态
$ git status

$ git rm .mvn/wrapper/maven-wrapper.jar
$ git rm .mvn/wrapper/maven-wrapper.properties
$ git rm mvnw
$ git rm mvnw.cmd


2、git commit/提交已暂存的文件
$ git commit

3、git pull/先同步代码到本地
$ git pull

4、git push origin <本地分支名>/再同步到服务器
$ git push origin master

### 命令(修改文件内容时)
1、git status/查看代码的修改状态
$ git status
2、git add <file>/暂存需要提交的文件
$ git add src/main/java/com/xyc/redis/RedisApplication.java
3、git commit/提交已暂存的文件
$ git commit
4、git pull/先同步代码到本地
$ git pull
5、git push origin <本地分支名>/再同步到服务器
$ git push origin master





