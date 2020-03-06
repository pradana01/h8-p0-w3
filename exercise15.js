function groupAnimals(arr){
    var hewanBaru = [];
    for (var i = 0; i < arr.length; i++){
        var cek = false;
        for (var j = 0; j < hewanBaru.length; j++){
            if (arr[i][0] === hewanBaru[j][0][0]){
                hewanBaru[j].push(arr[i]);
                cek = true;
            }
        }
        if (!cek){
            hewanBaru.push([arr[i]]);
        }
    }
    for (var k = 0; k < hewanBaru.length; k++){
        for (var l = 0; l < hewanBaru.length-1; l++){
            if (hewanBaru[l][0][0] > hewanBaru[l+1][0][0]){
                var temp = hewanBaru[l];
                hewanBaru[l] = hewanBaru[l+1];
                hewanBaru[l+1] = temp;
            }
        }
    }
    return hewanBaru;

}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));