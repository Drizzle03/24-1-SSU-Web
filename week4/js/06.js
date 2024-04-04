const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요. : ', function(score){
    let numScore = parseInt(score); // 문자열을 정수로 변환
    if(numScore >= 90 && numScore <= 100){
        console.log('장학대상입니다.');
    }
    else if(numScore >= 60 && numScore < 90){
        console.log('합격입니다.');
    }
    else if(numScore >= 0 && numScore < 60){
        console.log('불합격입니다.');
    }
    else{
        console.log('값이 유효하지 않습니다.');
    }
    rl.close();
});
