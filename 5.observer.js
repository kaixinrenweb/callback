// 观察者模式 基于发布订阅模式的
// 发布订阅  发布和订阅无关的
// 观察者模式 观察者和被观察者是有关系的
// 被观察者 应该存放着观察者
// 被观察者的状态的变化 要更新自己身上的所有的观察者

// 被观察者
class Subject { //小宝宝
    constructor(){
        this.state = "开心";
        this.arr = []; //订阅
    } 
    attach(observer){ // 装载观察者的
        this.arr.push(observer);
    }
    setState(newState){ //更新自己的状态
        this.state = newState;
        //发布
        this.arr.forEach(observer=>observer.update(newState));
    }   
}

// 观察者
class Observer {
    constructor(name){
        this.name = name;
    }
    update(newState){
        console.log(`${this.name}发现：小宝宝${newState}`);
    }
}

let subject = new Subject();
let my1 = new Observer("我");
let my2 = new Observer("我媳妇");
subject.attach(my1);
subject.attach(my2);
subject.setState("不开心");