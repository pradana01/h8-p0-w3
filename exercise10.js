function perkalianUnik(arr){
    var temp = 1;
    var ember = [];
    for (var i = 0; i < arr.length; i++){
        temp = 1;
        for (var j = 0; j < arr.length; j++){
            if (i != j){
                temp *= arr[j];
            } else {
                temp *= 1;
            }
        }
        ember.push(temp);
    }
    return ember;
}

console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]