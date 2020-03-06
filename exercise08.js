function pasanganTerbesar(num){
    var angka = '';
    var str = num.toString();
    for (var i = 0; i < str.length; i++){
        if (angka < str[i] + str[i+1]){
            angka = str[i] + str[i+1];
        }
    }
    angka = parseInt(angka);
    return angka;
}

console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293));