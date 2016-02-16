/**
 * Created by Rudik on 15.02.2016.
 *
 * Задание 3
 Напишите код, который будет запрашивать логин пользователя (prompt).
 Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
 Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'
 */

if (prompt("Введите ваш логин", "")=="admin") {
    if (prompt("Введите ваш пароль", "")=="passw0rd"){
        alert("Welcome home!");
    }
    else {
        alert("Wrong password");
    }
    }
else {
    alert("Canceled");
}