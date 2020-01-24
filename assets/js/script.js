// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function
function $(password) {
  return document.querySelector(password)
}

// return random number
function random(min = 0, max = 1) {
  return Math.floor((Math.random() * max) + min)
}


class Password {


  // constructor

  constructor(length = 8) {
    this.length = length;
    this.password = "";
  }


  // loop

  generate() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < this.length; i++)
      this.password += chars.charAt(random(0, chars.length))

    return this.password;
  }
}

// event listener

$("#passForm").addEventListener("submit", e => {
  const size = $(`input[name='size']`).value;
  const output = $("#password");
  const password = new Password(size).generate();

  output.setAttribute("style", "");//Displays
  output.innerHTML = password;//Display password
})