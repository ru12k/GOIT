/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 4
 Задание 4 (FizzBuzz 2)
 Исправьте предыдущую задачу FizzBuzz так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

 */
for (var i=1; i<=100; i++) {
   if ((i%5==0) && (i%3==0)) {
        console.log(i+':'+'FizzBuzz')
    }
    else {
        console.log(i);
    }
}