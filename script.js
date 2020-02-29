
// var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
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
// var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var passWord = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    passWord += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  console.log(passWord);
  return passWord;
  document.getElementById("display").value = passWord;
}

// alert(generatePassword());

// // function generatePassword() {
//         var password = ''; 
//         for (var index = 1; index <= 12; index++) {
//             var c = Math.floor((Math.random() * x.length) + 0);
//             password = password + x.charAt(c);
//     }
//     console.log(password);
//     document.getElementById("display").value = password;
// }
