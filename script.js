let screen1 = document.querySelector(".screen-1");
let screen2 = document.querySelector(".screen-2");

let buttons = document.querySelectorAll(".btn");

let isOn = false;

buttons[0].addEventListener("click", () => {
  if (isOn == false) {
    screen2.style.display = "block";
    isOn = true;
    setTimeout(() => {
      screen2.style.display = "none";
      screen1.innerText = "";
      isOn = false;
    }, "60000");
  } else {
    screen2.style.display = "none";
    screen1.innerText = "";
    isOn = false;
  }
});

for (let i=1; i<=3; i++) {
    buttons[i].onclick = ()=>{
        if (isOn == true) {
            if (screen1.innerText != "") {
                if (i == 1) {
                  let puissance1 = document.createTextNode("²");
                  screen1.appendChild(puissance1);
                } else if ( i == 2) {
                  let puissance2 = document.createTextNode("³");
                  screen1.appendChild(puissance2);
                } else if (i == 3) {
                  let puissance3 = document.createTextNode("%");
                  screen1.appendChild(puissance3);
                }
            }
        }
    }
}

for (let i = 4; i <= 18; i++) {
  buttons[i].onclick = () => {
    if (isOn == true) {
      let newText = buttons[i].textContent;
      let newNode = document.createTextNode(newText);
      screen1.appendChild(newNode);
    }
  };
}

buttons[19].addEventListener("click", ()=>{
  let screenShow = screen1.textContent;
  let screenShow2 = "";
  let arr = [];
  let res = 0;
  if (screenShow.indexOf("+") != -1) {
    screenShow2 = screenShow.replaceAll('+', ' ');
    arr = screenShow2.split(' ');
    for (let i=0; i < arr.length; i++) {
      res += parseFloat(arr[i]);
    }
    screen1.innerText =`${res}`;
  } else if (screenShow.indexOf("-") != -1) {
    res += parseFloat(screenShow.slice(0, screenShow.indexOf("-"))) - parseFloat(screenShow.slice(screenShow.indexOf("-")+1));
    screen1.innerText =`${res}`;
  } else if (screenShow.indexOf("x") != -1) {
    res += parseFloat(screenShow.slice(0, screenShow.indexOf("x"))) * parseFloat(screenShow.slice(screenShow.indexOf("x")+1));
    screen1.innerText =`${res}`;
  } else if (screenShow.indexOf("/") != -1) {
    res += parseFloat(screenShow.slice(0, screenShow.indexOf("/"))) / parseFloat(screenShow.slice(screenShow.indexOf("/")+1));
    screen1.innerText =`${res.toFixed(2)}`;
  } else if (screenShow.indexOf("%") != -1) {
    res += parseInt(screenShow.slice(0, screenShow.indexOf("%"))) % parseInt(screenShow.slice(screenShow.indexOf("%")+1));
    screen1.innerText =`${res}`;
  } else if (screenShow.indexOf("²") != -1) {
    res += parseFloat(screenShow.slice(0, screenShow.indexOf("²")));
    screen1.innerText = `${res*res}`;
  } else if (screenShow.indexOf("³") != -1) {
    res += parseFloat(screenShow.slice(0, screenShow.indexOf("³")));
    screen1.innerText = `${res*res*res}`;
  }
});
