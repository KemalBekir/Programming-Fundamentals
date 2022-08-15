function sortArrayBy2Criteria(input){
    input.sort(function(a, b) {
        let first = a.length - b.length;
        let second = a.localeCompare(b);
        
        return first || second;
      });
      console.log(input.join('\n'));
}

sortArrayBy2Criteria(["gamma","beta","alpha"])
//sortArrayBy2Criteria(["alpha", "beta", "gamma"])
//sortArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
//sortArrayBy2Criteria(["Deny" ,"omen","test","Default"])