// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`
}

// Место для второй задачи
function returnNeighboringNumbers(a) {
    let arr = [];
    arr[0] = a - 1;
    arr[1] = a;
    arr[2] = a + 1;
    return arr;
};

// Место для третьей задачи
function getMathResult(x,y) {
    if (typeof(y) != Number && y != 0 && y > 0){
        let answer = x
        let promPeremenaia = x
        for (let i = 1; i < y; i++){
            answer += '---'
            answer += promPeremenaia + x
            promPeremenaia = promPeremenaia + x
        }
        return answer

        } else {
            return x
        }
}

