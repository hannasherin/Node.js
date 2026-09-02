const fs=require('fs')
// fs.appendFile('data.txt','\n something enter here',(err)=>{
//  if(err){
//         console.log('error appendingfilr',err);
//         return
        
//     }
//     console.log('file append completed');
    
// })
fs.appendFileSync('data.txt','\n appaented text')