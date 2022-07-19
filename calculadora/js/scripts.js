class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number");
    this.resulteValue = document.querySelector("#result-number");
    this.reset = 0;
  }

  btnPress() {
    console.log("apertou");
  }
}

//start obj
let calc = new Calculator();

//start buttons
let buttons = document.querySelectorAll(".btn");

// map all butons

for (let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener("click", calc.btnPress);
}
