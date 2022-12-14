
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

var job= new Array('악성코드 분석 전문가', '디지털 포렌식 수사관', '모의 해킹 전문가', '보안 컨설턴트');

document.write(randomItem(job), '');

// 위의 주어진 배열(Array)에서 무작위 요소 1개를 반환한다.
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}
