
let cipher = {};

cipher.encode = (mensagem, offset) => {
  let stringWord = "";
  let result = "";
 
  for(let i in mensagem) {
  let messageAsc = mensagem.charCodeAt(i);
        
      if(offset <0) {  
        if(messageAsc > 64 && messageAsc < 91) {
          messageAsc = 90 + ((((parseInt(messageAsc) - 90) + offset) % 26))
        }
        if(messageAsc > 96 && messageAsc < 123){
          messageAsc = 122 + ((((parseInt(messageAsc) - 122) + offset) % 26))
      }  
    }else 
      
      if(offset > 0) {
        if(parseInt(messageAsc)==32){
          messageAsc = 32; 
      }
        if(messageAsc > 64 && messageAsc < 91){
          messageAsc = (((parseInt(messageAsc) - 65 + offset) % 26) + 65)
      }
        if(messageAsc > 96 && messageAsc < 123){
          messageAsc = (((parseInt(messageAsc) - 97 + offset) % 26) + 97)
      }    
    }
  
    stringWord = String.fromCharCode(messageAsc);    
    result += stringWord;
  }
return result;
}



let send1 = () => {
  let deslocamento = document.getElementById("deslocId1").value;
  deslocamento = parseInt(deslocamento);
  let message = document.getElementById("messageId").value;
  let result = cipher.encode(message, deslocamento);
  document.getElementById("msgCifrada").innerHTML = "Mensagem cifrada é:  " + "<br />" + result;
}


cipher.decode = (mensagem, offset) => {
  let stringWord = "";
  let result = "";

  if(offset < 0){
    offset = offset*-1;
  }

  for(let i in mensagem) { 
    let messageAsc = mensagem.charCodeAt(i);
    
      if(parseInt(messageAsc)==32){
        messageAsc = 32; 
      }
      if(messageAsc > 64 && messageAsc < 91){
        messageAsc = 90 + (((parseInt(messageAsc) - 90 - offset) % 26))  
      }
      if(messageAsc > 96 && messageAsc < 123){
        messageAsc = 122 + (((parseInt(messageAsc) - 122 - offset) % 26))
      } 
    stringWord = String.fromCharCode(messageAsc);       
    result += stringWord;
  }
return result;
}


function send2(){
  let deslocamento = document.getElementById("deslocId2").value;
  deslocamento = parseInt(deslocamento);
  let message = document.getElementById("messageIdDecifra").value;
  let result = cipher.decode(message, deslocamento);
  document.getElementById("msgDecifrada").innerHTML = "Mensagem cifrada é: " + "<br />" + result;
}