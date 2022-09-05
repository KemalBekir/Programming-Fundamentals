function charactersInRange(a,b){
    let firstAsNum = a.charCodeAt(0);
    let secondAsNum = b.charCodeAt(0);

    let result = '';

    if(firstAsNum > secondAsNum){
        let first = secondAsNum;
        let second = firstAsNum;
        firstAsNum = first;
        secondAsNum = second;
    }

    for(let i = firstAsNum +1; i < secondAsNum; i++){
        result += String.fromCharCode(i) + " ";
    }
    console.log(result);
    
}

charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')