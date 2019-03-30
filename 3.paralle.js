// 并发的调用接口
// 两个ajax ajax1=>name ajax2=>age = name+age

let fs = require("fs");
let path = require("path");
fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8', (err, data)=>{
    if(err) return console.log(err);
    console.log(data);
});