/**
 * Created by Rudik on 15.02.2016.
 *Задание 3
 *Задание 3 (Калькулятор)
 Напишите код, который:
 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен.
 *
 *
 */
var arr = [];
var i=0;
var temp;
var summ=0;


 while (true) {
     temp = prompt("input number", '');
     if (!isNaN(parseFloat(temp) && isFinite(temp))) {
         arr[i]=+temp;
     }
     else  {
         break;
     }
     i++;
 }

for (var k=0; k<arr.length; k++) {
    summ += arr[k];
}

console.log(summ);