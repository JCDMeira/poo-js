class Calculator {
  constructor() {
    this.upperValue = document.querySelector("#upper-number");
    this.resultValue = document.querySelector("#result-number");
    this.reset = 0;
    //verifica se só tem números
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

  refreshValues = (total) => {
    this.upperValue.textContent = total;
    this.resultValue.textContent = total;
  };

  // resolve operação
  resolution = () => {
    //explode uma string em um array
    let upperValueArray = this.upperValue.textContent.split(" ");

    //resultado da operação
    let result = 0;

    for (let i = 0; i <= upperValueArray.length; i++) {
      let actualItem = upperValueArray[i];

      if (actualItem === "+") {
        result =
          parseFloat(upperValueArray[i - 1]) +
          parseFloat(upperValueArray[i + 1]);
      }
    }

    if (result) {
      this.reset = 1;
    }

    // atualiza valores
    this.refreshValues(result);
  };

  btnPress = ({ target: { textContent } }) => {
    let input = textContent;
    let upperValue = this.upperValue.textContent;

    if (this.reset && this.reg.test(input)) {
      upperValue = "0";
      this.resultValue.textContent = "0";
    }
    this.reset = 0;

    //ativa método de limpar display
    if (input === "AC") {
      this.clearValues();
    } else if (input === "=") {
      this.resolution();
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
