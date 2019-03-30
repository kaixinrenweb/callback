// 高阶函数
// 前端埋点 在ajax的请求中包装一层自己的逻辑 (应用场景)
Function.prototype.before  = function(callback){
    return (val)=>{
        callback();  // before的参数
        this(val);
    };
}

function fn(val){
    console.log("一定的功能", val);
}

let newFn = fn.before(()=>{
    console.log("在函数执行前执行");
});

newFn('你好');