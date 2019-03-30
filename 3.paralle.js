// 并发的调用接口
// 两个ajax ajax1=>name ajax2=>age = name+age
let fs   = require("fs");
let path = require("path");

function after(times, callback){
    let results= {};
    return (key, data)=>{
        results[key] = data;
        if(--times===0){
            callback(results);
        }
    }
}
let newFn = after(2, (results)=>{
    console.log(results);
});


fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8', (err, data)=>{
    if(err) return console.log(err);
    newFn('name', data);
});
fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf8', (err, data)=>{
    if(err) return console.log(err);
    newFn('age', data);
});

// 串行 两个人有关系 上一个输出是下一个人的输入
// 并行 两个人没有关系 可以一起执行