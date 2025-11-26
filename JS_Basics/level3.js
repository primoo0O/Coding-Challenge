let rows = 5;
let pattern = "";

for (let i = 0; i <= rows; i++){
    for (let j = 0; j < i; j++){
        pattern += i;
    }
    pattern += "\n";
}

console.log(pattern);