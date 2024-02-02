let stpbl1 = document.getElementById("stepbl1");
let stpborder1 = document.getElementById("stepborder1");

let stpbl2 = document.getElementById("stepbl2");
let stpborder2 = document.getElementById("stepborder2");

let stpbl3 = document.getElementById("stepbl3");
let stpborder3 = document.getElementById("stepborder3");

stpbl1.onmouseover = function() {
    stpborder1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function() {
    stpborder1.style.borderBottom = "3px solid black";
}

stpbl2.onmouseover = function() {
    stpborder2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function() {
    stpborder2.style.borderBottom = "3px solid black";
}

stpbl3.onmouseover = function() {
    stpborder3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function() {
    stpborder3.style.borderBottom = "3px solid black";
}