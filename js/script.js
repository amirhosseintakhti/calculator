// const display = document.querySelector(".display");
// let tempNum = "";
// let firstNum, secondNum, operator, res,total,n=0;
// function getNum(input) {
//   tempNum += input;
//   display.innerHTML = tempNum;
// }
// function sum() {
//   if(n==0){
//       display.innerHTML = "";
//   firstNum = tempNum;
//   tempNum = "";
//   operator = "sum";
//   // console.log(firstNum);
//   n++
//   console.log(n);
// }
//   else if(n==1){
//     display.innerHTML = ''
//     total= +firstNum + +tempNum
//     firstNum = ''
//     tempNum = ''
//     operator = "sum";
//     // console.log(firstNum);
//     // console.log(total);
//     console.log(n);
//     n++
//   }
//   else{    
//     display.innerHTML = ''
//     total += +tempNum
//     tempNum = ''
//     operator = "sum";
//     // console.log(firstNum);
//     // console.log(total);
//     console.log(n);
//     n++
//   }
 
// }
// function minus () {
//   // display.innerHTML = "";
//   // firstNum = tempNum;
//   // tempNum = "";
//   // operator = "minus";
//   if(n==0){
//     display.innerHTML = "";
// firstNum = tempNum;
// tempNum = "";
// operator = "minus";
// // console.log(firstNum);
// n++
// console.log(n);
// }
// else if(n==1){
//   display.innerHTML = ''
//   total= +firstNum - +tempNum
//   firstNum = ''
//   tempNum = ''
//   operator = "minus";
//   // console.log(firstNum);
//   // console.log(total);
//   console.log(n);
//   n++
// }
// else{    
//   display.innerHTML = ''
//   total= +total - +tempNum
//   tempNum = ''
//   operator = "minus";
//   // console.log(firstNum);
//   // console.log(total);
//   console.log(n);
//   n++
// }
// }
// function multiply () {
//   display.innerHTML = "";
//   firstNum = tempNum;
//   tempNum = "";
//   operator = "cross";
// }
// function result() {
//   secondNum = tempNum;
//   // tempNum = "";
//   if (operator === "sum" && n==1) {
//     res = +firstNum + +secondNum}
//   else if(operator === "sum" && n>1){
//       res = +total + +secondNum
//   } 
//   else if (operator === "minus" && n==1) {
//     res = +firstNum - +secondNum;
//   }
//   else if(operator === "minus" && n>1){
//     res = +total - +secondNum
// } 
// else if (operator === "cross") {
//   res = +firstNum * +secondNum;
// }
//   display.innerHTML = res;
//   console.log(secondNum);
//   console.log(res);
// }

//new solotaion


const display = document.querySelector(".display");
let tempNum = "";
let firstNum, secondNum, operator, res;
function getNum(input) {
  tempNum += input;
  display.innerHTML = tempNum;
}
function sum() {
  display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
  } else {
    result();
  }
  tempNum = "";
  operator = "sum";
}
function minus() {
  display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
  } else {
    result();
  }
  tempNum = "";
  operator = "minus";
}
function multiply() {
  // display.innerHTML = "";
  if (firstNum === undefined) {
    firstNum = tempNum;
    console.log(5);
  } else if (tempNum !== "") {
    result();
    console.log(10);
  }
  else{
    // do nothing
    console.log(15);
  }
  tempNum = "";
  operator = "multiple";
}
function result() {
  secondNum = tempNum;
  tempNum = "";
  if (operator === "sum") {
    res = +firstNum + +secondNum;
  } else if (operator === "minus") {
    res = +firstNum - +secondNum;
  }
  else if (operator === "multiple" && secondNum !== "") {
    res = +firstNum * +secondNum
  }
  else {
    // do nothing
    console.log(20);
  }
  display.innerHTML = res;
  firstNum = res;
  // console.log(firstNum);
  // console.log(secondNum);
  // console.log(res);

}