// document.onkeydown = checkKey;

// function checkKey(e) {
//     e = e || window.event;

//     let snake = document.querySelector(".snake")

//     if (e.keyCode == '48') {


//     } else if (e.keyCode == '49') {


//     } else if (e.keyCode == '50') {



//     } else if (e.keyCode == '39') {


//     }
//     else if (e.keyCode == '39') {


//     }

// }
let num = document.querySelectorAll(".num")
let curntNum = document.querySelector("#curntNum")
let pastNum = document.querySelector("#pastNum")
let nine = document.getElementById("9")
let eight = document.getElementById("8")
let add = document.getElementById("add")
console.log(add)
num.forEach(num => {
    num.onclick = function() {
        curntNum.value += this.textContent
    }
});