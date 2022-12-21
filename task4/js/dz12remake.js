// "use strict";
// // // 1.
// // // Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: «x больше, чем y», иначе выведите фразу: «x не больше, чем y».
// // // let x = 10, y = 7;

// // let x=10;
// // let y=7;
// // x>y?console.log('x больше, чем y'):console.log('x не больше, чем y');

// // // 2.
// // // Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».Если посетитель вводит четное число, то выводить «»Число » + num + » четное»», если нечетное: «Число » + num + » нечетное
// // let num=+prompt('Введите число');
// // if(num%2){
// //     alert(`Число ${num} не четное`);
// // }else{
// //     alert(`Число ${num} четное`);
// // }

// // 3.
// // Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, а также положительное оно или отрицательное. Например, «Число » + num + » однозначное положительное». Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// // Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать

// // let a = 'string'; 
// // console.log(a.length)

// let a = +prompt('Введите целое число').trim(); 
// switch(Number.isInteger(a));

let birthYear = prompt(' enter number');
let age=null;
let type = Number.isNaN(1 * birthYear);

let city = null;
let country=false;
let capitals=['Kyiv','Moskow','Minsk'];
let countries=['Ukraine','mordor','Belosussia'];

let sportUser=null;
const sportLib=['Football','hockey','tennis'];
let champion=false;
const championLib=['Lionel Messi', 'Roger Federer', 'Connor McDavid'];


switch(type){
    case true:
        switch(birthYear){
            case '':
             alert(`You haven't entered the year of your birth`);
             break;
            case null:
                alert(`You haven't entered the year of your birth`);
                break;
            default:
                alert('Wrong data inputed')
                break;
            }
    default:
        switch(Number(birthYear)<new Date().getFullYear()){
            case true:
                age=new Date().getFullYear() - Number(birthYear);
                //запускаем запрос города
                city=prompt('enter city');
                type = Number.isNaN(1 * city);
                if(type===true){
                    if(city!==null && city!==''){
                        console.log('City entered correctly. City = '+city);
                        switch(city.toLowerCase()){
                            case capitals[0].toLowerCase():
                                country=countries[0];
                                // alert(country);
                                break;
                            case capitals[1].toLowerCase():
                                country=countries[1];
                                break;
                            case capitals[2].toLowerCase():
                                country=countries[2];
                                break;
                            default:
                                break;
                        }
                        sportUser=prompt('Your favorite sports:\n Football\n Hockey\n Tennis');

                        switch(sportUser.toLowerCase()){
                            case sportLib[0].toLowerCase():
                                champion=championLib[0];
                                break;
                            case sportLib[1].toLowerCase():
                                champion=championLib[0];
                                break;
                            case sportLib[2].toLowerCase():
                                champion=championLib[2];
                                break;
                        }

                        switch(country){
                            case false:
                                switch(champion){
                                    case false:
                                        alert(`You are ${age} years old.\nYou live in  ${city}.\n`);
                                        break;
                                    default:
                                        alert(`You are ${age} years old.\nYou live in  ${city}.\nCOOL! You wanna be like ${champion}`);
                                        break;
                                }
                                break;
                            default:
                                switch(champion){
                                    case false:
                                        alert(`You are ${age} years old.\nYou live in te capital of ${country}.`);
                                        break;
                                    default:
                                        alert(`You are ${age} years old.\nYou live in te capital of ${country}.\nCOOL! You wanna be like ${champion}`);
                                        break;
                                }
                                break;
                        }

                    }else{
                        alert(`You haven't entered a city you live in`);
                    }
                }else{
                    alert('Incorrect City name. goodbye')
                }
                break;
            default:
                alert(`You haven't been born yet. Goodbye`)
                break;
        }
}



// switch(birthYear){
//     case '':
//      alert(`You haven't entered the year of your birth`);
//      break;
//     case null:
//         alert(`You haven't entered the year of your birth`);
//         break;
//     default:
//         switch(type){
//             case false:
            
//                 age=new Date().getFullYear() - Number(birthYear);
//                 // console.log('not nan');
//                 //запускаем запрос города
//                 city=prompt('enter city');
//                 type = Number.isNaN(1 * city);
//                 if(type===true){
//                     if(city!==null && city!==''){
//                         // console.log('City entered correctly. City = '+city);
//                         switch(city){
//                             case capitals[0]:
//                                 country=countries[0];
//                                 alert(country);
//                                 break;
//                             case capitals[1]:
//                                 country=countries[1];
//                                 break;
//                             case capitals[2]:
//                                 country=countries[2];
//                                 break;
//                             default:
//                                 break;
//                         }
//                         // sports=prompt('Your favorite sports:\n Football\n Hockey\n Tennis');
//                         // switch(sports){
                            
//                         // }
//                     }else{
//                         alert(`You haven't entered a city you live in`);
//                     }
//                 }else{
//                     alert('Incorrect City name. goodbye')
//                 }

//                 break;
//             default:
//                 // 
//                 break;
//         }

// }