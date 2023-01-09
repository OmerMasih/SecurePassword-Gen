// Sitting my variables

var generateBtn = document.getElementById("generator");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "bacdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "@#$%^&*";

// Generating the password function for my password generator.

function PasswordCreator() {
  console.log("Hey! You clicked the button!");
  var finalPassword = "";
  // Prompt for password criteria
  var length = window.prompt(
    "How many characters do you want your password to be?"
  );
  // Sitting the length of password and alert to notify users for length selection.
  if (length < 8 || length > 128) {
    alert("Sorry, password needs to be between 8 and 128 characters");
    return "Sorry, password needs to be between 8 and 128 characters";
  }
  // Confirming Upper/Lower case, Special Chracter and Numrich styles.

  var specialCharacters = confirm(
    "Do you want your password to inculde special characters?"
  );
  var upperCaseCharacters = confirm(
    "Do you want your password to inculde uppercase characters?"
  );
  var lowerCaseCharacters = confirm(
    "Do you want your password to inculde lowercase characters?"
  );
  var numericCharacters = confirm(
    "Do you want your password to inculde numberic characters?"
  );
  // Validated my input and at least one character type should be selected.

  for (var i = 0; i < length; i++) {
    if (upperCaseCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 26);
      finalPassword = finalPassword + upperCase.charAt(randomPick);
    }

    if (lowerCaseCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 26);
      finalPassword = finalPassword + lowerCase.charAt(randomPick);
    }

    if (specialCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 7);
      finalPassword = finalPassword + special.charAt(randomPick);
    }

    if (numericCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 10);
      finalPassword = finalPassword + number.charAt(randomPick);
    }
  }

  return finalPassword;
}

// Generating the  password to the #password input

function writePassword() {
  var password = PasswordCreator();
  var passwordText = document.querySelector("#pass-word");

  passwordText.value = password;
}

// Displaying password by adding the addEventListener.

generateBtn.addEventListener("click", writePassword);
