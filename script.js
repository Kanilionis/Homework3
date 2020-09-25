
var finalPassword = "";
// var value = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'!@#$%^&*(){}[]=<>/,.'";
var charLength = 5;
var lowerCase; 
var	upperCase;
var	numbers; 
var	special;
var passwordOptions; 
specialOpt = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numberOpt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
upperOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerOpt =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

    generateBtn.addEventListener("click", function() {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

var beginGenerator = confirm("Welcome, would you like to generate a new password?");
charLength = parseInt(prompt("How many characters would you like your password to have?"));


// function generatePassword() {
if (!charLength) {
    alert("Please enter a value to continue."); 
    charLength = prompt("How many characters would you like your password to have?");
}  
while
    (charLength < 8 || charLength > 128) {
        charLength = parseInt(prompt("You must choose a number between 8 and 128."));
    } {
        upperCase = confirm("Would you like to use uppercase letters?");
        lowerCase = confirm("Would you like to use lowercase letters?");
        numbers = confirm("Would you like to use numbers?");
        special = confirm("Would you like to use special characters?");
    };

    if (!upperCase && !lowerCase && !numbers && !special){
        passwordOptions = alert("You must choose a criteria.");
    } 
    else if (upperCase && lowerCase && numbers && special) { 
        passwordOptions = specialOpt.concat(numberOpt, upperOpt, lowerOpt);
    }

for (var i=0; i<10; i++)
console.log(charLength);
    // function writePassword() {
    //     var password = generatePassword();
    //     var passwordText = document.querySelector("#password");
      
    //     passwordText.value = password;
      
    //   }






    function getRandomLower(lowerOpt) {
        return lowerOpt[Math.floor(Math.random() * lowerOpt.length)];
    }
    console.log(getRandomLower(lowerOpt));
    
    function getRandomUpper(upperOpt) {
        return upperOpt[Math.floor(Math.random() * upperOpt.length)];
    }
    console.log(getRandomUpper(upperOpt));
    
    function getRandomNumber(numberOpt) {
        return numberOpt[Math.floor(Math.random() * numberOpt.length)]
    }
    console.log(getRandomNumber(numberOpt));
    
    function getRandomSpecial(specialOpt) {
        return specialOpt[Math.floor(Math.random() * specialOpt.length)];
    }
    console.log(getRandomSpecial(specialOpt));
    
    




// Assignment Code

// Write password to the #password input


// Add event listener to generate button


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters



    

    


    










// function randomLower() {
//     return 
// }
// for (var i = 0; i <)

// document.getElementById('generate').addEventListener('click', () => {	
// 	const hasLower = lowerCase.true;
// 	const hasUpper = upperCase.true;
// 	const hasNumber = numbers.true;
// 	const hasSpecial = special.true;
// 	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);
// });



// function generatePassword(){

// }



// while (!lowerCase && !upperCase && !numbers && !special){
//     alert("Please follow the instructions.")
// }




// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page. 
//