// *Assignment Code
var generateBtn = document.querySelector("#generate");

var clickTheButton = true;
if (generateBtn === clickTheButton) {
  prompt("Create a new password (Y/N)?");

// function openingMessage() {
// prompt('Create a new password?');
// }

// openingMessage(generateBtn);

// function openingMessage() {
  // prompt('Create a new password (Y/N)?');
// }

// *WHEN I click the button to generate a password

// function clickButton() {
// var createPassword = window.prompt("Create a new password."); clickButton(createPassword);
// return;
// }


// *THEN I am presented with a series of prompts for password criteria

// var criteria = ["Password Length", "Character Type"];

// var generatePassword = function () {
  //  = window.prompt("Enter Password Length or Character Type");
// }


// *Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//*Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Look up "prompt", "alert", and "confirm" on google

