// 모달 열기
function modalOpen() {
    document.querySelector('.modal_wrap').style.display = 'block';
    document.querySelector('.modal_background').style.display = 'block';
}

// 모달 끄기
function modalClose() {
    document.querySelector('.modal_wrap').style.display = 'none';
    document.querySelector('.modal_background').style.display = 'none';
}


//버튼 클릭리스너 달기
document.querySelector('#modal_btn').addEventListener('click', modalOpen);
document.querySelector('.modal_close').addEventListener('click', modalClose);

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

function input_box() {

}

