// synchronous base 
const fs=require('fs')
// fs.writeFileSync('data.txt','This file written using fs module')

// asynchronous 
// const newcontent='This is asynchrouns method to write file'
// fs.writeFile('data.txt',newcontent,(err)=>{
//     if(err){
//         console.log('erroe filr',err);
//         return
        
//     }
//     console.log('file write completed');
    
// })

fs.writeFile('data.txt','\n new content added',{flag:'a'},(err)=>{
    if(err){
        console.log('error appendingfilr',err);
        return
        
    }
    console.log('file append completed');
    
})