var reg = /\d/;
console.log(reg.test('你好'))// 查看后边的字符串中 有没有满足正则的字符
console.log(reg.test('你好234234'))
console.log(reg.test('你0好2'))
console.log(reg.test('你9好'))
console.log(reg.test('你好23'))

var reg2 = /\D/
console.log(reg2.test('你好'))
console.log(reg2.test('你好234234'))
console.log(reg2.test('你0好2'))
console.log(reg2.test('你9好'))
console.log(reg2.test('你好23'))

var reg3 = /\W/
console.log(reg3.test('你好'))
console.log(reg3.test('你好234234'))
console.log(reg3.test('你0好2'))
console.log(reg3.test('你9好'))
console.log(reg3.test('你好23'))

console.log('=======================================================================')
var reg4 = /^\d/;
console.log(reg4.test('你好'))
console.log(reg4.test('a你好234234'))
console.log(reg4.test('你0好2'))
console.log(reg4.test('666'))
console.log(reg4.test('0你好23'))

console.log('=======================================================================')
var reg5 = /\d$/;
console.log(reg5.test('你好'))
console.log(reg5.test('a你好234234'))
console.log(reg5.test('你0好2'))
console.log(reg5.test('666'))
console.log(reg5.test('0你好23'))

console.log('=======================================================================')
var reg5 = /^\d$/;
console.log(reg5.test('你好'))
console.log(reg5.test('a你好234234'))
console.log(reg5.test('你0好2'))
console.log(reg5.test('666'))
console.log(reg5.test('0你好23'))
console.log(reg5.test('7'))

var reg6 = /\./;         //  点在正则中代表除了换行以外的所有字符 \. 才代表  点  本身
console.log(reg6.test('123'))
console.log(reg6.test('12.3'))
console.log(reg6.test('dgwgydgyiw.ddwd'))


var reg7 = /[ab]/;      // 字符串中含有 a 或 b 
console.log(reg7.test('ahello'))
console.log(reg7.test('hello'))
console.log(reg7.test('hello b'))
console.log(reg7.test('hello ab'))


// 能匹配数字和字母的正则
var reg8 = /[0-9a-zA-Z]/
console.log(reg8.test('aBc'))
console.log(reg8.test('6aBc'))
console.log(reg8.test('_'))


var reg9 = /18|19/
console.log(reg9.test('1819'))
console.log(reg9.test('18'))
console.log(reg9.test('19'))
console.log(reg9.test('1'))
console.log(reg9.test('9'))
console.log(reg9.test('819'))

