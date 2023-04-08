const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {


       let totalArea = 0;
       
    //    Считаем площадь одного магазина и прибавляем в общую площадь
       data.shops.forEach(function(item, i){
        let dataShop = [];
        let areaShop = 0;
        for (let key in item){
            dataShop.push(item[key])
        }
        areaShop = dataShop[0] * dataShop[1];
        totalArea += areaShop
       });

    //    Расчитываем объем торгового центра
        let totalVolume = totalArea*data.height;
    
    //    Определяем хватит ли бюджета
        if (data.budget >= totalVolume*30){
            console.log('Бюджета достаточно');
            return 'Бюджета достаточно'
        } else {
            console.log('Бюджета недостаточно');
            return 'Бюджета недостаточно'
        }

};

isBudgetEnough(shoppingMallData)