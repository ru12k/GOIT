/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 6
 a) http://www.codewars.com/kata/convert-a-number-to-a-string/
 We need a function that can transform a number into a string.
 What ways of achieving this do you know?
 Examples:
 numberToString(123); // returns '123';`
 numberToString(999); // returns '999';

 b) http://www.codewars.com/kata/convert-a-string-to-a-number/
 We need a function that can transform a string into a number. What ways of achieving this do you know?
 Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
 Examples
 stringToNumber("1234") == 1234
 stringToNumber("605" ) == 605
 stringToNumber("1405") == 1405
 stringToNumber("-7"  ) == -7`
 */
function numberToString(num) {
    return String(num);
    // Return a string of the number here!
}
numberToString(32);

var stringToNumber = function(str){
    return Number(str);
}
stringToNumber("12");