function targetTerdekat(arr){
    var a = [];
    var b = [];
    var c = [];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'x'){
            a.push(i);
        }
    }

    for (var j = 0; j < arr.length; j++){
        if (arr[j] == 'o'){
            b.push(j);
        }
    }

    for (var d = 0; d < a.length; d++){
        for (var e = 0; e < b.length; e++){
            if(a[d] > b[e]){
                c.push(a[d] - b[e]);
            } else {
                c.push(b[e] - a[d]);
            }
        }
    }

    for (var cek1 = 0; cek1 <= a.length; cek1++){
        if (a.length === 0){
            c.push(0);
        }
    }

    for (var cek2 = 0; cek2 <= b.length; cek2++){
        if (b.length === 0){
            c.push(0);
        }
    }

    var sort = c.sort((a, b) => a - b);
    var hasil = c[0];
    return hasil;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2