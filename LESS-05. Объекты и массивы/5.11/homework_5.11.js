/**
 Написать функцию обратной сортировки reverseSort(arr). Которая сортирует численный массив от большего к меньшему.
 var arr = [5, 2, 1, -10, 8]; 
 console.log( reverseSort(arr) ); // 8, 5, 2, 1, -10
*/
function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);

console.log(arr);