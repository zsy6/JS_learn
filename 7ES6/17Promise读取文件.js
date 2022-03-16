//1、引入fs模块
const fs = require('fs');
//之前2里的内容没有被注释，会影响到3里的读取状态，一直为成功,将fs改成let就可以了
//question：fs是一个值？

//2、调用方法 读取文件
/*
fs.readFile('../README.md',(err,data)=>{
    //如果失败就抛出错误
    if(err) throw err;
    //如果没有出错，则输出
    console.log(data);
    console.log(data.toString());

});
*/
//1 文件相对路径
//2 回调函数 err 错误对象 出错的话是错误对象 失败是null   data是读取的结果 是个buffer


//3、使用promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile("../REA2DME.md",(err,data)=>{
        
        if(err){
            reject(err);
            //设置失败的值为错误对象
        }       
        //如果成功
        resolve(data);
        //question：为什么这歌设置promise对象为成功的resolve不会被执行
    });
});

p.then(function(value){
    console.log("读取成功");
},function(reason){
    console.log("读取失败");
});

p.then(function(value){
    console.log("读取成功");
},function(reason){
    console.log("读取失败");
});   
//question：发现两次都读取失败
//是否promise的状态只能被设置一次