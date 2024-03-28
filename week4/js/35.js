var dan = 2;
outside : while(dan < 10){
    var num
    while(num < 10){
        if(dan == 6 && num == 1)
            break outside;
        console.log(dan+'*'+num+'='+(dan*num));
        num++;
    }
    dan++;
}