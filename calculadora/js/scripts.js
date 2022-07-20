class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number");
    this.resulteValue = document.querySelector("#result-number");
    this.reset = 0;
  }

  checkLastDigit(input, upperValue, reg) {
    if (
      !reg.test(input) &&
      !reg.test(upperValue.substr(upperValue.length - 1))
    ) {
      return true;
    } else {
      return false;
    }
  }

  btnPress() {
    let input = this.textContent;
    let upperValue = calc.upperValue.textContent;

    //verifica se só tem números
    let reg = new RegExp("^\\d+$");

    if (calc.checkLastDigit(input, upperValue, reg)) {
      return false;
    }

    if (upperValue === "0") {
      calc.upperValue.textContent = input;
    } else {
      calc.upperValue.textContent += input;
    }
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