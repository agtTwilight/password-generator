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


function generatePassword(){
  var satisfied = false
  var password = ""
  var numLength = prompt("How long would you like your password to be (8-128)?")
  
  // lets the user exit the function if they decide to not make a password at the beginning.
  if (numLength === null) {
    return("");
  } 

  // a while loop keeps the user inputing a password length until they input one that matches the criteria for password length.
  while(numLength < 8 || numLength > 128 || isNaN(numLength)) {
    numLength = prompt("Sorry, password length must be between 8 and 128 characters.")
  }
  
  //converts number length to a number. not necessary since js string numbers will still work similarly in our case, but I think it's good practice to keep unit types as you intend to use them.
  numLength = Number(numLength)

// a for loop that asks the user different propmts and stores a list of rules for the characters used in their password.
  var characterRules = []
  var characterQuestions = ["lowercase?", "uppercase?", "numbers?", "special characters?"]
  for (let i = 0; i < characterQuestions.length; i++) {
    if (window.confirm("Should your password include: " + characterQuestions[i])) {
      characterRules.push(true);
    } else {
      characterRules.push(false);
    }
  }

// found out how to use the .every() method on MDN. It helps me check if every index of my characterRules array is false, the instance we want to avoid. Alternatively, a while loop with & statements could check the same thing!
  const isFalsy = i => i === false;
  if (characterRules.every(isFalsy)) {
    alert("Error: password must contain at least one character type.")
    var truthy = prompt("Choose one: lowercase [0], uppercase [1], numbers [2], special characters [3]")

    // This while loop makes sure the user only chooses one of the options listed.
    while(0 > truthy || truthy > 3 || truthy.length > 1 || isNaN(truthy) || truthy === " " ){
      var truthy = prompt(" Choose one: lowercase [0], uppercase [1], numbers [2], special characters [3]")
    }
    characterRules[truthy] = true
  }

  // I made a function outside of this one that takes in a boolen array of a users desired characters, and outputs an array of only those desired characters.
  charactersAllowed = characters(characterRules)

  // This creates my password. The loop takes in numLength to set the number of iterations based on the users desired password length. Then, each loop iteration a variable called x is defined as some random number within the length of the character array unique to the user. x is then used to index through the character array and pull the unique character at the random position. This character is then appended to a string called password. The loop continues and the password is returned upon loop termination.
  while (satisfied === false){
    for (let i = 0; i < numLength; i++){
      let x = getRandomNum(0, charactersAllowed.length);
      password += charactersAllowed[x];
    }
    if(!window.confirm("Password: " + password + "\nWould you like a new password?")){
      break
    } else {
      password = ""
    }
  }
  return password
}

// takes in a boolen array of a users desired characters, and outputs an array of only those desired characters.
function characters(rules){
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

// This function lets me get a random number within a provided min and max value
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}