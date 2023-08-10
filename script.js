const buttons = document.querySelectorAll(".tip-btn");
const inputField = document.getElementById("input");
const peopleField = document.getElementById("people");
const generateBtn = document.getElementById("generate-btn");
const tipAmountElement = document.querySelector(".tip-amount");
const totalAmountElement = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-btn");

// inputField.addEventListener("input", function() {
//     const value = parseFloat(inputField.value);
    
//     if (isNaN(value) || value > 99999) {
//       inputField.value = "";
//     }
//   });

resetBtn.setAttribute("disabled", "true");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isSelected = button.classList.contains("selected");

    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    if (!isSelected) {
      button.classList.add("selected");
    }

    checkValidity();
  });
});

inputField.addEventListener("input", () => {
  checkValidity();
});



peopleField.addEventListener("input", () => {
  //   calculateAmounts();
});

generateBtn.addEventListener("click", () => {
  calculateAmounts();
  resetBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", () => {
  inputField.value = "";
  peopleField.value = 1;
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  tipAmountElement.textContent = "₹0.00";
  totalAmountElement.textContent = "₹0.00";
  generateBtn.setAttribute("disabled", "true");
  resetBtn.setAttribute("disabled", "true");
});

function checkValidity() {
  const billAmount = parseFloat(inputField.value);
  const selectedTipButton = document.querySelector(".tip-btn.selected");

  if (billAmount > 0 && selectedTipButton) {
    generateBtn.removeAttribute("disabled");
  } else {
    generateBtn.setAttribute("disabled", "true");
  }
}

function calculateAmounts() {
  const billAmount = parseFloat(inputField.value);
  const selectedTipButton = document.querySelector(".tip-btn.selected");
  const tipPercentage = parseFloat(selectedTipButton.textContent);
  const numberOfPeople = parseInt(peopleField.value);

  const tipAmount = (billAmount * tipPercentage) / 100*numberOfPeople;
  const totalAmount = (billAmount + tipAmount) / numberOfPeople;

  tipAmountElement.textContent = `₹${tipAmount.toFixed(2)}`;
  totalAmountElement.textContent = `₹${totalAmount.toFixed(2)}`;
}
