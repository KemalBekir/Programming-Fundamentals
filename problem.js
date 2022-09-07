function problem(input) {
    let qFood = Number(input[0]);
    let qHay = Number(input[1]);
    let qCover = Number(input[2]);
    let pig = Number(input[3]);
    let month = 30;

    let totalFood = qFood * 1000;
    let totalHay = qHay * 1000;
    let totalCover = qCover * 1000;
    let pigWeight = pig * 1000;


    for (let i = 1; i <= month; i++) {
        if (totalFood <= 0 || totalHay <= 0 || totalCover <= 0) {
            break;
        } else {
            totalFood -= 300;
            if (i % 2 === 0) {
                totalHay = totalHay - (totalFood * 0.05);
            }
            if (i % 3 === 0) {
                totalCover = (totalCover - (pigWeight / 3));
            }
        }
    }

    if (totalFood > 0 && totalHay > 0 && totalCover > 0) {
        totalFood = (totalFood / 1000);
        totalHay = (totalHay / 1000);
        totalCover = (totalCover / 1000);
        console.log(`Everything is fine! Puppy is happy! Food: ${totalFood.toFixed(2)}, Hay: ${totalHay.toFixed(2)}, Cover: ${totalCover.toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

problem(["10",
    "5",
    "5.2",
    "1"])
problem(["1",
    "1.5",
    "3",
    "1.5"
])
problem(["9",
    "5",
    "5.2",
    "1"])