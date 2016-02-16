/**
 * Created by Rudik on 15.02.2016.
 *
 *
 Задание 5
 Перепишите if..else с использованием нескольких операторов '?':
 var name = 'admin', text;
 if (name == 'admin') {
  text = 'Hi';
} else if (name == 'manager') {
  text = 'Hello';
} else if (name == '') {
  text = 'No login';
} else {
  text = '';
}
 */
var name = 'admin';
(name == 'admin')? console.log('Hi'): (name == 'manager')? console.log('Hello'): (name == '') ? console.log('No Login'): console.log('');