//전역함수
var device;
var drawing = false;
var canvas;
var context;
var rect;
 
/*배경*/
function initialize() {
    context.clearRect(0,0,580,450);
    context.beginPath();
    context.rect(0,0,580,450);
    context.strokeStyle = "red";
    context.fillStyle = "LightGoldenrodYellow";
    context.fill();
//선 그리기
    context.lineWidth = 0.5;
    for(i=1;i<=8;i++) {
        context.moveTo(5,i*50);
        context.lineTo(575, i*50);
    }
    //초기화라고 함.
    context.stroke();
}

// ���� 14-9) 23��: �׸��� ���� �Լ� 
function startDrawing()
{
    if (device == "moblieDevice") event.preventDefault();
    event.preventDefault();
    drawing = true;
    context.beginPath();
    context.strokeStyle = "dimgray";
    context.lineWidth = 1;
    context.arc(event.clientX - rect.left, event.clientY - rect.top, 3, 0, 2*Math.PI)
    context.stroke();
    context.fillStyle = "dimgray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    context.lineCap = "round";
    context.lineWidth = 6;
}
// ���� 14-9) 42��: �׸��� �߰�(����) �Լ� 그리기 진행
function keepDrawing()
{
    if (drawing) {
        var x,y;
        if (device == "mobileDevice") {
            x = event.targetTouches[0].pageX;
            y = event.targetTouches[0].pageY;
        }
        else {
            x = event.clientX;
            y = event.clientY;
        }
        context.lineTo(x - rect.left, y - rect.top);
        context.stroke();
    }
}

// ���� 14-9) 58��: �׸��� ���� �Լ� 그만 그리기
function stopDrawing()
{
    if (drawing) {
        context.stroke();
        drawing = false;
    }
}


// ���� �Լ� 뭐지...?
function save()
{
	var localStorage = window.localStorage;

    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
		// �ǽ� 14-4) ���� 14-10) 9�� 
		// ĵ����(canvas)�� ����� ������ URL�� ��ȯ�� �Ŀ� localStorage�� canvas Ű�� ����
		// toDataURL() �޼ҵ� �̿�
        localStorage.canvas = canvas.toDataURL();


    }
}

// ���� �Լ�
function restore()
{
	var localStorage = window.localStorage;
    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
		// ���� 14-10: 20~23 
		// localStorage�� ����� canvas ���� �о�ͼ� �׸����� ȭ�鿡 ǥ��
		var img = new Image();
		img.src = localStorage.canvas;
		img.onload = function () {
			context.drawImage(img, 0, 0);
		}
	}
}



function getDeviceType() {
    var str = navigator.userAgent;
    if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
        device = "mobileDevice";
    else
        device = "desktopPC";
}

function startMemo() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d"); 
    rect = canvas.getBoundingClientRect();
    initialize();
}

getDeviceType();
document.body.onload = startMemo;

dom = document.getElementById("myCanvas");

// for mobile devices
dom.ontouchstart = startDrawing;
dom.ontouchmove = keepDrawing;
dom.ontouchend = stopDrawing;

// for desktop PC
dom.onmousedown = startDrawing;
dom.onmousemove = keepDrawing;
dom.onmouseup = stopDrawing;
