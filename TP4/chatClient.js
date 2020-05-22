let websocket;

let login = prompt("Entrez votre login : ");

function sendMessage(event){
  event.preventDefault();
  let message = document.getElementById('message');
  websocket.send(login+" : "+message.value);
  message.value = "";
}

function printMessage(text){
  let textarea = document.getElementById("textArea");
  if(textarea.value == ""){
    textarea.value = text;
  } else {
    textarea.value = textarea.value + "\n" + text;
  }
}

function createWebSocket(){
  websocket = new WebSocket('ws://localhost:12345');
  document.getElementById('send').addEventListener("click",sendMessage);
  websocket.onmessage = function(event) {
    printMessage(event.data);
  }
}


createWebSocket();




