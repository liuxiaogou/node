const http = require('http');
const fs = require('fs')
http.createServer((req,res)=>{
    // console.log('there is a request');
    // res.end('hello') 
    // req,res  都是数据流
    const {url,method,headers} = req;
    if(url==='/' && method ==='GET'){
        fs.readFile('index.html',(err,data)=>{
                if (err) {
                    res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
                    res.end('500 服务器错误')
                }
                res.status=200
                res.setHeader('Content-Type','text/html')
                // res.writeHead(200,{'Content-Type':'text/html'})

                res.end(data)  //代表流的结束
        })
    }else if(url === '/users' && method ==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify([{name:123}]))
    }else if(method ==='GET' && headers.accept.indexOf('image/*')!=-1){
        //流 
        const rs = fs.createReadStream('.'+url);
        rs.pipe(res)
    }
})
.listen(3000)