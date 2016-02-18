/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 4
 Codewars
 http://www.codewars.com/kata/a-function-within-a-function

 */

// return a function that returns n
function always(n) {
    return function() {
        return n;
    }
}

var test = always(3);
console.log(test());
