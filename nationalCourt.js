function nationalCourt(input){
    let [e1,e2,e3,people] = input.map(Number);
    let ppH = e1 + e2 + e3;
    let hour = 0;

    while(people > 0){
        hour++;
        if(hour % 4 == 0){
            
        } else {
            people -= ppH;
        }
        
        
        
    }

    console.log(`Time needed: ${hour}h.`);
}

nationalCourt([ '5', '6', '4', '20' ])
nationalCourt([ '1', '2', '3', '45' ])
nationalCourt([ '3', '2', '5', '40' ])
nationalCourt([ '1', '0', '0', '0' ])