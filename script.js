// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function myFunction(){
  var password = ""
  var numLength = prompt("How long would you like your password to be (8-128)?")
  // a while loop keeps the user inputing a password length until they input one that matches the criteria for password length.
  while(numLength < 8 || numLength > 128) {
    alert("Error: the length provided is insufficient. Please try again.")
    var numLength = prompt("How long would you like your password to be (8-128)?")
  }

// a for loop that asks the user different propmts and stores a list of rules for the characters used in their password.
  var characterRules = []
  var characterQuestions = ["Include lowercase?", "Include uppercase?", "Include numbers?", "Include special characters?"]
  for (let i = 0; i < characterQuestions.length; i++) {
    if (window.confirm(characterQuestions[i])) {
      characterRules.push(true);
    } else {
      characterRules.push(false);
    }
  }

// found out how to use the .every() method on MDN. It helps me check if every index of my characterRules array is false, which is something we want to avoid.
  const isFalsy = i => i === false;
  if (characterRules.every(isFalsy)) {
    alert("Error: password must contain at least one character type.")
    var truthy = prompt(" Choose one: lowercase [0], uppercase [1], numbers [2], special characters [3]")
    while(0 > truthy || truthy > 3 || truthy.length > 1){
      var truthy = prompt(" Choose one: lowercase [0], uppercase [1], numbers [2], special characters [3]")
    }
    characterRules[truthy] = true
  }

  // your function goes here
  charactersAllowed = someFunc(characterRules)
  for (let i = 0; i < numLength; i++){
    let x = getRndInteger(0, charactersAllowed.length);
    password += charactersAllowed[x];
  }
  return password
}

function someFunc(rules){
  var charactersAllowed = []
  var characters = {
    arrayLower:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    arrayUpper:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    arrayNum:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    arraySpec:[" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  }
  for (let i = 0; i < 4; i++) {
    let x = ["arrayLower", "arrayUpper", "arrayNum", "arraySpec"]
    if (rules[i] === true){
      charactersAllowed = charactersAllowed.concat(characters[x[i]])
    }
  }
  return charactersAllowed
}

// got this resource from mdn
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}