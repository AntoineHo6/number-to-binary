/*
Author: Antoine Ho
Date: 2019-01-11
 */

// Global vars
let input = document.getElementById('input-field');

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        let sNumber = document.getElementById("input-field").value;
        if (isNaN(sNumber)){
            console.log('not a number');        // temp
        }
        else{
            let sNumInBinary = toBinary(sNumber);
            document.getElementById('converted').textContent += " " + sNumInBinary;
        }
    }
});


function toBinary(sNumber) {
    document.getElementById('converted').textContent = "Number in binary:";
    let number = Number(sNumber);
    let sInBinary = '';

    // Convert a int number to binary
    if (isInt(number)) {
        while (number > 0) {
            number = number / 2;
            if (isFloat(number)){
                // A remainder means we remove it and append a 1 to the binary number
                number -= 0.5;
                sInBinary = '1' + sInBinary;
            }
            else {
                sInBinary = '0' + sInBinary;
            }
        }
    }
    // Convert a float number to binary
    else {
        let aNumDecSplit = sNumber.split('.');
        // Add '0.' before the number after the decimal point to allow future calculations
        aNumDecSplit[1] = '0.' + aNumDecSplit[1];
        
        // 1. Convert the number before the decimal point in binary
        sInBinary = toBinary(aNumDecSplit[0]) + '.';

        // 2. Convert the number after the decimal point in binary
        let numAfterDec = Number(aNumDecSplit[1]);

        while (numAfterDec > 0) {
            numAfterDec *= 2;

            if (numAfterDec >= 1) {
                numAfterDec -= 1;
                sInBinary += '1';
            }
            else {
                sInBinary += '0';
            }
        }
    }
    return sInBinary;
}

function isInt(n){
    return n % 1 === 0;
}

function isFloat(n){
    return n % 1 !== 0;
}
