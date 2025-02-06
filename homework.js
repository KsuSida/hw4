'number' + 3 + 3;
// result: number33
// system will add everything as a string, as 'number' could not be transfered into number with Number('number')

null + 3;
// result: 3
// 0 + 3 -> system will take 'null' as 0

5 && 'qwerty';
// result: qwerty
//

+'40' + +'2' + 'hillel';
// result: 42hillel
//a string is after '+' so it remains as a string -> a result is a string

'10' - 5 === 6;
// result: false
// 10 -5 = 5 and 5 is not equal to 6

true + false;
// result: 1
// true is 1, false is 0, 1+0=1

'4px' - 3;
// result: NaN
// system can't substract as 4px is not a number

'4' - 3;
// result: 1
// system makes it as Number('4')-3 = 1

'6' + 3 ** 0;
// result: 61
// 3**0 = 1, here we have '+', so '6' + 1 = 61

12 / '6';
// result: 2
// system counts it as 12/Number('6') =2

'10' + (5 === 6);
// result: 10false
// 5 is not equal 6, it is false , '10' + 'false' = 10false

null == '';
// result: false
//null is not equal 0

3 ** (9 / 3);
// result: 27
// 9/3 = 3, 3**3 = 27

!!'false' == !!'true';
// result: false
// as false is not equal to true

0 || ('0' && 1);
// result: 1
// '0' && 1 is 1; 0 || 1 is 1

(+null == false) < 1;
// result: false
// true is 1, 1< 1 -> false

(false && true) || true;
// result: true
// false or true -> true

false && (false || true);
// result: false
//false and false is false

(+null == false) < 1 ** 5;
// result: false
// 1 is not less than 1
