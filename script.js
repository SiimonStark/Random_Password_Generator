// Function: Generate
function generatePassword() {

    var password = "";

    // var complexity = 12;

    var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    // for(var i = 0; i <= complexity; i++){
    // password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    // }

    for (var i = 1; i < 12; i++) {
        var password = Math.floor(Math.random() * Math.floor(value.length - 1));
        password = password + value.charAt(password);

        return password;

        console.log(generatePassword);

    }
    document.getElementById("display").value = password;
}