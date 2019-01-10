var input = document.getElementById('input-field');

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
        // Trigger the button element with a click
        let number = document.getElementById("input-field").value;
        if (isNaN(number)){
            console.log('not a number');
        }
        else{
            console.log('is a number!');
        }

    }
});
