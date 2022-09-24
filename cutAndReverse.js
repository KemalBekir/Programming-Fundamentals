function cutAndReverse(input){
    let index = input.length / 2;
    let first = input.substring(0,index);
    let last = input.substring(index);
     
    console.log(first.split('').reverse().join(''));
    console.log(last.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')