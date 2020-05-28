let websocket;

let login = prompt("Entrez votre login : ");
document.getElementById("title").innerHTML = "Bonjour " + login;

function sendMessage(event){
  event.preventDefault();
  let message = document.getElementById('message');
  websocket.send(login+" : "+message.value);
  message.value = "";
}

function isWriting() {
  websocket.send(login+" is writing");
}

function disconnect(){
  websocket.close();
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
  document.getElementById("message").addEventListener("input", isWriting);
  document.getElementById('btn').addEventListener("click",disconnect);
  websocket.onopen = function(event) {
    websocket.send(login+" is connected");
  }
  websocket.onmessage = function(event) {
    printMessage(event.data);
  }
  websocket.onclose = function(event) {
    websocket.send(login+" is disconnected");
  }
}


createWebSocket();