/**
 * Created by Rudik on 15.02.2016.
 *
 * Задание 2
 * Задание 2 (Изменение численных свойств)
 Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.
 // Before
 var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};
 multiplyNumeric(image);
 // after
 image = {
    width: 200,
    height: 800,
    title: 'Cool image'
};

 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(image){

    for (var key in image) {
        if (typeof image[key] == 'number') {
            image[key] = image[key] * 2;
        }
    }
    return image;
}
multiplyNumeric(image);

for (var key in image) {
    console.log(image[key]);
}

