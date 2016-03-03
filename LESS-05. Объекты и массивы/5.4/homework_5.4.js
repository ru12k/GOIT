/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 4 Кантор: https://learn.javascript.ru/task/is-empty
 Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
 Работать должно так:
 function isEmpty(obj) {
  /* ваш код
}
var schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); // false
*/

var obj1 = {};
var obj2 = {
  name : "PETYA",
    test: "test"
};

function isEmpty(obj) {
    for (var key in obj) {
            return true;
    }
    return false;
}

console.log(isEmpty(obj1));
console.log(isEmpty(obj2));






