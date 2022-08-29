function triangle(n){
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += i + " ";
      }
      string += "\n";
    }
    console.log(string);
}

triangle(3)
triangle(5)
triangle(6)