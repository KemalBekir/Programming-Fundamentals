function arrayModifier(input) {
    //On the first input line you will be given the initial
    // array values separated by a single space.
    let arr = input.shift().split(' ').map(Number);
    let container = 0;
    let num = input.length;
    //On the next lines you will receive commands until you receive the command “end”. 
    //The commands are as follow:
    for (let i = 0; i < num; i++) {
        let [action, index, range] = input[i].split(' ');
        index = Number(index);
        range = Number(range);
        if (action === "swap") {
            //    • “swap {index1} {index2}” take two elements and swap their places.
            container = arr[index];
            arr[index] = arr[range];
            arr[range] = container;
        } else if (action === "multiply") {
            //• “multiply {index1} {index2}” take element at the 1st index and
            // multiply it with element at 2nd index. Save the product at the 1st index.
            arr[index] *= arr[range];
        } else if (action === "decrease") {
            //• “decrease” decreases all elements in the array with 1.
            for (let j = 0; j < arr.length; j++) {
                arr[j] -= 1;
            }
        } else if (action === "End") {
            break;
        }
    }
    console.log(arr.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])