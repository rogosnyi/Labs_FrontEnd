const FrstElem = document.getElementById("element1");
const ScndElem = document.querySelector("#element2");

function random1() {
  const randomBackground = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  FrstElem.style.background = "#" + randomBackground;
  FrstElem.style.color = "#" + randomColor;
}

function random2() {
  const randomBackground = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  ScndElem.style.background = "#" + randomBackground;
  ScndElem.style.color = "#" + randomColor;
}

function newImage() {
  let pic = document.getElementById("picture");
  if (!document.getElementById("newImg")) {
    pic.insertAdjacentHTML(
      "afterend",
      '<img id="newImg" src="odesa.jpg" alt="Одеса" />'
    );
  }
}

function increaseImage() {
  if (document.getElementById("newImg")) {
    let img = document.getElementById("newImg");
    let width = +img.offsetWidth;
    let height = +img.offsetHeight;
    width += 80;
    height += 40;
    img.style.width = width + "px";
    img.style.height = height + "px";
  }
}

function decreaseImage() {
  if (document.getElementById("newImg")) {
    let img = document.getElementById("newImg");
    let width = +img.offsetWidth;
    let height = +img.offsetHeight;
    width -= 80;
    height -= 40;
    img.style.width = width + "px";
    img.style.height = height + "px";
  }
}

function removeImage() {
  let odesa = document.getElementById("newImg");
  odesa.remove();
}
