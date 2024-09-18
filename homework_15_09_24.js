var result1 = 'number' + 3 + 3;
console.log(result1); // результат 'number33', відбулася конкатенація;
var result2 = null + 3;
console.log(result2); // результат '3', конвертує null до 0

var result3 = 5 && "qwerty";
console.log(result3); // результат 'qwerty', бо обидва значення 'true', тому вертає останнє

var result4 = +'40' + +'2' + "hillel";
console.log(result4); //  результат '42hillel', тобто відбулася конкатенація

var result5 = '10' - 5 === 6;
console.log(result5); // результат 'false', тому що '10' конвертувалось в 10, 10-5=5, а 5 не дорівнює 6

var result6 = true + false;
console.log(result6); // результат '1', конвертація 'true' до 1, а  'false' - до 0, 1+0=1

var result7 = '4px' - 3;
console.log(result7); // результат 'NaN', конвертація до числа не успішна, тому арифметична дія не може привести до числа

var result8 = '4' - 3;
console.log(result8); // результат '1', конвертація до числа успішна, тому арифметична дія відбулася 4-3=1

var result9 = '6' + 3 ** 0;
console.log(result9); // результат '61',  '3' в ступені '0' дорівнює 1, а далі відбулася конкатенація 

var result10 = 12 / '6';
console.log(result10); // результат '2', конвертація до числа успішна, тому арифметична дія відбулася 12/6=2

var result11 = '10' + (5 === 6);
console.log(result11); // результат '10false', '5' не дорівнює '6', тому вертається 'false', а далі відбулася конкатенація 

var result12 = null == '';
console.log(result12); // результат 'false', тому що 'null' приблизно дорівнює 'undefined', але не пустій строці, тому вертається 'false'

var result13 = 3 ** (9 / 3);
console.log(result13); // результат '27', тому що 9/3=3, '3' в ступені '3' дорівнює 27

var result14 = !!'false' == !!'true';
console.log(result14); // результат 'true', тому що одинаковий тип даних boolean

var result15 = 0 || '0' && 1;
console.log(result15); // результат '1', тому що повертає перше правдиве значення, бо 0 - це 'false'

var result16 = (+null == false) < 1;
console.log(result16); // результат 'false', бо 'null' конвертується в '0' і вираз 0 == false є 'true', '1' є 'true', true < true - false

var result17 = false && true || true;
console.log(result17); // результат 'true', тому що false && true повертає false, і false || true повертає true

var result18 = false && (false || true);
console.log(result18); // результат 'false', тому що false || true повертає true, а false && true повертає false

var result19 = (+null == false) < 1 ** 5;
console.log(result19); // результат 'false', бо 'null' конвертується в '0' і вираз 0 == false є 'true', а 'true' < 1 - це false