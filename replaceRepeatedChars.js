function replaceRepeatedChars(input){
    let result = '';
    for(let i = 0; i < input.length; i++){
        let current = input[i];
       if(current != input[i+1]){
           result += current;
       }
    }
    console.log(result);
}

replaceRepeatedChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatedChars('qqqwerqwecccwd')