function oddOccurrences(input){
    let occurrences = {};
    let list = input.split(' ');

    for(let string of list){
        let lowerCase = string.toLowerCase();
        if(!Object.keys(occurrences).includes(lowerCase)){
            occurrences[lowerCase] = 0;
        }
         occurrences[lowerCase] += 1;
    }

    let result = '';

    for(let [key,value] of Object.entries(occurrences)){

        if(value % 2 !== 0){
            result += `${key} `;
        }
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');