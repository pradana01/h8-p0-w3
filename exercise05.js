function palindrome(str){
    var kata1 = '';
    var kata2 = '';
    for (var i = 0; i <= str.length; i++){
        kata1 += str[i];
    }
    for (var j = str.length-1; j >= 0; j--){
        kata2 += str[j];
    }
    return kata1 === kata2 ? true : false;
}

console.log(palindrome('bukan palindrome'));