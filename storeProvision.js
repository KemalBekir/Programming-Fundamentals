function storeProvision(stock, products) {
    let store = [];

    for (let i = 0; i < stock.length - 1; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        let stockObj = {
            product,
            quantity,
        }
        store.push(stockObj);
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);

        if (indexOfProduct === -1) {
            store.push(productObject)
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let item of store) {
        console.log(`${item.product} -> ${item.quantity}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])