const fs=require('fs')

// fs.mkdir('myFolder',(err)=>{
//      if(err){
//         console.log('error creating Directory',err);
//         return
        
//     }
//     console.log('Directory Created');
    
// })

// fs.mkdir('public/images',{recursive:true},(err)=>{
//      if(err){
//         console.log('error creating Directory',err);
//         return
        
//     }
//     console.log('Directory Created');
    
// })

// fs.readdir('myFolder',(err,files)=>{
//     if(err){
//         console.log('error read Directory',err);
//         return
        
//     }
//     console.log(files);
    
// })

// rename 
// fs.rename('myFolder','renameFolder',(err)=>{
//    if(err){
//         console.log('error',err);
//         return
         
//     }
//     console.log('folder renamed');
// })

// delete 
fs.rm('public',{recursive:true},(err)=>{
    if(err){
        console.log('error',err);
        return
         
    }
    console.log('derectory removed');
})