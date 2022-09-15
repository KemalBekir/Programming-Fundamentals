function solve(input) {
    let numStudents = Number(input[0]); //On the first line you are going to receive the count of the students
    let numLectures = Number(input[1]); //On the second line you are going to receive the count of the lectures
    let initialBonus = Number(input[2]); //On the third line you are going to receive the initial bonus
    let total = 0;
    let newMax = 0
    let studentAttendances = 0;

    for (let i = 3; i < input.length; i++) {
        // works without checking for wrong entries
        // if (numStudents === 0 || numLectures === 0 || initialBonus === 0) {
        //     break;
        // }
        //On the next lines, you will be receiving the attendances of each student
        let currentNum = Number(input[i]);
        //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
        total = (Math.ceil((currentNum) / (numLectures) * (5 + initialBonus)));
        if (total >= newMax) {
            newMax = total;
            studentAttendances = currentNum;
        }


        //"Max Bonus: {maxBonusPoints}."
        //"The student has attended {studentAttendances} lectures."
    }

    console.log(`Max Bonus: ${newMax}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);

}

// solve([ 
//     '5',    
//     '25',   
//     '30',   

//     '12',   
//     '19',
//     '24',   
//     '16',
//     '20'
// ])
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
solve([
    '10', '0', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
