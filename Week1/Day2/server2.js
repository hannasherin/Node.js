const http=require('http')
http.createServer((req,res)=>{

if(req.url==='/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>About Page</h1>')
}
else if(req.url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Home PAge</h1>')
}
else if(req.url === '/contact'){
    res.writeHead(200,{'content-type':'text/html'})
    res.end('<h1>Contact PAge</h1>')
}
else{
    res.writeHead(404,{'content-type': 'text/html'})
    res.end('<h1> page not Found </h1>')
}
})
.listen(3000,()=>console.log('server running'))