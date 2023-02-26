// Место для первой задачи
function firstTask() {
	// Пишем решение вот тут
	for (let i = 5; i < 11; i++){
		console.log(i);
	}
    
}

// Место для второй задачи
function secondTask() {
	// Пишем решение вот тут
	for (let j = 20; j>9; j--){
		if(j===13){
			break;
		}
		console.log(j);
	}
    
}

// Место для третьей задачи
function thirdTask() {
	// Пишем решение вот тут
	function thirdTask() {
	// Пишем решение вот тут
		for (let k = 2; k < 11; k++){
			if (k % 2 === 0 ){
				console.log(k);
			}
		} 
    
	}
	thirdTask();
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	// Пишем решение вот тут
	let x = 2;
	while (x <= 15){
		x++;
		if (x%2 !==0){
			console.log(x);
		}
	}
    
}

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	let x = 0;
	for (let i = 5; i < 11; i++){
		arrayOfNumbers[x]=i;
		x++;
	}
    
	// Не трогаем
	return arrayOfNumbers;
}