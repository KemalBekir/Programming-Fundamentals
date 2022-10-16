function solve(input) {
    let numCities = Number(input.shift());
    let count = 0
    let result = 0;

    let totalProfit = 0;

    for (let i = 1; i <= numCities; i++) {
        let name = input.shift();
        let income = Number(input.shift());
        let expenses = Number(input.shift());

        if (i % 3 == 0 && i % 5 == 0) {
            result = (income * 0.9) - expenses;
            totalProfit += result;
        } else if (i % 3 == 0) {
            result = income - (expenses * 1.5);
            totalProfit += result;
        } else if (i % 5 == 0) {
            result = (income * 0.9) - expenses;
            totalProfit += result;
        } else {
            result = income - expenses;
            totalProfit = totalProfit + result;
        }
        console.log(`In ${name} Burger Bus earned ${result.toFixed(2)} leva.`);

    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}
solve((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]))
console.log('-------');
solve(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
console.log('--------');

