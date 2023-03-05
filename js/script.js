'use strict';

// Код возьмите из предыдущего домашнего задания

// function calculateVolumeAndArea(a) {
//     if (typeof(a) === 'number' && a != 0 && a > 0 && Number.isInteger(a)){
//         let cubeVolume = a*a*a;
//         let cubeTotalSurfaceArea = a*a*6;
//         console.log(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeTotalSurfaceArea}`)
//         return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeTotalSurfaceArea}`
//     } else {
//         console.log('При вычислении произошла ошибка')
//         return 'При вычислении произошла ошибка'
//     }
// }

// calculateVolumeAndArea(1);


function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber >= 37) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}