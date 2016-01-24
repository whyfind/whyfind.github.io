---
title: Hexo deploy操作踩过的坑
date: 2016-01-24 20:05:33
---
### 2016的第一个开始。

### 1.第一个坑
错误信息是这样的：
``` bash
bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': No error
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Error: bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com\': No error

at ChildProcess.<anonymous> (E:\zan\www\gitpages\hexo\zanjs.github.io\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:42:17)
at emitTwo (events.js:87:13)
at ChildProcess.emit (events.js:172:7)
at maybeClose (internal/child_process.js:818:16)
at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)
```
解决办法：
``` bash
deploy 配置的 repository 要从
HTTPS值(https://github.com/username/username.github.io.git)
改成SSH值(git@github.com:username/username.github.io.git)

```

### 2.第二个坑
错误信息是这样的：
``` bash
 Please make sure you have the correct access rights and the repository exists.
 FATAL Something\'s wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
 Error: Permission denied (publickey).
 fatal: Could not read from remote repository.
```
解决办法:
``` bash
 $ eval "$(ssh-agent -s)"
 $ ssh-add
```

### 3.第三个坑
错误信息是这样的：
``` bash
 git branch 出错
```
解决办法:
``` bash
 git init 
```

### 4.第四个坑
错误信息是这样的：
``` bash
 $ git push origin hexo
 fatal: 'origin' does not appear to be a git repository
 fatal: Could not read from remote repository.
```
解决办法：
``` bash
 $ git remote add origin https://github.com/username/username.github.io.git
```
