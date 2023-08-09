const buttons = document.querySelectorAll(".tip-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => {
        btn.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });