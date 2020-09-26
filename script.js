// create our global variables that we will use throughout code
var finalPassword = "";
var charLength = 5;
var lowerCase = true; 
var	upperCase = true;
var	numbers = true; 
var	special = true;
// arrays for all possible characters
var specialOpt = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numberOpt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerOpt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordResult);


// create a function for each step of the process

//   document.addEventListener("click", function() {
//   password = passwordResult();
//   document.getElementById("password").placeholder = finalPassword;
// });
writePassword()

function writePassword(){
  if (confirm("Do you want to create a new password?")){
    numOfChar();
  } else {
    alert("Goodbye");
    }};

function numOfChar(){
  charLength = prompt("How many characters would you like your password to have? Please choose a value between 8 and 128.");
  if (charLength >=8 && charLength <= 128) {
    // confirm("Would you like to use lowercase letters?");
    userChoice();}
    else {
      alert("Please enter a value between 8 and 128.");
      numOfChar();
    }
    console.log(charLength);
  }   
  for (var i=0; i < charLength; i++){
    console.log(charLength[i])
    }

function userChoice(){
lowerCase = confirm("Would you like to use lowercase letters?");
upperCase = confirm("Would you like to use uppercase letters?");
numbers = confirm("Would you like to use numbers?");
special = confirm("Would you like to use special characters?");
} 



function randomLower() {
  return lowerOpt[Math.floor(Math.random() * lowerOpt.length)];
  }
  // useUpperCase();
  console.log(randomLower(lowerOpt));
  

function randomUpper() {
  return upperOpt[Math.floor(Math.random() * upperOpt.length)];
  }
  // useNumber();
  console.log(randomUpper(upperOpt));


function randomNumber() {
  return numberOpt[Math.floor(Math.random() * numberOpt.length)]
  }
  // useSpecialChar();
  console.log(randomNumber(numberOpt));
 

function randomSpecial() {
  return specialOpt[Math.floor(Math.random() * specialOpt.length)];
  }
  // useLowerCase();
  console.log(randomSpecial(specialOpt));
  

function passwordResult(){
    finalPassword += charLength; 
    document.getElementById("password").placeholder = passwordResult;
}
	
// function useLowerCase(){
//   if (lowerCase = confirm("Would you like to use lowercase letters?")){
//       randomLower();
//       }
//     else {
//       alert("You must choose at least one lowercase letter.")
//       useLowerCase();
// }
// }

// function useUpperCase(){
//   if (upperCase = confirm("Would you like to use uppercase letters?")){
//         randomUpper();
//       } else {
//         alert("You must choose at least one uppercase letter.")
//         useUpperCase();
// }
// }
// function useNumber(){
//   if (numbers = confirm("Would you like to use numbers?")){
//     randomNumber();
//   } else {
//     alert("You must choose at least one number.")
//     useNumber();
// }
// }
// function useSpecialChar(){
//   if (special = confirm("Would you like to use special characters?")){
//     randomSpecial();
//   } else {
//     alert("You must choose at least one special character.")
//     useSpecialChar();
// }
// }



// random generator




// this loop runs 1 time per character in the password
// how do I pick a character each time and add it to final product 
// var randomPassword = "";
// var i = 0;
// while (i<charLength) {
// randomPassword += i
// }
// for (var i = 0; i <= charLength; i++){
//   console.log(finalPassword[i]);
//   finalPassword =+ specialOpt.concat(specialOpt, numberOpt, upperOpt, lowerOpt);
// }


// }






// document.getElementById("password").innerHTML = text;

// create a function to generate results at end
// if criteria is met, 


// function finalPassword(){}










//     for (var i=0; i<charLength; i++) {
//         var userChoice = specialOpt.concat(numberOpt, upperOpt, lowerOpt);

//     var finalPassword = userChoice + charLength[Math.floor(Math.random() * userChoice.length)];
//     // finalPassword.push(pickuserChoice);
//     }
//     }
// }
// //adding characters to end of string - finalPassword should be a string
//     finalPassword += userChoice

// function charGen() {
//     userChoice = Math.floor(Math.random() * 4);
//     if (userChoice === 0) {
//         lowerOpt = [Math.floor(Math.random() * lowerOpt.length)]
//     }
// }

// // function generatePassword(){
// //     while (finalPassword.length < charLength
// //         // charGen
// //     }}

// charLength

// console.log(charLength);
//     // function writePassword() {
//     //     var password = generatePassword();
//     //     var passwordText = document.querySelector("#password");
      
//     //     passwordText.value = password;
      
//     //   }
    




// // Assignment Code

// // Write password to the #password input


// // Add event listener to generate button


// // GIVEN I need a new, secure password

// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters

// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters



    

    


    










// // function randomLower() {
// //     return 
// // }
// // for (var i = 0; i <)


// // });



// // function generatePassword(){

// // }



// // while (!lowerCase && !upperCase && !numbers && !special){
// //     alert("Please follow the instructions.")
// // }




// // ## User Story

// // ```
// // AS AN employee with access to sensitive data
// // I WANT to randomly generate a password that meets certain criteria
// // SO THAT I can create a strong password that provides greater security
// // ```

// // ## Acceptance Criteria

// // ```


// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected

// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria

// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page. 
// //
