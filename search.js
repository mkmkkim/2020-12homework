function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("texts").value;

    if (x=="apple"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="strawberry"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="grape"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="pear"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="plum"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="peach"){
        window.location.href = "domestic_fruits.html";
    }
    else{
        window.location.href = "not_found.html";
    }
    if(x=="pineapple"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="blueberry"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="melon"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="cherry"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="grapefruit"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="mango"){
        window.location.href = "foreign_fruits.html";
    }
    else{
        window.location.href = "not_found.html";
    }
}
