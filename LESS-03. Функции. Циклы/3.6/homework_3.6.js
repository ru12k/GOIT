/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 6
 Задание 6 (pow)
 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 pow(3, 2) = 3 * 3 = 9
 pow(1, 100) = 1 * 1 * ...* 1 = 1
 */

function pow(x,n) {
    if (n==1) {
        return x;
    }
    return x * pow(x, n-1);
}
console.log(pow(3,2));



