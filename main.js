// 모바일 여부 검사
var str = navigator.userAgent;
var device = "";
if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
    device = "mobileDevice";
else
    device = "desktopPC";

// 모바일 기기이면 글씨 크기 및 메뉴 크기를 크게
if (device == "mobileDevice") {
    document.body.style.fontSize = "150%";
    document.getElementsByTagName("nav")[0].style.fontSize = "120%";
}
// 비활성화된 버튼 4개를 활성화 : "save_favorite", "view_favorite", "memo", "location"
// 395쪽 3번째 박스 코드 참고
document.getElementById("save_favorite").removeAttribute("disabled");
document.getElementById("view_favorite").removeAttribute("disabled");
document.getElementById("memo").removeAttribute("disabled");
document.getElementById("location").removeAttribute("disabled");
// 4개의 버튼에 이벤트핸들러 등록:"save_favorite", "view_favorite", "memo", "location"
// 396쪽 1번째 박스 코드의 첫 번째 줄 참고, 411쪽 박스 코드의 첫번째 줄 참고
document.getElementById("location").onclick = showMap;
document.getElementById("memo").onclick = memoCanvas;
document.getElementById("save_favorite").onclick = saveFavorite;
document.getElementById("view_favorite").onclick = viewFavorite;
// "save_favorite.html" 보여주기
function saveFavorite() {
    dom = document.getElementsByName("display_area");
    dom[0].src = "save_favorite.html";
}
// "view_favorite.html" 보여주기
function viewFavorite() {
    dom = document.getElementsByName("display_area");
    dom[0].src = "view_favorite.html";
}
// "memo_canvas.html" 보여주기
// 411쪽 박스 코드의 함수 부분 코드 참고
function memoCanvas() {
    dom = document.getElementsByName("display_area");
    dom[0].src = "memo_canvas.html";
}
// "kakao_map.html" 보여주기
function showMap() {
    dom = document.getElementsByName("display_area");
    dom[0].src = "kakao_map.html";
}