const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('欢迎来到我的服务器！')
})
app.get('/api/data',(req,res)=>{
    // const data={
    //     message:'这是没有CORS支持的响应',
    //     title:'我的服务器',
    //     text:'这是我的一个简单服务器，用来测试'
    // };
    // res.json({ message:'这是没有CORS支持的响应'});
    const data =[1001,1002,1003]
    res.json(data);
});

const port = 3000;
app.listen(port,()=>{
    console.log(`服务器运行在http://localhost:${port}`);    
});