function deserializeString(input) {
    let result = [];
    let positions = [];
    let max = 0;


    for (let char of input) {
        let [current, index] = char.split(':');
        if (current != 'end') {
            index = index.split('/');
            positions = positions.concat(index);
            max = Math.max(...positions);
            for(let i = 0; i < max; i++){
                result.push('0');
            }
            for (let idx of index) {
                idx = Number(idx);
                result.splice(idx, 1, current);
            }
        }
    }
    
    console.log(result.join('').substring(0,Math.max(...positions) + 1));
}

//avjavamsdmcalsdm
//avjavamsdmcalsdm
deserializeString([ 'a:0/2/4/6', 'b:1/3/5', 'end' ])
deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
])