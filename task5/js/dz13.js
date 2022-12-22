"use strict";
// 1.
// Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: «x больше, чем y», иначе выведите фразу: «x не больше, чем y».
// let x = 10, y = 7;

let x=10;
let y=7;
x>y?console.log('x больше, чем y'):console.log('x не больше, чем y');

// 2.
// Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».Если посетитель вводит четное число, то выводить «»Число » + num + » четное»», если нечетное: «Число » + num + » нечетное
let num=+prompt('Введите число');
if(num%2){
    alert(`Число ${num} не четное`);
}else{
    alert(`Число ${num} четное`);
}

// 3.
// Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное. Например, «Число » + num + » однозначное положительное». Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать
// let a = 'string'; 
// console.log(a.length)

let a = +prompt('Введите целое число');
Number.isNaN(a)?console.log('Incorrect input'):console.log('It`s ok');

if(Number.isNaN(a)){
    console.log('Incorrect input');
}else if(a%1>0){
    console.log('Вы ввели не целое число');
}else{
    switch(a){
        case a>0:
            alert(`Число ${a} однозначно положительное, ${a.toString().length}-значное`);
            break;
        default:
            alert(`Число ${a} однозначно отрицательное, ${(a*=-1).toString().length}-значное`)
    }
}

// 4.
// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.

let firstNum=+prompt('Enter first number');
let seccondNum=+prompt('Enter seccond number');
let thirdNum=+prompt('Enter third number');

if(Number.isNaN(firstNum)||Number.isNaN(seccondNum)||Number.isNaN(thirdNum)){
    alert(`Incorrect input`);
}else{
    if(firstNum>seccondNum){

        firstNum>thirdNum?alert(`The biggest number is ${firstNum}`):alert(`The biggest number is ${thirdNum}`);
    }else{
        seccondNum>thirdNum?alert(`The biggest number is ${seccondNum}`):alert(`The biggest number is ${thirdNum}`);
    }
}

// 5.
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут> на третью и треугольника не получится.Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else, напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

let side1=+prompt('Enter length og triangle first side');
let side2=+prompt('Enter length og triangle cessond side');
let side3=+prompt('Enter length og triangle third side');

if(Number.isNaN(side1)||Number.isNaN(side2)||Number.isNaN(side3)){
    alert(`Incorrect input`);
}else{
    (side1+side2)>side3?alert('Your triangle can exist'):alert('There is no way to build a triangle');
}