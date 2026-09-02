const fs=require('fs')
fs.unlink('dummy.txt',(err)=>{
    if(err){
        console.log('error deleted file',err);
        return
        
    }
    console.log('file deleted ');
    
})