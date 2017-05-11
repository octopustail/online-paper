# JavaScript 栈在线练习模板

## 官方人员使用方法

1. 在github的tws-online-quiz下建一个库，比如pos-v0-node
2. 安装小工具tws-quiz-tool: ```$ npm install -g tws-quiz-tool ```
3. 在本地执行qinit + 库名，比如``` $ qinit pos-v0-node ```
4. 写完内容完毕，push：```$ git push -u origin master ```
5. 然后切换到answer分支并merge ``` $ git checkout answer && git merge master```
6. 写完answer内容，push：```$ git push -u origin master ```


## 每道题请添加下列内容

    
    ## 答题流程
    
    1. 请用户仔细阅读题目要求和题目描述
    
    2. 在命令行中使用以下命令在用户本地任意目录下clone此题目库
    
    ```
    git clone repo_of_this_template
    ```
    
    NOTE：如果提示git命令未找到请先阅读参考资料
    
    3. 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
    
    ```
    spec  //测试文件夹
    src   //源文件
    ```
    
    `请在src文件下的main.js文件内实现main函数`
    
    4. 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
    ```
     git remote set-url origin my_url
    ```
    7. 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 
    
    8. 获取分支
    
    9. 提交
    
    10. 等待结果
    
    
    ## 如何运行
    
    首先初次下载完需要安装依赖：
    
    ```
      npm install
    ```
    
    然后才能执行测试：
    
    ```
      npm test
    ```
    
    可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
    
