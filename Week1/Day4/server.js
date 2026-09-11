const http=require('http')
const fs=require('fs');
const { log } = require('console');

const server=http.createServer((req,res)=>{
    let filepath;
    let contentType;

    if(req.url==='/'){
        filepath='./public/index.html'
        contentType='text/html'
    }
    else if(req.url=== '/index.css'){
        filepath='./public/index.css'
        contentType='text/css'
    }
    else{
        res.end('File not Found')
        return
    }


    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.end('err Readinf File')
            return
        }
        res.writeHead(200,{'content-type': contentType})
        res.end(data)
    })
})
server.listen(3001,()=> console.log('server running'))