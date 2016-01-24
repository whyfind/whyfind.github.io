---
title: 关于Hexo deploy操作踩过的坑
date: 2016-01-24 20:05:33
---
### 2016的第一个开始。

### 1.第一个坑
解决办法：
``` bash
deploy 的 repository 要从 HTTPS值改成SSH值
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
 $ git remote add origin https://github.com/whyfind/whyfind.github.io.git
```
