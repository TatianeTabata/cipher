
let cipher = {};

cipher.encode = (mensagem, offset) => {
  let stringWord = "";
  let result = "";
  for (let i in mensagem) {
    let messageAsc = mensagem.charCodeAt(i);
    messageAsc = parseInt(messageAsc)
    while (offset < 0) {
      offset += 26;
    }
    if (messageAsc > 64 && messageAsc < 91) {
      messageAsc = 65 + (((messageAsc - 65) + offset) % 26)
    } else if (messageAsc > 96 && messageAsc < 123) {
      messageAsc = (((messageAsc - 97) + offset) % 26) + 97
    } else {
      messageAsc === 32
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
  document.getElementById("msgEncoded").innerHTML = result;
}

cipher.decode = (mensagem, offset) => {
  let stringWord = "";
  let result = "";
  for (let i in mensagem) {
    let messageAsc = mensagem.charCodeAt(i);
    messageAsc = parseInt(messageAsc);
    while (offset < 0) {
      offset += 26;
    }
    if (messageAsc > 64 && messageAsc < 91) {
      messageAsc = 90 + ((messageAsc - 90 - offset) % 26)
    }
    else if (messageAsc > 96 && messageAsc < 123) {
      messageAsc = 122 + ((messageAsc - 122 - offset) % 26)
    } else {
      messageAsc === 32;
    }
    stringWord = String.fromCharCode(messageAsc);
    result += stringWord;
  }
  return result;
}

function send2() {
  let deslocamento = document.getElementById("deslocId2").value;
  deslocamento = parseInt(deslocamento);
  let message = document.getElementById("messageIdDecifra").value;
  let result = cipher.decode(message, deslocamento);
  document.getElementById("msgDecoded").innerHTML = result;
}