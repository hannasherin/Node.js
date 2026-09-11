const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=>{
    let filepath;
    if (req.url === '/') {
        filepath = './public/index.html'
    }
    else {
        filepath = './public'+req.url;
    }

    const extension = path.extname(filepath)
    let contentType = 'text/html'
    switch(extension){
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'application/javascript'
            break;
        case '.jpeg':
            contentType = 'image/jpeg'
            break;
    }

    fs.readFile(filepath,(err,data)=>{
        if(err){
            fs.readFile('./public/404.html',(err,data)=>{
                res.writeHead(404,{'content-type':'text/html'})
                res.end(data)
            })
            return
        }
        res.writeHead(200,{'content-type': contentType})
            res.end(data)
    })
})
server.listen(3002,()=>console.log('server running'))