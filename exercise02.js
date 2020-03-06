var input = 'hello world!'
console.log(input.length);

function balikString(input){
    var str = '';
    for (var i = input.length - 1; i >= 0; i--){
        str += input[i];
    } return str
}

console.log(balikString(input));