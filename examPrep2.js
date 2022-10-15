function solve(input) {
    // username pattern /(U\$)(?<user>[A-Z][a-z]{2,})\1/g
    // password pattern /(P\@\$)(?<password>[A-z]{5,}[0-9]{1,})\1/g

    let userPattern = /(U\$)(?<user>[A-Z][a-z]{2,})\1/;
    let passPattern = /(P\@\$)(?<password>[A-z]{5,}[0-9]{1,})\1/;
    let n = Number(input.shift());
    let registered = 0;


    for (let line of input) {
        let userMatch = userPattern.exec(line);
        let passMatch = passPattern.exec(line);

        if (userMatch != null && passMatch != null) {
            let userName = userMatch.groups.user;
            let pass = passMatch.groups.password;
            registered++;
            console.log('Registration was successful');
            console.log(`Username: ${userName}, Password: ${pass}`);
        } else {
            console.log(`Invalid username or password`);
        }
    }
    console.log(`Successful registrations: ${registered}`);

}

solve(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"])
console.log('---------');
solve(["2",
    "U$TommyU$P@$asdqwe123P@$",
    "Sara 1232412"])
console.log('----------');
solve(["3",
    "U$myU$-->P@$asdqwe123P@$",
    "Sara 1232412",
    "U$NameU$P@$Pass234P@$"])