function hitungJumlahKata(kalimat){
    var kata = 0;
    for (var i = 0; i < kalimat.length; i++){
        if (kalimat[i] == ' '){
            kata += 1;
        } else if (i == kalimat.length-1){
            kata += 1;
        } else {
            kata += 0
        }
    }
    return kata;
}

console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never ear shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));