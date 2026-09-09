const path=require('path')

const filepath='/user/hanna/project/app.js'
console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));
console.log(__dirname);

const fullpath=path.join(__dirname,'public','images','logo.png')
console.log(fullpath);


console.log(path.resolve('files','data.txt'));


