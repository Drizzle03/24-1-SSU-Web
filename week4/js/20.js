const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('정수를 입력하세요. : ',function(num){
    for(var i=1; i< 10; i++){
        console.log(dan + "*" + i + "=" + dan*i);
    }
    rl.close();
});