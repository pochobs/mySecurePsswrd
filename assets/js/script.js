// Assignment Code
var generateBtn = document.querySelector("#generate");
//Create Variables


//make random variable for each characteristics


// create empty array[]



// Write password to the #password input
function writePassword() {
//prompt ask for the lenght of the password to be generated    


//confirm() Uppercase, LowerCase, Numeric, Special Characters

// make a while loop to fill the number of character choosen in the prompt



// push each result to the empty array []




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


//make random variables loop in the function


generateBtn.addEventListener("click", writePassword);
