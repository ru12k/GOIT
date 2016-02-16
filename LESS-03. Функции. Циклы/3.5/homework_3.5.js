/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 5
 Задание 5 (Шахматная доска)
 Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо \#. В результате должна получиться шахматная доска.

 */

var n=3;

for (var i=1; i<=n; i++) {
    var cell1='#';
    var cell2=' ';
    var line;
    if (i%2==0) {line=cell1+cell2;}
    else {line=cell2+cell1;}
    console.log(getLine());
}

function getLine(){
    for (var k=1; k<=n; k++) {
        line += line;
    }
    return line;
}


