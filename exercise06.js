/*function angkaPalindrome(num){
    if (num < 9){
        num++;
    
    } else {
            var angka1 = '1';
            var angka2 = '3';
            var str = num.toString();
            while (angka1 !== angka2){    
                str = num.toString();
                angka1 = '';
                angka2 = '';
                for (var i = 0; i < str.length; i++){
                    angka1 += str[i];
                }
                for (var j = str.length - 1; j>= 0; j--){
                    angka2 += str[j]
                }
                num++;
            } 
        } 
    return num;
}*/

function angkaPalindrome(num){
    if (num < 9){
        num++
    } else {
        do {
            var angka1 = '';
            var angka2 = '';
            num++;
            var str = num.toString();

            for (var i = 0; i < str.length; i++){
                angka1 += str[i];
            }
            for (var j = str.length - 1; j >= 0; j--){
                angka2 += str[j];
            }
        } while (angka1 != angka2);
    }
    return num;
}
console.log(angkaPalindrome(30));