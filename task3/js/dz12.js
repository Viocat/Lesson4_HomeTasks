"use strict";

     
const birthYear = prompt('Введите год вашего рождения');
let age = null;
let city = null;
let sports = null;
let country = null;
let isCapital = false;
let champion = null;
let isChampion = false;
const sportsAndChampions = [
    ['футбол', 'теннис', 'хоккей'],
    ['Лионель Месси', 'Роджер Федерер', 'Коннор Макдэвид']
];
const yearFieldName = 'год рождения';
const cityFieldName = 'город проживания';
const sportsFieldName = 'вид спорта';


if (check(birthYear, yearFieldName)) {
    age = new Date().getFullYear() - Number(birthYear);
    city = prompt('В каком городе вы проживаете ?');
    if (check(city, cityFieldName)) {
        isCapital = cityCheck(city);

        sports = prompt('Выберите ваш любимый вид спорта:\n Футбол\n Теннис\n Хоккей')
        check(sports, sportsFieldName) ? isChampion = sportsCheck(sports, sportsAndChampions) : '';

        switch (isCapital) {
            case true:
                switch (isChampion) {
                    case true:
                        alert(`Вам ${age} лет\nВы живёте в столице ${country}\nКруто! Хочешь стать ${champion}`);
                        break;
                    default:
                        alert(`Вам ${age}\nВы живёте в столице ${country}`);
                        break;
                }
                break;
            default:
                switch (isChampion) {
                    case true:
                        alert(`Вам ${age}\nВы живёте в городе ${city}\nКруто! Хочешь стать как ${champion}`);
                        break;
                    default:
                        alert(`Вам ${age}\nВы живёте в городе ${city}`);
                        break;
                }
        }

    }
   
}



function check(info, fieldName) {
    let content = null;
    let fieldType = Number.isNaN(1 * info);
    if (info === null) {
        alert('Жаль что вы отменили ввод ' + fieldName);
        content = false;
    } else if(info.trim() === ''){
        alert('Жаль что вы не ввели ' + fieldName);
        content = false;
    }
    
    else {
        switch (fieldType) {
            case false:
                content=info;
                fieldName !== yearFieldName ? (alert('Вы ввели не корректные данные в поле ' + fieldName), content = false) : '';
                content.length !== 4 && fieldName === yearFieldName ? (alert('Вы ввели не корректную дату рождения.'), content = false) : content = true;
                break;

            default:
                fieldName === 'год рождения' ? (alert('Вы ввели не корректные данные в поле ' + fieldName), content = false) : content = true;
                break;
        }
    }
    return content;
}

function cityCheck(city) {
    let isCapital = false;
    switch (city.toLowerCase()) {
        case 'киев':
            country = "Украины";
            isCapital = true;
            break;
        case 'москва':
            country = "Мордора";
            isCapital = true;
            break;
        case 'минск':
            country = "Беларуси";
            isCapital = true;
            break;
        default:
            break;

    }
    return isCapital;
}

function sportsCheck(userSport, defaultSports) {
    let name = defaultSports;
    let match = false;
    switch (userSport.toLowerCase()) {
        case name[0][0]:
            champion = defaultSports[1][0];
            match = true;
            break;
        case name[0][1]:
            console.log(name[0][1]);
            champion = defaultSports[1][1];
            match = true;
            break;
        case name[0][2]:
            champion = defaultSports[1][2];
            match = true
            break;
        default:
            // alert('вы выбрали спорт которого нет в списке');
            break;

    }
    return match;
}
