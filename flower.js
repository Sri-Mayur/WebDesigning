let check = 0;
let y = document.getElementById("yellowbtn");
let r = document.getElementById("redbtn");
let b = document.getElementById("blackbtn");
let p = document.getElementById("pinkbtn");

function changeText1() {
  if (check % 2 === 0) {
    y.innerText = "Yellow Flower";
    y.style.backgroundColor = "#ddc124";
    check = 1;
  } else {
    y.innerText = "Click Here";
    y.style.backgroundColor = "#f0288c";
    check = 0;
  }
}

function changeText2() {
    if (check % 2 === 0) {
      r.innerText = "Red Flower";
      r.style.backgroundColor = "red";
      check = 1;
    } else {
      r.innerText = "Click Here";
      r.style.backgroundColor = "#f0288c";
      check = 0;
    }
  }

function changeText3(){
    if (check %2 === 0){
        b.innerText= "Black Flower";
        b.style.backgroundColor = "black";
        check=1;
    } else {
        b.innerText="Click Here";
        b.style.backgroundColor ="#f0288c"
        check=0;
    }
}

function changeText4(){
    if (check %2 === 0){
        p.innerText= "Pink Flower";
        p.style.backgroundColor="#c7327c";
        check=1;
    } else {
        p.innerText="Click Here";
        p.style.backgroundColor="#f0288c";
        check=0;
    }
}
