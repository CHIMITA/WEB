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
function my_status(){
    var status = 0; 

    if (status == 0){
        alert("잠깐! 로그인 먼저 해주세요 :)")

    }
}

const SignUp = () => {
    const [modal, setModal] = useState(false);
  
    return (
      <>
        <div
          className="signUp"
          onClick={() => {
            setModal(true);
          }}
        >
          회원가입창
        </div>
        <div className="modal">
          {modal ? <Modal modal={modal} setModal={setModal} /> : null}
        </div>
      </>
    );
  };



