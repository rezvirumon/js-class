//12 inch 1feet


function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

//75 inchToFeet2
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaning = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaning + ' inch. '
    return result;
}

const rumonHeight = inchToFeet(75);
// console.log(rumonHeight);
const rumonHeight2 = inchToFeet2(75);
// console.log(rumonHeight2);


function mileToKiloMeter (mile){
    const kilo = mile * 1.60934;
    return kilo;
}


function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}