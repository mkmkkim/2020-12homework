function enterSearch() {
  if (event.keyCode == 13) {
    myFunction(); // 실행할 이벤트
    }
  }
function myFunction(event) {
  event.preventDefault();
  var x = document.getElementById("texts").value;
  var frame = document.getElementById("frame");
    
if (x == "apple") {//setAttribute(name,value) 객체의 속성을 가져옴.
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "strawberry"){
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "grape") {
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "pear") {
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "plum") {
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "peach") {
  frame.setAttribute("src", "domestic_fruits.html");
}
else if (x == "pineapple") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else if (x == "blueberry") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else if (x == "melon") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else if (x == "cherry") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else if (x == "grapefruit") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else if (x == "mango") {
  frame.setAttribute("src", "foreign_fruits.html");
}
else {
  frame.setAttribute("src", "not_found.html");
}
}