function inventory(input) {
    //checking items in inventory
    let collection = input.shift().split(', ');
    let list = input.length;
    //check for items until getting command Craft!
    for(let i = 0; i < list; i++){
        let index = 0;
        let [command, material] = input[i].split(' - ');
        // "Collect - {item}" – Receiving this command, 
        // you should add the given item in your inventory.
        // If the item already exists, you should skip this line.
        if(command === "Collect"){
           if(!collection.includes(material)){
               collection.push(material);
           } 
        } else if (command === "Drop"){
            //"Drop - {item}" – You should remove the item from your inventory, if it exists.
            if(collection.includes(material)){
                index = collection.indexOf(material);
                collection.splice(index, 1);
            }
        } else if (command === "Combine Items"){
            //"Combine Items - {oldItem}:{newItem}" – You should check if the old item exists, 
            //if so, add the new item after the old one. Otherwise, ignore the command.
            let [oldItem, newItem] = material.split(':');
            if(collection.includes(oldItem)){
                index = collection.indexOf(oldItem);
                collection.splice(index + 1 , 0, newItem);
            }
        } else if (command === "Renew"){
            //"Renew – {item}" – If the given item exists, 
            //you should change its position and put it last in your inventory.
            if(collection.includes(material)){
                index = collection.indexOf(material);
                collection.splice(index, 1);
                collection.push(material);
            }
        } else if (command === "Craft!"){
            //output After receiving "Craft!" print the items in your inventory, separated by ", "
            console.log(collection.join(', '));
        }
    }
    
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold', 'Drop - Wood',
    'Craft!'])
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])