// imp point for interview of js
// type of variable declare
// var let const
// diff btw var and const-->>
// var -> can be redeclred and reasign
// const -> nor be redeclared and resing
//let -> can be reasign but not re declared
var a = 24;
var a = 25;
let b = 24;
b = 248;
//scoping in js
//diff btw undifend and not defined
console.log(a);
var a = 34;
{
  console.log(a);
  a = 56;
  console.log(a);
  a = 78;
  console.log(a);
}
console.log(a);
//call back
function register() {
  setTimeout(() => {
    console.log("registration here");
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("login here");
  }, 2000);
}
function getData() {
  setTimeout(() => {
    console.log("fetch the data from DB");
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 4000);
}

register();
login();
getData();
displayData();
//
function register() {
  waitfordelay(10000);
  console.log("registration here");
}
function login() {
  waitfordelay(2000);

  console.log("login here");
}
function getData() {
  waitfordelay(6000);

  console.log("fetch the data from DB");
}
function displayData() {
  waitfordelay(3000);

  console.log("display data");
}
function waitfordelay(delay) {
  const mt = Date.now() + delay;
  while (Date.now() < mt) {}
}
register();
login();
getData();
displayData();
//
function register() {
  setTimeout(() => {
    console.log("registration here");
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("login here");
  }, 2000);
}
function getData() {
  setTimeout(() => {
    console.log("fetch the data from DB");
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 4000);
}

register();
login();
getData();
displayData();
