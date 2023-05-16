# Git 仓库注意事项

初次下载资料：

```bash
git clone git@gitee.com:leetc/class-notes-90.git
```

每次资料更新后：

```bash
git pull
```

注意事项

**下载资料后，不要在仓库内做任何修改，否则下一次 pull 时会有冲突！**

**复制到其他地方后修改**

如果不小心修改了内容，又想继续使用 `git pull` 拉取最新的资料

```bash
git status # 查看状态
git pull # 可能无法直接拉取, 存在冲突
git reset --hard HEAD~0 # HEAD~0 最新的版本, HEAD~1 表示最新版本的上一个版本
git pull # 拉取最新的资料
```

**`git reset --hard` 命令一定要慎用，此操作会删除所有未提交的内容**

也可以删除库后重新 `git clone`