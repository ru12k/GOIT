/**
 * Created by Rudik on 15.02.2016.
 *
 * Задание 2 (Вывести простые числа)
 Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
 Другими словами, n > 1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
 Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
 P.S. Код также должен легко модифицироваться для любых других интервалов.
 */
var n=30;

for (var i=2; i<=n; i++) {
    for (var k=2; k<i; k++){
        var def;
        if (i%k==0) {
            def=false;
            break;
        }
        else {
            def=true;
        }
    }
    if (def) {
        console.log(i);
    }
}


/*
for (var i=2; i<=n; i++){
    for(var k=2; k<=i; k++){
        if (i%k == 0) break;
    }
    if(k==i) console.log(i);
}

*/
