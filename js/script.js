const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

    const cloneArr = [...arr]
    
    const totalArr = []

    cloneArr.sort()

    cloneArr.reverse()

    // Определяем количество комманд
    let amountTeam = Math.floor(cloneArr.length / 3)

    // Создаём массивы и заполняем их и добавляем в конечный массив
    for (let i = 0; i < amountTeam; i++) {
        const interimArr = []
        for (let k = 0; k < 3; k++){
            interimArr.push(cloneArr.pop())
        }
        totalArr[i] = interimArr 
    }

    // Добавляем в конечный массив остальных игроков
    if (cloneArr.length % 3 === 0){
        totalArr.push(`Оставшиеся студенты: -`)
    } else {
        cloneArr.reverse()
        totalArr.push(`Оставшиеся студенты: ${cloneArr.join(", " )}`)
    }
    return totalArr
}

sortStudentsByGroups(students);


// arr = [1,2,4,5]
// arr2 = []
// arr2.push(arr.pop())

// console.log(arr);
// console.log(arr2)


