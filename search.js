function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("texts").value;
    if(x=="딸기"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="사과"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="포도"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="복숭아"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="배"){
        window.location.href = "domestic_fruits.html";
    }
    else if(x=="자두")
    {
        window.location.href = "domestic_fruits.html";
    }
    else{
        window.location.href = "not_found.html";
    }
    if(x=="파인애플"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="블루베리"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="멜론"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="체리"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="자몽"){
        window.location.href = "foreign_fruits.html";
    }
    else if(x=="망고"){
        window.location.href = "foreign_fruits.html";
    }
    else{
        window.location.href = "not_found.html";
    }
}
