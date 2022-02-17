// Assignment code here

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) +97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) +65);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) +48);
  }
  function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[]_{}|`~' 
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//prompt confirmation variables
var upperCase;
var lowerCase;
var numbers;
var symbol;
var Length = "";

// initial prompt for password criteria questions
function generatePassword() {
    var length = prompt("Please select password length between 8 and 128 characters")
    while (length < 8 || length > 128) {
        alert("Please select a number between 8 and 128")
        length = prompt("How many characters would you like?")
    }
    var upperCase = confirm("Would like upper case letters?")
    var lowerCase = confirm("Would you like lower case letters?")
    var numbers = confirm("would you like number?")
    var symbol = confirm("Would you like symbols?")

    var charecters = [];
    var passwordString = "";

    for (i=0; i<length; i++) {
        if(upperCase) {
            charecters.push(randomFunc.upper())
        }
        if(lowerCase) {
            charecters.push(randomFunc.lower())
        }
        if(numbers) {
            charecters.push(randomFunc.number())
        }
        if(symbol) {
            charecters.push(randomFunc.symbol())
        }

        passwordString = passwordString + charecters[Math.floor(Math.random() * charecters.length)];
    }
    return passwordString
}
    
// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

    //adding comments
