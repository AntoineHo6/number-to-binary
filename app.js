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
            let number = Number(sNumber);
            let inBinary = '';

            if (isInt(number)){
                while (number > 0) {
                    number = number / 2;
                    if (isFloat(number)){
                        // A remainder means we remove it and append a 1 to the binary number
                        number -= 0.5;
                        inBinary = '1' + inBinary;
                    }
                    else {
                        inBinary = '0' + inBinary;
                    }
                }
                console.log('Num in binary: ' + inBinary);
            }
            else {
                console.log('Need a whole number');
            }
        }
    }
});

function isInt(n){
    return n % 1 === 0;
}

function isFloat(n){
    return n % 1 !== 0;
}
