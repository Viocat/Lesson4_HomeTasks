"use strict";

// Переписать код ниже с использованием конструкции switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

let numOrStr = prompt('input number or string');

switch (Number.isNaN(+numOrStr)) {
    case true:
        console.log(' number is Ba_NaN')
        break;
    case false:

        switch(numOrStr){
            case null:
                console.log('вы отменили');
                break;
            default:
                switch (numOrStr.trim()) {
                    case '':
                        console.log('Empty String');
                        break;
                    default:
                        console.log('OK!');
                        console.log(numOrStr);
                        break;
                } 
        }
        default:
            break;
}
