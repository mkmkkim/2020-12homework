// if mobile device, increase font size
var str = navigator.userAgent;
var device = ""; 
if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
    device = "mobileDevice";
else
    device = "desktopPC";

if (device == "mobileDevice") {
    document.body.style.fontSize = "150%";
    document.getElementById("dup_check").style.fontSize = "120%";
    document.getElementById("signup_button").style.fontSize = "120%";
    document.getElementById("reset2").style.fontSize = "120%";
}
//버튼 abled
document.getElementById("dup_check").removeAttribute("disabled");
document.getElementById("signup_button").removeAttribute("disabled");

document.getElementById("reset2").removeAttribute("disabled");



// dupcheck, signup button
document.getElementById("dup_check").onclick=duplicationCheck;
document.getElementById("signup_button").onclick=signup;

function duplicationCheck() {
    username_in = document.getElementById("username2").value;

    var localStorage = window.localStorage;
    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
        numUsers = localStorage.numUsers;

		// 
        var duplicate = false;
        if (numUsers != undefined) {
            for(i=0;i<numUsers;i++) {
                username = localStorage["user"+i];
                if (username == username_in) {
                    duplicate = true;
                    break;
                 }
            }
        }

		if (duplicate)
            alert(username_in + " is duplicate username. Please enter diffrent one.");
        else
            alert("You can use " + username_in + " as a username.");
    }
}
function signup() {
    username_in = document.getElementById("username2").value;
    password_in1 = document.getElementById("pass1").value;

    var localStorage = window.localStorage;
    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
        numUsers = localStorage.numUsers;
        if (numUsers == undefined) numUsers = "0";
        localStorage["user"+numUsers] = username_in;
        localStorage["pass"+numUsers] = password_in1;
        
        localStorage.numUsers = parseInt(numUsers) + 1;
        alert("Signup succeeded!\n" + "Number of users: " + localStorage.numUsers);
    }
}
//다음 API http://postcode.map.daum.net/guide
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}