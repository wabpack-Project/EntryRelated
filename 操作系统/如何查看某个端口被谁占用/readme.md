### 如何查看某个端口被谁占用
https://jingyan.baidu.com/article/3c48dd34491d47e10be358b8.html

### window下强制杀死某个进程用taskkill /pid 进程号 -t -f命令
https://blog.csdn.net/u012523921/article/details/51839450

### 详细命令
#### 查看被占用端口对应的PID
netstat -aon|findstr "8081"
#### 查看是哪个进程或者程序占用了8081端口
tasklist|findstr "8081"
#### 结束该进程
taskkill /f /t /im Tencentdl.exe。
taskkill /pid 2472 -t -f;