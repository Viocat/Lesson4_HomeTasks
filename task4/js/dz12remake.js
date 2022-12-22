"use strict";

let birthYear = prompt(' enter number');
let age = null;
let type = Number.isNaN(+birthYear);
// alert('type birthYear ='+type);

let city = null;
let country = false;
let capitals = ['Kyiv', 'Moskow', 'Minsk'];
let countries = ['Ukraine', 'mordor', 'Belosussia'];

let sportUser = null;
const sportLib = ['Football', 'hockey', 'tennis'];
let champion = false;
const championLib = ['Lionel Messi', 'Roger Federer', 'Connor McDavid'];


switch (type) {
    case true:
        alert('Incorrect data inputed');
        break;
    default:
        switch (birthYear) {
            case null:
                alert(`Sorry that you canceled birth year data input`);
                break;
            default:
                switch (birthYear.trim() === '') {
                    case true:
                        alert(`Sorry that you haven't entered the year of your birth`);
                        break;
                    default:
                        switch (Number(birthYear) < new Date().getFullYear()) {
                            case true:
                                age = new Date().getFullYear() - Number(birthYear);
                                //запускаем запрос города
                                city = prompt('enter city');
                                // type =isNaN(city);
                                type = isNaN(+city);
                                // alert('type ofCity =' + type);

                                switch (type) {
                                    case false:
                                        switch (city) {
                                            case null:
                                                alert(`Sorry that you have canceled input of your City`);
                                                break;
                                            default:
                                                switch (city.trim()) {
                                                    case '':
                                                        alert(`Sorry that you haven't entered name of City you live in`);
                                                        break;
                                                    default:
                                                        alert('Incorrect data inputed for City');
                                                        break;
                                                }
                                                break;
                                        }
                                        break;
                                    default:
                                        console.log('City entered correctly. City = ' + city);
                                        switch (city.toLowerCase()) {
                                            case capitals[0].toLowerCase():
                                                country = countries[0];
                                                // alert(country);
                                                break;
                                            case capitals[1].toLowerCase():
                                                country = countries[1];
                                                break;
                                            case capitals[2].toLowerCase():
                                                country = countries[2];
                                                break;
                                            default:
                                                break;
                                        }
                                        sportUser = prompt('Your favorite sports:\n Football\n Hockey\n Tennis');

                                        switch(sportUser){
                                            case null:
                                                alert(`Sorry that you have canceled input of your Favorite Sport`);
                                                break;
                                            default:
                                                switch(sportUser.trim()){
                                                    case '':
                                                        alert(`Sorry that you haven't entered name of your Favorite Sport`);
                                                        break;
                                                    default:
                                                        //proverka biblioteki sporta
                                                        switch (sportUser.toLowerCase()) {
                                                            case sportLib[0].toLowerCase():
                                                                champion = championLib[0];
                                                                break;
                                                            case sportLib[1].toLowerCase():
                                                                champion = championLib[1];
                                                                break;
                                                            case sportLib[2].toLowerCase():
                                                                champion = championLib[2];
                                                                break;
                                                        }
                                                    break;
                                                }
                                                break;
                                        }
                                        

                                        switch (country) {
                                            case false:
                                                switch (champion) {
                                                    case false:
                                                        alert(`You are ${age} years old.\nYou live in  ${city}.\n`);
                                                        break;
                                                    default:
                                                        alert(`You are ${age} years old.\nYou live in  ${city}.\nCOOL! You wanna be like ${champion}`);
                                                        break;
                                                }
                                                break;
                                            default:
                                                switch (champion) {
                                                    case false:
                                                        alert(`You are ${age} years old.\nYou live in te capital of ${country}.`);
                                                        break;
                                                    default:
                                                        alert(`You are ${age} years old.\nYou live in te capital of ${country}.\nCOOL! You wanna be like ${champion}`);
                                                        break;
                                                }
                                                break;
                                        }
                                        break;
                                }
                                break;
                            default:
                                alert(`You haven't been born yet. Goodbye`)
                                break;
                        }
                        break;
                }
                break;
        }
}



