var reg = /^[0-9a-z]$/;// 以一个数字或者小写字母开头 还必须以这个字符结尾； 意思也就是中间只能有一个数字或者小写字母
console.log(reg.test('1a')) // false
console.log(reg.test('a')) // true
console.log(reg.test('1')) // true
console.log(reg.test('a1a')) // false
console.log(reg.test('你')) // false

var reg2 = /^\d$/; // 以一个数字开头 并且还得以这个数字结束 ;意思也就是只能有一个数字
console.log(reg2.test('11')) 

var reg3 = /^18|19$/; // /^1(8|1)9$/
var reg3_1 = /[11-99]/;// 1 或 1到9  或  9
// var reg3_2 = /[a-Z]///  error : Range out  按照字母的阿斯克码值决定的先后顺序、



console.log('------------------------------------------------')
var reg4 = /\d/; // 有数字
console.log(reg4.test(''))//false
console.log(reg4.test('1'))//true
console.log(reg4.test('123'))//true
console.log(reg4.test('q'))//false
console.log(reg4.test('q1'))//true
var reg4_1 = /\d?/;// 有0到1个数字
console.log(reg4_1.test(''))//true
console.log(reg4_1.test('1'))//true
console.log(reg4_1.test('123'))//true
console.log(reg4_1.test('q'))//true
console.log(reg4_1.test('q1'))//true

var reg4_2 = /\d*/;// 有0到多个数字
console.log(reg4_2.test(''))//true
console.log(reg4_2.test('1'))//true
console.log(reg4_2.test('123'))//true
console.log(reg4_2.test('q'))//true
console.log(reg4_2.test('q1'))//true

var reg4_2 = /\d+/;// 有1到多个数字
console.log(reg4_2.test(''))//false
console.log(reg4_2.test('1'))//
console.log(reg4_2.test('123'))//
console.log(reg4_2.test('q'))//false
console.log(reg4_2.test('q1'))//

var reg5 = /^\d$/
console.log(reg5.test('11'))// false


var reg5_1 = /^\d+$/;  // 以数字开头，以数字结尾，中间 1到多个数字
console.log(reg5_1.test('11')) // true
console.log(reg5_1.test('12')) // true
console.log(reg5_1.test('113')) // true
console.log(reg5_1.test('11qw3')) // false

var reg5_1 = /^6+$/
console.log(reg5_1.test('616')) //
console.log(reg5_1.test('6666')) // 
console.log(reg5_1.test('66')) //



