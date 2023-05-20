# Git 使用全流程复习

今天来公司报道, 收到了一个 Git 仓库地址:

```
git@gitee.com:leetc/hm-data-90.git
```

代码平台: https://gitee.com/

你去熟悉一下代码, 完成一个小功能, 提交



### 1. 代码平台注册账号

- 如果使用的是 gitee / github 这些平台就自行注册账号

- 但大部分公司都有自己内部的代码平台, 他们会给你分配账号

  ```
  账号: xxx@xxx.com
  密码: xxx
  ```



### 2. 配置 SSH 公钥

1. 生成秘钥对

   输入以下命令, 敲击三次回车

   ```bash
   ssh-keygen -t rsa -C "你的邮箱"
   ```

2. 用 vscode 打开公钥

   路径 `C:\用户\用户名\\.ssh\id_rsa.pub`

   ```bash
   ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCeltU31o+kpaC9EqO5oJGFrH28p9iiJL00qHXu7Km9rDsYSjGWdCD23OQUI7cHS0fvjSNpdS5KkFdTRut45vlFM0k1eFmVxKXHVfRcuoQu7vdsBuZxVKpL/xwAkzh3ffjVd4Woj7dksKM/nLsZOS5WYNu8oALCjWi+UYIqKNl7OP8B/+Pl7AkdI90PzfTLvf1dxXfw0n93K/vYTl5OCu0gOnXjmFem4heU6dKQM8WDAlJjy2PsrUi5bDKJ80MsnuHng5yP2R1zMUpeq2rzyVR/53DpWamztxYHiHvgMC2Hmb6O/dRb+d/3GYVDJ5yAH10SIhYh0m5o12ewu0yOLccejuCmFfz5pET6/QPwi3J7nN8dQEt0EqpsfsM4PDkosvoulHBW24sYHw/VlEMH5LplLRwJ7vNC2BNpmyc1oJVy0nTXm3hTS74aTz3ZVvlDDH5+BaNteGPUh50pZUeNDPyRm0ixL4qEgxZX7p6fhH2ywzSUe/VFVcWkxI/bLqiLiL0= 6634284@qq.com
   
   ```

3. 将公钥全选-复制-粘贴到代码平台的 ssh 配置中

   1. 打开代码平台
   2. 找到个人设置
   3. 找到 ssh key 配置
   4. 添加一个公钥
   5. 将刚刚复制的公钥粘贴进来保存



### 3. 下载代码

1. 将远程仓库的代码下载到本地

    ```bash
    git clone git@gitee.com:leetc/hm-data-90.git
    ```

2. 发现只有一个默认分支 master

    ```bash
    git branch
    ```

3. 需要将远程的开发分支 develop 拉取下来

    1. 在本地建分支

    ```bash
    git checkout -b develop
    ```

    2. 拉取远程分支 (**不要在 master 分支直接拉取 develop 分支的代码**)

    ```bash
    # 每次拉取都需要指定远程仓库名和分支名
    git pull 远程仓库名 分支名
    ```

    注意: 以上 2 行命令可以合并写做一行

    ```bash
    git checkout -b develop origin/develop
    ```

    拓展: 设置 git pull 默认拉取的分支

    ```bash
    git branch --set-upstream-to=origin/develop develop
    ```

### 4. 写代码提交

1. 新建一个功能分支

   分支的命名取决于公司的命名规范

   ```bash
   git checkout -b xiaolong-login
   ```

2. 完成开发需求

3. 暂存提交本地

   ```bash
   git add .
   git commit -m "修改了登录页面xxx"
   ```

4. 将分支提交到远程

   第一次提交分支, 需要加 -u 指定仓库名 指定分支名

   ```bash
   git push -u origin xiaolong-login
   ```

5. 报告老大, 做 code review (代码审查)

6. 老大告诉你 OK 了

   1. 你有权限合并

      切换回 develop 分支

      合并 xiaolong-login 分支

      ```bash
      git checkout develop
      git merge xiaolong-login
      ```

      推送到远程

      ```bash
      git push
      ```

   2. 你没有权限合并

      老大来合并



基本原则

1. 勤拉取
2. 勤提交
3. 勤合并

去公司之后每天早上第一件事

```bash
git pull
```



### 常见问题

1. Git 仓库不能嵌套
2. git clone 命令是将仓库克隆到当前目录, 所以拉下来以后一定要 cd 进去



继续深造

- git rebase
  - squash
- git fetch
- PR Pull Request
