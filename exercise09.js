function cariMean(arr){
    var char = [];
    for (var i = 0; i < arr.length; i++){
        char.push(arr[i]);
    }
    var temp = 0
    for (var j = 0; j < arr.length; j++){
        temp += char[j];
    }
    var hasil = temp / char.length;
    var pembulatanHasil= Math.round(hasil);
    return pembulatanHasil;
}

console.log(cariMean([1, 2, 3, 4, 5]));
console.log(cariMean([3, 5, 7, 5, 3]));
console.log(cariMean([6, 5, 4, 7, 3]));
console.log(cariMean([1, 3, 3]));
console.log(cariMean([7, 7, 7, 7, 7]));