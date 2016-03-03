/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 5 Кантор:

 а) https://learn.javascript.ru/task/sum-salaries
 Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
 Если объект пустой, то результат должен быть 0.
 Например:

 "use strict";

 var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

 //... ваш код выведет 650
 P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

 б) https://learn.javascript.ru/task/max-salary
 Свойство с наибольшим значением
 Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
 Если объект пустой, то пусть он выводит «нет сотрудников».
 Например:

 "use strict";

 var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

 // ... ваш код выведет "Петя"
*/
"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var sum=0;

function getSum(salaries) {
    for (var key in salaries) {
        sum+=salaries[key];
    }
    return sum;
}

console.log(getSum(salaries));


