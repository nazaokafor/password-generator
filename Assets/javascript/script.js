// *Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Added two sets of numeric numbers to increase chances of displaying in randomized password when prompted
var numeric = '01234567890123456789'
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// *Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
  var userOptions = ''
  var tempPassword = ''
  var mixCharacters = ''
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = parseInt(prompt('Choose the length of your password (at least 8 characters and no more than 128 characters).'))
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Enter a valid password length of at least 8 characters and no more than 128 characters.');
    return 'Try again.'
  }
  
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var isLowerCase = confirm('Would you like to add lowercase characters?');
  var isUpperCase = confirm('Would you like to add uppercase characters?');
  var isNumeric = confirm('Would you like to add numeric characters?');
  var isSpecialCharacters = confirm('Would you like to add special characters?');
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  if (isLowerCase) {
    userOptions = userOptions + lowerCase 
  }
  if (isUpperCase) {
    userOptions = userOptions + upperCase
  }
  if (isNumeric) {
    userOptions = userOptions + numeric
  }
  if (isSpecialCharacters) {
    userOptions = userOptions + specialCharacters
  }
  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialCharacters) {
      alert('Please choose at least one character type.');
      return 'Create a password.'
  } 
  console.log(userOptions);
  for (let index = 0; index < userOptions.length; index++) {
    const random = Math.floor(Math.random()*userOptions.length)
    mixCharacters = mixCharacters + userOptions[random]
  } 
  console.log(mixCharacters);
  for (let index = 0; index < passwordLength; index++) {
    const random = Math.floor(Math.random()*mixCharacters.length)
    tempPassword = tempPassword + mixCharacters[random]
  }
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  return tempPassword
}

//*Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
