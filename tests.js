var result = encode("AB", 2);
if(encode("AB", 2) == "CD"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = encode("Zz", 2);
if(encode("Zz", 2) == "Bb"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = decode("AB", 2);
if(decode("AB", 2) == "YZ"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = decode("Zz", 2);
if(decode("Zz", 2) == "Xx"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}