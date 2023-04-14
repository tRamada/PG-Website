let length = document.getElementById("length");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generateBtn = document.getElementById("generate");
let output = document.getElementById("password");
let saveBtn = document.getElementById("savePass");

var slider = document.getElementById("myRange");
var outputSlider = document.getElementById("outputSlider");
outputSlider.innerHTML = slider.value; // Display the default slider value

// Add event listener to generate button
generateBtn.onclick = () => {
  let passwordGenerator = new PasswordGenerator(parseInt(slider.value));
  output.innerHTML = passwordGenerator.generate();
  saveBtn.style.visibility = "visible";
}

// Add event listener to save button
saveBtn.onclick = () => {
  alert("Password saved to clipboard");
  navigator.clipboard.writeText(output.innerHTML);
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
  console.log(slider.value);
  outputSlider.innerHTML = slider.value;
}

class PasswordGenerator {
  constructor(length) {
    this.length = length;
  }
  generate() {
    let charactersDicionary = { "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "lowercase": "abcdefghijklmnopqrstuvwxyz", "numbers": "1234567890", "symbols": "!@#$%^&*()_+" };


    let pass = '';
    let characters = '';
    let charactersLength = 0;
    let i = 0;
    let j = 0;
    let k = 0;

    if (uppercase.checked) {
      characters += charactersDicionary.uppercase;
      i++;
    }
    if (lowercase.checked) {
      characters += charactersDicionary.lowercase;
      i++;
    }
    if (numbers.checked) {
      characters += charactersDicionary.numbers;
      i++;
    }
    if (symbols.checked) {
      characters += charactersDicionary.symbols;
      i++;
    }
    if(i == 0) return alert("Please select at least one option");

    charactersLength = characters.length;
    for (j = 0; j < this.length; j++) {
      k = Math.floor(Math.random() * charactersLength);
      pass += characters.charAt(k);
    }

    return pass;
  }

  getLength() {
    return this.length;
  }

  setLength(length) {
    this.length = length;
  }
}