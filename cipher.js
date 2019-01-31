
let cipher = {};

cipher.encode = (mensagem, desloc) => {
  let fullWord = "";
  let stringWord = "";
  let result = "";

  for(let i = 0; i < mensagem.length; i++){
  let messageAsc = mensagem.charCodeAt(i);
        
      if(parseInt(messageAsc)==32){
      fullWord = 32; 
      }
      if(messageAsc > 64 && messageAsc < 91){
        fullWord = (((parseInt(messageAsc) - 65 + desloc) % 26) + 65)
      }
      if(messageAsc > 96 && messageAsc < 123){
        fullWord = (((parseInt(messageAsc) - 97 + desloc) % 26) + 97)
      }    
    stringWord = String.fromCharCode(fullWord);       
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


cipher.decode = (mensagem, desloc) => {
  let fullWord = "";
  let teste = "";
  let stringWord = "";
  let result = "";

  for(let i = 0; i < mensagem.length; i++){
    let messageAsc = mensagem.charCodeAt(i);
    
      if(parseInt(messageAsc)==32){
      teste = 32; 
      }
      if(messageAsc > 64 && messageAsc < 91){
        fullWord = ((parseInt(messageAsc) - 90 - desloc) % 26) 
        teste = 90 + fullWord; 
      }
      if(messageAsc > 96 && messageAsc < 123){
        fullWord = ((parseInt(messageAsc) - 122 - desloc) % 26) //+ 97)
        teste = 122 + fullWord;
      } 
    stringWord = String.fromCharCode(teste);       
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