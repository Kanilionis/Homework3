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
// var allChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Write password to the #password input
function generatePassword() {
  var password = passwordResult();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// tell browser where to start
// writePassword()

// create a function for each step of the process
function writePassword(){
  if (confirm("Do you want to create a new password?")){
    userChoice();
  } else {
    alert("Goodbye");
    }};

// function numOfChar(){
//   charLength = prompt("How many characters would you like your password to have? Please choose a value between 8 and 128.");
//   if (charLength >=8 && charLength <= 128) {
//     userChoice();}
//     else {
//       alert("Please enter a value between 8 and 128.");
//       numOfChar();
//     }
//     console.log(charLength);
//   }   
  // answers to all questions to be stored in an object, so we can access object later
function userChoice(){
  charLength = prompt("How many characters would you like your password to have? Please choose a value between 8 and 128.");
  if (charLength < 8 || charLength > 128) {
    alert("Please enter a value between 8 and 128.");
    return
  }
  if (isNaN(charLength) === true) {
    alert("Please choose a number!")
    userChoice();
  }

    console.log(charLength);
    var lowerConf = confirm("Would you like to use lowercase letters?");
    var upperConf = confirm("Would you like to use uppercase letters?");
    var numberConf = confirm("Would you like to use numbers?");
    var specialConf = confirm("Would you like to use special characters?");
    if (lowerConf === false || upperConf === false || numberConf === false || specialConf === false) {
      alert("You must have at least one of each character type.");
      userChoice();
    }
    // create an object with {}
    var passwordOptions = {
      length: charLength,
      lowerConf: lowerConf,
      upperConf: upperConf,
      numberConf: numberConf,
      specialConf: specialConf,
    }
    return passwordOptions;
} 
  function random(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomElement = array [randomIndex]
    return randomElement;
  }
// create variables with empty arrays [] - we call to these in the if statements below
  function passwordResult(){
    var options = userChoice()
    var result = []
    var possChar = []
    var guarChar = []
    if (options.lowerConf === true) {
      possChar = possChar.concat(lowerOpt);
      guarChar.push(random(lowerOpt))
    }
    if (options.upperConf === true) {
      possChar = possChar.concat(upperOpt);
      guarChar.push(random(upperOpt))
    }
    if (options.numberConf === true) {
      possChar = possChar.concat(numberOpt);
      guarChar.push(random(numberOpt))
    }
    if (options.specialConf === true) {
      possChar = possChar.concat(specialOpt);
      guarChar.push(random(specialOpt))
    }
    for (var i=0; i < options.length; i++){
      var randomChar = random(possChar)
      result.push(randomChar)
    }
    for (var i=0; i < guarChar.length; i++){
      result[i] = guarChar[i]
    }
    // .join combines items from different arrays
    console.log(result)
    return result.join("")
  }

// if/then statement to make sure each var has at least one value chosen???

// for (var i=0; i < charLength; i++){

//   // function passwordResult(){
//   //   return finalPassword += allChar[Math.floor(Math.random() * allChar.length)];
//   // }
//   console.log(passwordResult(finalPassword));
//   document.getElementById("password").placeholder = finalPassword
// }
// // confirm all criteria is met (at least one of each options)
// if (lowerCase === true && upperCase === true && numbers === true && special);

// // 

// for (var i=0; i< charLength; i++){
//   function lower(){
//     return lowerOpt[Math.floor(Math.random() * lowerOpt.length)];
//   }
//   function upper(){
//     return upperOpt[Math.floor(Math.random() * upperOpt.length)];
//   }
//   function number(){
//     return numbers[Math.floor(Math.random() * numbers)];
//   }
//   function specials(){
//     return special[Math.floor(Math.random() * special.length)];
//   }
// }

// function passwordResult(){
//   return finalPassword += lowerOpt += upperOpt += numbers += special
// }
// document.getElementById("password").placeholder = finalPassword


// need to check that all criteria is met



