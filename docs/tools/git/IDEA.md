# 在 IDEA 中使用 git

## cherry-pick
当你和一群程序员一起工作时，无论项目大小，处理多个 Git 分支之间的变更都会变得很困难。有时你不想将整个 Git 分支合并到另一个分支，而是想选择并移动几个特定的提交，这个过程被称为 `cherry-pick` “遴选”

### 一些问题

### Your local changes will be overwritten by cherry-pick. Commit your changes or stash them to proceed.
本地有未提交的改动，可以选择先执行 `commit`，再 执行 `cherry pick`，如果未提交的改动你暂时不想 `commit`，也可以使用 `Shelve Changes` 将其搁置，在执行 `cherry pick`后，通过 `Unshelve` 恢复