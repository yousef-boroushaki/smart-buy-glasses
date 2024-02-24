let close = document.querySelector(".close");
let aboveHeader1 = document.querySelector(".above-header1");
let welcomeImage = document.getElementById("welcome-image");

close.addEventListener("click", function () {
  aboveHeader1.style.display = "none";
  welcomeImage.style.marginTop = "120px";
});

/********************************************************************* */

var enter = document.getElementById("enter");
var login = document.getElementById("login");

enter.addEventListener("mouseover", function () {
  login.style.display = "grid";
});
enter.addEventListener("mouseout", function () {
  login.style.display = "none";
});
login.addEventListener("mouseover", function () {
  login.style.display = "grid";
});
login.addEventListener("mouseout", function () {
  login.style.display = "none";
});

/********************************************************************* */

var guide1 = document.getElementById("guide1");
var more1 = document.getElementById("guide-more1");
var guide2 = document.getElementById("guide2");
var more2 = document.getElementById("guide-more2");
var guide3 = document.getElementById("guide3");
var more3 = document.getElementById("guide-more3");
var guide4 = document.getElementById("guide4");
var more4 = document.getElementById("guide-more4");
var guide5 = document.getElementById("guide5");
var more5 = document.getElementById("guide-more5");
var guide6 = document.getElementById("guide6");
var more6 = document.getElementById("guide-more6");

guide1.addEventListener("mouseover", function () {
  more1.style.color = "#8a8a8a";
});
guide1.addEventListener("mouseout", function () {
  more1.style.color = "";
});
guide2.addEventListener("mouseover", function () {
  more2.style.color = "#8a8a8a";
});
guide2.addEventListener("mouseout", function () {
  more2.style.color = "";
});
guide3.addEventListener("mouseover", function () {
  more3.style.color = "#8a8a8a";
});
guide3.addEventListener("mouseout", function () {
  more3.style.color = "";
});
guide4.addEventListener("mouseover", function () {
  more4.style.color = "#8a8a8a";
});
guide4.addEventListener("mouseout", function () {
  more4.style.color = "";
});
guide5.addEventListener("mouseover", function () {
  more5.style.color = "#8a8a8a";
});
guide5.addEventListener("mouseout", function () {
  more5.style.color = "";
});
guide6.addEventListener("mouseover", function () {
  more6.style.color = "#8a8a8a";
});
guide6.addEventListener("mouseout", function () {
  more6.style.color = "";
});

/********************************************************************** */

var eye = document.getElementById("eye");
var sun = document.getElementById("sun");
var item1 = document.getElementById("love-item-responsive1");
var item2 = document.getElementById("love-item-responsive2");

item2.style.display = "none";

eye.addEventListener("click", function () {
  item2.style.display = "none";
  item1.style.display = "flex";
  eye.style.color = "black";
  eye.style.borderBottom = "2px solid #ff9800";
  sun.style.color = "#8a8a8a";
  sun.style.borderBottom = "none";
});
sun.addEventListener("click", function () {
  item1.style.display = "none";
  item2.style.display = "flex";
  sun.style.color = "black";
  sun.style.borderBottom = "2px solid #ff9800";
  eye.style.color = "#8a8a8a";
  eye.style.borderBottom = "none";
});
/********************************************************************* */
var bars = document.getElementById("bars")
var menu = document.getElementById("menu-responsive")
var displayNone = document.getElementById("display-none")
var aboveHeader1Responsive = document.getElementById("above-header1-responsive")
var close1 = document.getElementById("close")

bars.addEventListener("click", function(){
  menu.style.display = "flex"
  displayNone.style.display = "none"
  aboveHeader1Responsive.style.display = "none"
  bars.style.display="none"
  close1.style.display = "unset"
})
close1.addEventListener("click", function(){
  menu.style.display = "none"
  displayNone.style.display = "unset"
  aboveHeader1Responsive.style.display = "flex"
  bars.style.display="unset"
  close1.style.display = "none"
})