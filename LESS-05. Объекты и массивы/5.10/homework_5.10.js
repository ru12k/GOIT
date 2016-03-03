/**
 Задачка 13 Напишите функцию toCamelCase(str), которая преобразует строки вида «my-short-string» в «myShortString».
 То есть, дефисы удаляются, а все слова после них получают заглавную букву. Например:
 toCamelCase('background-color'); // 'backgroundColor';  toCamelCase('list-style-image');
 // 'listStyleImage';  toCamelCase('-webkit-transition'); // 'WebkitTransition';
 P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/
var str = 'background-color';

function toCamelCase(str) {

    var arr = str.split('-');
    var str1;
    var str2;

    for (var i=0; i<arr.length; i++) {
        if (i>0) {
            str1 = arr[i].charAt(0).toUpperCase();
            str2 = arr[i].substr(1, arr[i].length-1);
            arr[i] = str1+str2;
        }
    }

    str = arr.join('');
    return str;

}

console.log(toCamelCase(str));



