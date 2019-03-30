let fs   = require("fs");
let path = require("path");

// 发布订阅
// 订阅 [fn, fn]
// 发布 [].forEach
function EventEmitter(){
    this._arr = [];
}
EventEmitter.prototype.on = function(callback){ //订阅
    this._arr.push(callback);
}
EventEmitter.prototype.emit = function(){  //发布 发布时需要让on的方法依次的执行
    this._arr.forEach(fn=>fn.apply(this, arguments));
}

let e = new EventEmitter();
let school = {};
e.on((data, key)=>{
    school[key] = data;
    if(Object.keys(school).length===2){
        console.log(school);
    }
});

fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8', (err, data)=>{
    if(err) return console.log(err);
    e.emit(data, 'name');
});
fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf8', (err, data)=>{
    if(err) return console.log(err);
    e.emit(data, 'age');
});