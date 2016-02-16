/**
 * Created by Rudik on 15.02.2016.
 * При открытии страницы спрашиваем имя пользователя после чего выводим его на экран. Переспрашиваем его правда ли это его имя? И выводим true/false на экран.
 */

var userName=prompt("Enter your name", "");
alert("Your name is "+userName);

if (confirm("You shure?!")) {
    alert("OK");
}
else {
    alert("false");
}



