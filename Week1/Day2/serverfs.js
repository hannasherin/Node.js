const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
 fs.readFile('data.txt','utf-8',(err,data)=>{
    
    if(err){
        res.writeHead(500,{'content-type' : 'text/html'})
        res.end('error Reading')
    }
    res.end(data)
    
 })

})
server.listen(3000,()=>console.log('server running')
)