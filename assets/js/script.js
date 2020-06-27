// Assignment Code
var generateBtn = document.querySelector("#generate");
//Create Variables
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialCh = ['!','#','$','%','&','*','+','-','.','/',':',';','<','=','>','?','@','^','_','~'];
var result = [];



//make random variable for each characteristics


// create empty array[]



// Write password to the #password input
function writePassword() {
    result = [];
//prompt ask for the lenght of the password to be generated    
var passwrdLength = window.prompt("Choose from 8 - 128 the length of the password");
    if(passwrdLength < 8 || passwrdLength > 128) {
        window.alert("You need to provide a valid answer!  Try again.")
        return writePassword();
    };
//confirm() Uppercase, LowerCase, Numeric, Special Characters
    var firstConfirm = window.confirm("Would you like to have Upper Case");
    var secondConfirm = window.confirm("Would you like to have Lower Case");
    var thirdConfirm = window.confirm("Would you like to have Numbers");
    var fourthConfirm = window.confirm("Would you like to have Special characters");
   if(firstConfirm == false && secondConfirm == false && thirdConfirm == false && fourthConfirm == false)
   {
     alert("you need to pick at least one type!");
   };
// make a while loop to fill the number of character choosen in the prompt
// push each result to the empty array []
    while(result.length-1 <= passwrdLength) {
       
        randomUpperC = upperCase[Math.floor(Math.random()*upperCase.length)];
        randomLowerC = lowerCase[Math.floor(Math.random()*lowerCase.length)];
        randomnumeric = numeric[Math.floor(Math.random()*numeric.length)];
        randomspecChter = specialCh[Math.floor(Math.random()*specialCh.length)];
        if(firstConfirm == true) {
            result.push(randomUpperC)
                if(result.length==passwrdLength) {
                    break;
                }
        }
        if(secondConfirm == true) {
            result.push(randomLowerC)
                if(result.length==passwrdLength) {
                break;
            }
        }
        if(thirdConfirm == true) {
            result.push(randomnumeric)
                if(result.length==passwrdLength) {
                break;
            }
        }
        if(fourthConfirm == true) {
            result.push(randomspecChter)
                if(result.length==passwrdLength) {
                break;
            }
        }
    }
    // Shuffle result
    function shuffle(result) {
        result.sort(() => Math.random() - 0.5);
      }
      shuffle(result)
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // shuffled = result.sort()
    passwordText.value = result.join(""); 
    // let password = passwordText.value;
     console.log(result)
    }


//Event Listener Click start function
generateBtn.addEventListener("click", writePassword);



    
    
    // you need a while loop or a for loop that runs as long as the result array has the same length as the number input at the beginning
    
     
      
   
    // var divItem = document.createElement("div");
    // var listItem = document.createElement("li");
    // listItem.textContect = "Fonzi";
    // listItem.setAttribute("class");
    
    // divItem.appendChild(listItem);
    
    
    // Add event listener to generate button
    