
function encode(mensagem, desloc){
  let fullWord = "";
  let stringWord = "";
  let result = "";

  for(var i = 0; i < mensagem.length; i++){
    let messageAsc = mensagem.charCodeAt(i);
    let newMessageAsc = ""
    
    //if(desloc > 25){
      if(messageAsc > 64 && messageAsc < 91){
        console.log(desloc)
        fullWord = (((parseInt(messageAsc) - 65 + parseInt(desloc)) % 26) + 65)
      }
      if(messageAsc > 96 && messageAsc < 123){
        fullWord = (((parseInt(messageAsc) - 97 + parseInt(desloc)) % 26) + 97)
      }
    
    //}
    //fullWord = (parseInt(messageAsc) + parseInt(desloc)) ;
    stringWord = String.fromCharCode(fullWord);       
    result = result + stringWord;
  }
return result;
}


function send(){
  let deslocamento = document.getElementById("deslocId").value;
  let message = document.getElementById("messageId").value;
  let result = encode(message, deslocamento);
  document.getElementById("msgCifrada").innerHTML = "Mensagem cifrada é " + result;
}


