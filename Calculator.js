let calc = " ";
function operation(op) {
  calc += op;
  return (document.querySelector(".result-p").innervalue = calc);
}
localStorage.getItem("check");
res(localStorage.getItem("check"));
//here the evaluation will be stored in the local storage
//even after we refreshing the page it will be stored in the local storage
//it will be displayed in the console
function res(check) {
  document.querySelector(".result-p").innerHTML = check;
}
let cal = " ";
function res1(event) {
  if (
    (event.key >= 0 && event.key <= 9) ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    cal += event.key;
    document.querySelector(".result-p").innerHTML = cal;
  }
  if (event.key === "Enter") {
    cal = eval(cal);
    document.querySelector(".result-p").innerHTML = cal;
    cal = " ";
  }
}
