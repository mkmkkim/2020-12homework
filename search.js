function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("texts").value;
    if(x=="딸기"||x=="사과"||x=="포도"||
    x=="복숭아"||x=="배"||x=="자두")
    {
        window.location.href = "domestic_fruits.html";
    }
    if(x=="파인애플"||x=="블루베리"||x=="멜론"||x=="체리"||
    x=="자몽"||x=="망고")
    {
        window.location.href = "foreign_fruits.html";
    }
    else{
        window.location.href = "not_found.html";
    }
}