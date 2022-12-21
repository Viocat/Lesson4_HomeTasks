"use strict";

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



