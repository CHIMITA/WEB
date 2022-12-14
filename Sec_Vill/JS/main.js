
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