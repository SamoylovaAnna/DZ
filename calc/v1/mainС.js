const screen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btns");

btns.forEach((btns) => {
    btns.addEventListener("click", (e) => {
          const innerText = e.target.textContent;

        if(innerText === "AC") {
            screen.innerText = "";
          }

        if(innerText === "CE") {
            screen.innerText = screen.innerText.slice(0, -1);
          }

        if(innerText !== "CE" && innerText !== "AC" && innerText !== "=") {
        screen.innerText += innerText;
        }

      if(innerText === "=") {
            screen.innerText = eval(screen.innerText);
        }


    });   
});









