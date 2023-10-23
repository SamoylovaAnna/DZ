const screen = document.querySelector(".screen");
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operators = ['+', '-', '/', '*'];
const btns = document.querySelectorAll(".btns");

let a = "";
let b = "";
let sing = "";
let finish = false;


btns.forEach((btns) => {
  btns.addEventListener("click", (e) => {
        const innerText = e.target.textContent;

      function clearAll () {
        a = "";
        b = "";
        sing = "";
        finish = false;
        screen.textContent = 0;
      }

      document.querySelector('.ac').onclick = clearAll;
      
      if(innerText === 'CE') {
      screen.textContent = screen.textContent.substring(0, innerText.length -1);
        }

        //if(innerText === 'CE') {
          //screen.innerText = screen.innerText.slice(0, -1);
        //}

        
      if(innerText !== 'CE' && innerText !== 'AC' && innerText !== '=') {
      screen.innerText += innerText;
      }


    if(numbers.includes(innerText)) {
      if (b ==="" && sing === "") {
        a += innerText;
      
      screen.textContent = a;
      }
      else if (a!=="" && b!=="" && finish) {
        b = innerText;
        finish = false;
        screen.textContent = b;
      }
      else {
        b += innerText;
        screen.textContent = b;
      }
      console.log(a, b, sing)
    }

    if (operators.includes(innerText)) {
      sing = innerText;
      screen.textContent = sing;
      console.log(a, b, sing);
      return;
    }

    if (innerText === '=') {
      if (b ==="") b = a;
      switch (sing) {
        case "+":
          a = (+a) + (+b);
          break;
        case "-":
          a = a - b;
          break;
        case "*":
          a = a * b;
          break;
        case "/":
          a = a / b;
          break;
      }
      finish = true;
      screen.textContent = a; 
      console.log(a, b, sing);
    }



  });   
});

//if (numbers.includes(key)) {
  //a+=key;
  //console.log(a, b, sing);









