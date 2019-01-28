
function encode(mensagem, desloc){
  let fullWord = "";
  let stringWord = "";
  let result = "";

  for(var i = 0; i < mensagem.length; i++){
    let messageAsc = mensagem.charCodeAt(i);
        
      if(parseInt(messageAsc)==32){
      fullWord = 32; 
      console.log(messageAsc)
      }
      if(messageAsc > 64 && messageAsc < 91){
        fullWord = (((parseInt(messageAsc) - 65 + parseInt(desloc)) % 26) + 65)
      }
      if(messageAsc > 96 && messageAsc < 123){
        fullWord = (((parseInt(messageAsc) - 97 + parseInt(desloc)) % 26) + 97)
      }    
    stringWord = String.fromCharCode(fullWord);       
    result = result + stringWord;
  }
return result;
}


function send1(){
  let deslocamento = document.getElementById("deslocId1").value;
  let message = document.getElementById("messageId").value;
  let result = encode(message, deslocamento);
  document.getElementById("msgCifrada").innerHTML = "Mensagem cifrada é " + result;
}


function decode(mensagem, desloc){
  let fullWord = "";
  let teste = "";
  let stringWord = "";
  let result = "";

  for(var i = 0; i < mensagem.length; i++){
    let messageAsc = mensagem.charCodeAt(i);
    
      if(parseInt(messageAsc)==32){
      teste = 32; 
      console.log(messageAsc)
      }
      if(messageAsc > 64 && messageAsc < 91){
        fullWord = ((parseInt(messageAsc) - 90 - parseInt(desloc)) % 26) //+ 90)
        teste = 90 + fullWord; 
      }
      if(messageAsc > 96 && messageAsc < 123){
        fullWord = ((parseInt(messageAsc) - 122 - parseInt(desloc)) % 26) //+ 97)
        teste = 122 + fullWord;
      } 
    stringWord = String.fromCharCode(teste);       
    result = result + stringWord;
  }
return result;
}


function send2(){
  let deslocamento = document.getElementById("deslocId2").value;
  let message = document.getElementById("messageIdDecifra").value;
  let result = decode(message, deslocamento);
  document.getElementById("msgDecifrada").innerHTML = "Mensagem cifrada é " + result;
}