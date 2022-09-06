function problem(input){
    let phoneList = input.shift().split(', ');
    let list = input.length;

    for(let i = 0; i < list; i++){
        let index = 0;
        let [command,phone] = input[i].split(' - ');
        
        if(command === "Add"){
            if(!phoneList.includes(phone)){
                phoneList.push(phone);
            }
        } else if (command === "Remove"){
            if(phoneList.includes(phone)){
                index = phoneList.indexOf(phone);
                phoneList.splice(index, 1);
            }
        } else if (command === "Bonus phone"){
            let [oldPhone, newPhone] = phone.split(":");
            if(phoneList.includes(oldPhone)){
                index = phoneList.indexOf(oldPhone);
                phoneList.splice(index + 1, 0 ,newPhone);
            }
        } else if(command === "Last"){
            if(phoneList.includes(phone)){
                index = phoneList.indexOf(phone);
                phoneList.splice(index,1);
                phoneList.push(phone);
            }
        } else if(command === "End"){
            console.log(phoneList.join(", "));
        }
    }
    

}
problem(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])
problem(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"Last - HuaweiP10",
"End"])