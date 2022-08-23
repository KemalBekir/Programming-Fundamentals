function spiceMustFlow(yield){
    let day = 0;
    let result = 0;

    while(yield >= 100){
        result = result +(yield - 26);
        yield = yield - 10;
        day++;
    }
    result = result - 26;
    if(result < 0){
        result = 0;
    }
    console.log(day);
    console.log(result);   
}
//11 1338    36 8938

spiceMustFlow(111)
spiceMustFlow(450)
spiceMustFlow(200)