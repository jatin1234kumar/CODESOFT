// used functions = removeSecondLastChar, containsAny
// used variable = string, modifiedWord, chars, conatainsDoubleOperator, equal, newString 


var input = document.getElementById('input');
const btn = document.getElementsByClassName('btn');

input.value = 0;

Array.from(btn).forEach(element => {
    element.addEventListener('click', (e) => {
        var buttonClicked = e.target.dataset.value;
        input.style.color = "black";
        input.value += buttonClicked;

        var string = input.value;

        if (buttonClicked == 'clear') {
            input.value = 0;
        } else if (buttonClicked == "backSpace") {
            // Remove the last element from the string
            let newString = string.substring(0, string.length - 10);

            input.value = "";
            input.value += newString;
        } else if (buttonClicked == "equal") {
            let equal = string.substring(0, string.length - 5);
            input.value = 0;
            input.value = eval(equal);
            input.style.color = "green";
        }

        function containsAny(string) {
            const substrings = ['++', '+-', '+*', '+/', '-+', '--', '-/', '-*', '*+', '*-', '*/', '**', '/+', '/-', '/*', '//'];
            return substrings.some(substring => string.includes(substring));
        }

        function removeSecondLastChar(string) {
            if (string.length < 2) {
                // If the word has less than 2 characters, there's no second last character to remove
                return string;
            }

            // Convert the word to an array of characters
            let chars = string.split('');

            // Remove the second last character
            chars.splice(chars.length - 2, 1);

            // Join the array back into a string
            return chars.join('');
        }

        let containsDoubleOperator = containsAny(string);

        if (containsDoubleOperator) {
            input.value = "";

            // Example usage:
            let modifiedWord = removeSecondLastChar(string);
            input.value = modifiedWord;
        }

        function removeSecondLastChar(word, charToCheck) {

            // Check if the word is long enough to have a second last character
            if (word.length < 2) {
                // If the word has less than 2 characters, there's no second last character to remove
                return word;
            }

            // Convert the word to an array of characters
            let chars = word.split('');

            // Remove the second last character
            chars.splice(chars.length - 2, 1);

            // Join the array back into a string
            return chars.join('');
        }

        // // fucntion to check the situation: 4+5-6/8 not happens

        // function addOperatorIfAlreadyPresent(word, charToAdd, action) {
        //     // Define the set of characters to check
        //     const operators = ['+', '-', '/', '*'];

        //     // Check if the charToAdd is one of the operators
        //     if (operators.includes(charToAdd)) {
        //         // Check if any of the operators are already present in the word
        //         const operatorPresent = operators.some(operator => word.includes(operator));

        //         if (operatorPresent) {
        //             let operatorFound = string.substring(0, string.length - 1);;

        //             input.value = "";
        //             input.value = `${eval(operatorFound)}${buttonClicked}`;
        //         }
        //     }
        // }

        // addOperatorIfAlreadyPresent(input.value, buttonClicked);
    })

    // function to check weather the given input have . after all four operators(+,*,/,-)

    function checkAndPerformAction() {

        // Regular expression to check for +, -, *, / followed by a dot (.)
        const regex = /[\+\-\*\/]\./;

        // Check if the input value matches the regex
        if (regex.test(input.value)) {
            let valueWithDot = input.value;
            input.value = "";
            input.value = valueWithDot;
        }
    }

    checkAndPerformAction();

});


// error : we can add multipble dots(.) in the given input field
