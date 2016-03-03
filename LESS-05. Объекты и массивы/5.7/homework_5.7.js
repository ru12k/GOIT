/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задачка 7 Написать функцию которая принимает на вход  2 параметра: массив, и элемент (любого типа).
 Этот элемент нужно добавить в конец массива. Функция должна вернуть массив с добавленным новым элементом.

*/

var arr = [1,2,34,5];
var str = 'str';

function setElement(arr, item) {
   return arr.push(item);
}

setElement(arr,str);
console.log(arr);