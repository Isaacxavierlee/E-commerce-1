var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function() {
    ProductImg.src = this.src;
  };
}

var LoginForm = document.getElementById("login-form");
var RegForm = document.getElementById("register-form");
var Indicator = document.getElementById("Indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(0px)";
}
