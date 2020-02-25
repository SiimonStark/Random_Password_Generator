
var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

var length = 12;

function generatePassword() {
        var password = ''; 
        for (var index = 1; index <= 12; index++) {
            var c = Math.floor((Math.random() * x.length) + 0);
            password = x.charAt(c);
    }
    console.log(password);
    document.getElementById("display").password;
}
