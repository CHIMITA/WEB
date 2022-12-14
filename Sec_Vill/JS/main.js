
//login
/*
function login_check() {
    const ID_s = 'admin';
    const PW_s = 'admin1234';

    var id = document.getElementById('ID').value;
    var pw = document.getElementById('PW').value;
    var name = document.getElementById('name').value;

    if (ID_s === id && PW_s === pw){
        alert("로그인 성공" + name + "님 환영합니다!");
        location.href = "../Html/main.html";
    }
    else {
        alert("ID와 PW 가 맞지 않습니다. 다시 시도해주세요 :D");
        location.href = "../Html/login.html";
    }

}
*/
function send(message){

    const element = document.getElementById('chat');
    //const content = document.createTextNode(message);

    // new div 생성
    const newP = document.createElement('p');
   
    // new div에 추가할 text node 생성
    const newText = document.createTextNode(message);
  
    // text node를 new div에 추가
    newP.appendChild(newText);
  
    // new div를 기존 div에 추가
    element.appendChild(newP);
    
    document.querySelector("#chat_box").append(newP);

  
}

function loading(){
    location.href = "../Html/my_vil.html";
}



var job= new Array('악성코드 분석 전문가', '디지털 포렌식 수사관', '모의 해킹 전문가', '보안 컨설턴트', '보안관제전문가', '침해사고 대응 전문가', '기업 내 보안 담당자');


function pick_job(a){
    const user_name = prompt("이름을 입력해주세요!", "OOO");
    alert(user_name + "님이 뽑은 직업은 " + a[Math.floor(Math.random() * a.length)] + "입니다!!");

    // 위의 주어진 배열(Array)에서 무작위 요소 1개 추출

}

/*
const myAudio = new Audio();
myAudio.src = "../audio/cat_foot.mp3";

const btnPlay = document.getElementById("play_btn");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");

// 재생 버튼
btnPlay.onclick = function () {
    myAudio.play();
    myAudio.volume = 1;
}

// 일시정지 버튼
btnPause.onclick = function () {
    myAudio.pause();
}

// 정지 버튼
btnStop.onclick = function () {
    myAudio.pause();
    myAudio.currentTime = 0; 
}
*/