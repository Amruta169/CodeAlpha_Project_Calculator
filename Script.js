const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Function to handle button click
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  // Allow numbers, operators, decimal, etc.
  if (!isNaN(key) || specialChars.includes(key) || key === ".") {
    calculate(key);
  } 
  else if (key === "Enter") {
    e.preventDefault(); // prevent form submission
    calculate("=");
  } 
  else if (key === "Backspace") {
    calculate("DEL");
  } 
  else if (key.toLowerCase() === "c") {
    calculate("AC");
  }
});