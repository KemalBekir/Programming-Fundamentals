function receptions(input){
    let [e1,e2,e3, students] = input.map(Number);
    let qPh = e1 + e2 + e3;
    let hour = 0;

    while(students > 0){
        hour++;
         if(hour % 4 == 0){

         } else {
             students -= qPh;
         }
    }
    console.log(`Time needed: ${hour}h.`);
}   

receptions(['5','6','4','20'])
receptions(['1','2','3','45'])
receptions(['3','2','5','40'])