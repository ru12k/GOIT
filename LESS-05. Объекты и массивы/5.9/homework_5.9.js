/**
 Задачка 12 В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом.
 Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет.
 Ваша функция не должна добавлять лишних пробелов. var obj = {     className: 'open menu'  }; 
 addClass(obj, 'new');
 // obj.className='open menu new'  addClass(obj, 'open');
 // без изменений  addClass(obj, 'me');
 // obj.className='open menu new me'   console.log( obj.className );
 // "open menu new me"
*/

var obj = {
    className : 'open menu'
};

var str = obj.className;
var arr = str.split(' ');
var cls = 'cls';
console.log(arr);

function addClass(obj, cls) {
    for (var i=0; i<arr.length; i++){
        if (arr[i]==cls) {
            return false;
        }
    }
    arr.push(cls);
}

addClass(arr, cls);
obj.className = arr.join(' ');
console.log(obj);

