// document.getElementById(),
// .getElementBy(),
// .getElementByClassName(),
// .ouerySelectorAll()
function addparagraph() {
  const para = document.createElement("p");
  para.innerText = "this is new paragraph";
  para.style.color = "red";
  const parent = document.getElementById("para");
  console.log("this is a paraph");
  parent.appendChild(para);
}

function removeParagraph() {
  const para = document.querySelector("p");
  const parent = document.getElementById("para");
  parent.removeChild(para);
}
function removeALLParagraph() {
  const para = document.querySelectorAll("p");
  const parent = document.getElementById("para");

  //   for (i of para) {
  //     parent.removeChild(i);
  //   }

  para.forEach((i) => {
    parent.removeChild(i);
  });
}
