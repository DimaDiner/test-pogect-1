const lines = 6;
let result = '';
let probel = 5;

for (let i = 1; i<10; i++) {
    if (i%2 == 0){
         continue;
    }
    for (let k = 0; k < probel; k++){
        result+=' '
    };
    for (let j = 0; j < i; j++){
        result += '*'}
    result += `\n`;
    probel --;
}

console.log(result);    