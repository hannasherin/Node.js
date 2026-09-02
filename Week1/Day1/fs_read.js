const fs=require('fs')
// const data=fs.readFileSync('data.txt','utf-8')
// console.log(data);

console.log('first')
fs.readFile('data.txt','utf-8',(error,data)=>{
    if(error){
        console.log(err);
        return
    }
    console.log(data);
    
})
console.log('second');
