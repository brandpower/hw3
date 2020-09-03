// Assignment Code

const passwordForm = document.getElementById("passwordBox");
const minPassLength = 8;
const maxPassLength = 128;
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];

// this allows the password to be the length that the user requested
function createPassword() {

  //defines all the options//
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseletters = lowercaseLetters.toUpperCase();
  const numbersList = "0123456789";
  const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

  //defines our checkbox states//
  lettersLow = document.getElementsByName("lwrChars")[0].checked;
  lettersHigh =  document.getElementsByName("upprChars")[0].checked;
  numbers = document.getElementsByName("numbers")[0].checked;
  specials = document.getElementsByName("specialChars")[0].checked;

  //prompt telling user passwrd length//
  let passwordLength = prompt("What will your password length be? 8 to 128 characters only please and thankyou");

  //prompt telling user to learn how to follow basic instruction//
  if (lettersLow == false && lettersHigh == false && numbers == false && specials == false){
    alert("You gotta learn how to follow basic instruction my friend. 8 to 128 and check a box. Come on. You can do this.")

    //meant to reload page. Found online. Hope it works. 
    window.location.reload();
}

//if they use a number between 8 and 128, generate password and put in text box//
if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {

  password = "";
  

  for (i=0; i<passwordLength;i++) {
    // if our lowercase checkbox has been checked and the current length of our gen'd passwd is less than the user's passwordLength, add a random char from lowercaseLetters string
    if (lettersLow && password.length < passwordLength) {
        password = password+=lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    }
    if (lettersHigh && password.length < passwordLength) {
        password = password+=uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

    }
    if (numbers && password.length < passwordLength) {
        password = password+=numbersList.charAt(Math.floor(Math.random() * numbersList.length));

    }
    if (specials && password.length < passwordLength) {
        password = password+=specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }

}

passwordForm.value = password;


}

}