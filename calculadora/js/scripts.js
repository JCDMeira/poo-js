class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number");
    this.resultValue = document.querySelector("#result-number");
    this.reset = 0;
    this.reg = new RegExp("^\\d+$");
  }

  checkLastDigit = (input, upperValue) => {
    if (
      !this.reg.test(input) &&
      !this.reg.test(upperValue.substr(upperValue.length - 1))
    ) {
      return true;
    } else {
      return false;
    }
  };

  clearValues = () => {
    this.upperValue.textContent = "0";
    this.resultValue.textContent = "0";
  };

  btnPress = ({ target: { textContent } }) => {
    let input = textContent;
    let upperValue = this.upperValue.textContent;

    //verifica se só tem números
    // let reg = new RegExp("^\\d+$");

    //ativa método de limpar display
    if (input === "AC") {
      this.clearValues();
    } else {
      // verifica se precisa adicionar
      if (this.checkLastDigit(input, upperValue)) {
        return false;
      }

      //adiciona espaços aos operadores
      if (!this.reg.test(input)) {
        input = ` ${input} `;
      }

      if (upperValue === "0") {
        this.upperValue.textContent = input;
      } else {
        this.upperValue.textContent += input;
      }
    }
  };
}

//start obj
let calc = new Calculator();

//start buttons
let buttons = document.querySelectorAll(".btn");

// map all butons

for (let i = 0; buttons.length > i; i++) {
  buttons[i].addEventListener("click", calc.btnPress);
}
