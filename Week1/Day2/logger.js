const http=require('http')
const  fs= require('fs')

const server= http.createServer((req,res)=>{
    let now=new Date()
    const log=` ${now.toLocaleString()}  | ${req.url} | ${req.method}\n ` 

    fs.appendFile('logger.log',log,(err)=>{
        console.log('Error logging');
        return
        
    })

    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'welcome'}))
    }
    else if(req.url === '/about' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'About Page'}))
    }
    else if(req.url === '/contact' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'contact Page'}))
    }
    else if(req.url === '/log' && req.method === 'GET'){
      fs.readFile('logger.log','utf-8',(err,data)=>{
          
          if(err){
              res.writeHead(500,{'content-type' : 'text/html'})
              res.end('error Reading')
          }
          res.end(data)
          
       })
    }
    
  else{
    res.writeHead(404,{'content-type':'application/json'})
        res.end(JSON.stringify({message:'page not fiound'}))
  }

})
server.listen(3000,()=>console.log('server Running')
)