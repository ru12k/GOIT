/**
 * Created by Rudik on 15.02.2016.
 *
 * Задание 1 (Кто первым решил больше всех задач)
 Напиште код который выведет сотрудника который выполнил больше всех задач.
 Например:
 var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

 */

var tasksCompleted = {
    'Anna': 29,
    'Serg': 300,
    'Elena': 1,
    'Anton': 200
};

var temp=null;

for (key in tasksCompleted) {
    if (tasksCompleted[key]>=temp) {
        temp = tasksCompleted[key];
    }

}

console.log(temp);









