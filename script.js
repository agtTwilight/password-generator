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
  let numLength = prompt("How long would you like your password to be?")
  while(numLength < 8 || numLength > 128) {
    // instead, return alert box, and restart prompt. This while loop should work
    document.getElementById("error").innerHTML = "ERROR: password length not between 8 and 128 characters."
  }
  // Make a function that does this:
  if(window.confirm("Include lowercase?")){
    var lowerCase = true
  } else {
    var lowerCase = false
  };
  if(window.confirm("Include uppercase?")){
    var upperCase = true
  } else {
    var upperCase = false
  };
  if(window.confirm("Include numbers?")){
    var nums = true
  } else {
    var nums = false
  };
  if(window.confirm("Include special characters?")){
    var special = true
  } else {
    var special = false
  };
  // check if all are false, if so, return error and ask the user to select at least one to make true (then update the variable they decided to make true. probably use arrays)
  // generate the password and make sure its var is set as returned object.
}