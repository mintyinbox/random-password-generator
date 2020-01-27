// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// let generatePassword=getElementByID("generate")

function generatePassword () {
let length = prompt(`What length of password do you want`)
let uc = confirm(`Do you want upper case?`)
let lc = confirm('Do you want lower case?')
let sc = confirm('Do you want Rammus?')

let specialChar = '1234567890!@#$%^&*~<>'
let uChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lChar = 'abcdefghijklmnopqrstuvwxyz'

let pw = ''
let passwordCharacters = ""

  if(uc){
    passwordCharacters += uChar
  }

  if(lc){
    passwordCharacters += lChar
  }

  if (sc){
    passwordCharacters += specialChar
  }


for (let i = 0; i < length; i++) {
  let random = passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)]
  pw += random
}

return pw
}

document.getElementById("password").values=password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);