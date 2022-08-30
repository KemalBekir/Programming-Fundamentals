function vacation(number , groupType , day){
    let totalPrice = 0;
    
    if(groupType === "Business" && number >= 100){
        number -= 10;
    }

    if(groupType === "Students" && day === "Friday"){
        totalPrice = 8.45 * number;     
       
    } else if(groupType === "Business" && day === "Friday"){
        totalPrice = 10.9 * number;
    } else if (groupType === "Regular" && day === "Friday"){
        totalPrice = 15 * number;
    } else if (groupType === "Students" && day === "Saturday"){
        totalPrice = 9.8 * number;
    }  else if(groupType === "Business" && day === "Saturday"){
        totalPrice = 15.6 * number;
    } else if (groupType === "Regular" && day === "Saturday"){
        totalPrice = 20 * number;
    }else if (groupType === "Students" && day === "Sunday"){
        totalPrice = 10.46 * number;
    }  else if(groupType === "Business" && day === "Sunday"){
        totalPrice = 16 * number;
    } else if (groupType === "Regular" && day === "Sunday"){
        totalPrice = 22.50 * number;
    }

    if(groupType === "Students" && number >= 30){
      totalPrice = totalPrice * 0.85;
    } else if (groupType === "Regular" && number >= 10 && number <= 20){
        totalPrice = totalPrice * 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")
