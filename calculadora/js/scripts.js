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

  // método de soma
  sum = (n1, n2) => {
    return parseFloat(n1) + parseFloat(n2);
  };

  // método de subtração
  subtraction = (n1, n2) => {
    return parseFloat(n1) - parseFloat(n2);
  };

  // método de subtração
  multiplication = (n1, n2) => {
    return parseFloat(n1) * parseFloat(n2);
  };

  // método de divisão
  division = (n1, n2) => {
    return parseFloat(n1) / parseFloat(n2);
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
      let operation = 0;
      let actualItem = upperValueArray[i];

      //faz multiplicação
      if (actualItem === "x") {
        result = this.multiplication(
          upperValueArray[i - 1],
          upperValueArray[i + 1]
        );
        operation = 1;
        //faz divisão
      } else if (actualItem === "/") {
        result = this.division(upperValueArray[i - 1], upperValueArray[i + 1]);
        operation = 1;
        // checa se há alguma multiplicação ou divisão ainda
      } else if (
        !upperValueArray.includes("x") &&
        !upperValueArray.includes("/")
      ) {
        //faz a soma
        if (actualItem === "+") {
          result = this.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
          operation = 1;
          //faz a subtração
        } else if (actualItem === "-") {
          result = this.subtraction(
            upperValueArray[i - 1],
            upperValueArray[i + 1]
          );
          operation = 1;
        }
      }

      // atualiza valores do array para proxima iteração
      if (operation) {
        // indice anterior no resultado da operação
        upperValueArray[i - 1] = result;
        // remove os itens já utilizado para a operação
        upperValueArray.splice(i, 2);
        // atualizar o valor do índice
        i = 0;
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
        if (this.reg.test(input)) this.upperValue.textContent = input;
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
