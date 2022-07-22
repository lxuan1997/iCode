# Git常用命令

## 拉取
```bash
git pull
```

## 推送
```bash
# 推动<branch>分支代码至<remote>仓库，如 git push origin master 
git push <remote> <branch>

# 推送所有分支代码
git push

##
git push -u
```

## 查看git所有配置
```bash
git config --list
```

## 检查文件状态
```bash
git status
git status -s
```

## 远程仓库
::: tip
shortname 仓库简写  url 仓库地址
:::
### 查看
```bash
git remote
git remote -v
```

### 添加
```bash
git remote add <shortname> <url>
```

### 重命名
```bash
git remote rename <old_shortname> <new_shortname>
```

### 移除
```bash
git remote remove <shortname>
```

## 分支

### 查看分支列表
```bash
git branch
git branch -v
```

### 创建分支
```bash
git branch <branch>
```

### 切换分支
```bash
git checkout <branch>
```

### 创建并切换分支
```bash
git checkout -b <branch>
```

### 删除分支
```bash
# 本地删除
git branch -d <branch>

# 远程删除
git push <shortname> -d <branch>
```

### 合并分支
```bash
git merge <branch>
```