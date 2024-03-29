# 一些操作

## 将本地仓库上传至git
```shell
# 本地仓库初始化
git init

# 添加全部修改文件至暂存区
git add .

# 提交更改并备注相关提交信息
git commit -m '项目初始化'

# 连接到远程仓库
git remote add <shortname> <url>

# 提交
git push -u <shortname> master
```

## 创建一个空分支
```bash
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>

# 早些时候的操作
git checkout --orphan empty-branch
git rm -rf .
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>
```


## 查看/修改本地git用户名和邮箱
```bash
# 查看用户名
git config user.name
# 修改用户名
git config user.name 'xxx'

# 查看邮箱
git config user.name
# 修改邮箱
git config user.email 'xxx'
```

## 其他
- [GitHub仓库快速导入Gitee及同步更新](https://gitee.com/help/articles/4284)
