RegExp.prototype.execAll = function(str=''){
    // 首先查看有没有对应的正则，有没有修饰符 g
    var reg = this;  // 因为this 不能赋值 所以我们用了一个变量去代替 this;
    if(!reg.global){
        // 代表正则没有修饰符g    需要我们补一个g
        reg = eval(reg.toString()+'g')
       
    }
    // 怎么保证 str 是字符串？

    str = str.toString();
    // this ---> reg2
    var res = reg.exec(str);
    var ary = [];
    while(res){
        ary.push(res);
        res = reg.exec(str); // 每次while循环 都要更新 res;
    }
    return ary
}
// var str = '你好2019www哈哈2018hello珠峰2020qqq哈哈2021world'; //只捕获哈哈后边的数字
// var reg2 = /哈哈(\d+)([a-z])/;
// console.log(reg2.execAll(str))