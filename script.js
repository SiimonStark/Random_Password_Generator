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

