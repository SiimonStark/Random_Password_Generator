
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//generate random password function
function generatePassword() {
  var length = Number(prompt("How many characters would you like your password be? Please enter a digit between 8 and 128"));
  length = parseInt(length);
  if (length < 8 || length > 128 || !length) { // !length (is length falsey)
    alert("Please choose a correct number length!!");
    generatePassword();
    return
    // exits function
  }
  // use confirm statements to eval true or false 
  var upperType = confirm("Do you want your password to have uppercase letters?");
  var lowerType = confirm("Do you want your password to have lowercase letters?");
  var numericType = confirm("Do you want your password to have numeric characters?");
  var specialType = confirm("Do you want your password to have special characters?");
  //create characterType and set character set based on user input = characterSet
  var characterSet = "";
  // use "if" statements and confirm w/boolean
  if (lowerType === true) {
    characterSet = characterSet + "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperType === true) {
    characterSet = characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numericType === true) {
    characterSet = characterSet + "0123456789";
  }
  if (specialType === true) {
    characterSet = characterSet + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  //return value
  var passWord = "";
  for (var i = 0; i < length; i++) {
    //picks characters within characterSet at index of random number
    passWord += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  var button = document.getElementById("btn btn-info btn-large");

  document.getElementById("display").value = passWord;


}

