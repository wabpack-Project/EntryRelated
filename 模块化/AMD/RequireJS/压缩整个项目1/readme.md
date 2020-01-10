### 主要实现功能
1. 项目文件都配置到src文件夹下
2. 压缩配置文件放到config文件夹下
3. 压缩编译后文件放到dist文件夹下
4. 编译后文件引用不需要调整
5. build.js 主要配置编译的配置 
6. main.js 项目主入口
7. 每个模块需要在build.js 里声明，不然会报错
8. 具体配置详见参考文档

### 执行命令
node config/r.js -o config/build.js

### 压缩合并然后删除build.txt
node config/r.js -o config/build.js

del dist\build.txt