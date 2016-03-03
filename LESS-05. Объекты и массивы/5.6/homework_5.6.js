/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задачка 6 Написать функцию которая принимает на вход массив и возвращает последний элемент массива.
*/

var arr1=[1,2,3,4,5,];
var arr2=[9,8,7,6];

function getLastItem(obj) {
    for (var i=0; i<obj.length; i++) {
        if (i==obj.length-1) {
            return obj[i];
        }
    }

    return false;
}

console.log(getLastItem(arr1));
console.log(getLastItem(arr2));
