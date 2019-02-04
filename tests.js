var result = cipher.encode("AB", 2);
if(cipher.encode("AB", 2) == "CD"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = cipher.encode("Zz", 2);
if(cipher.encode("Zz", 2) == "Bb"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = cipher.decode("AB", 2);
if(cipher.decode("AB", 2) == "YZ"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = cipher.decode("Zz", 2);
if(cipher.decode("Zz", 2) == "Xx"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = cipher.encode("Zz", -2);
if(cipher.encode("Zz", -2) == "Xx"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}

var result = cipher.decode("Zz", -2);
if(cipher.decode("Zz", -2) == "Bb"){
console.log("Correto " + result);
} else {
    console.log("Errado")
}