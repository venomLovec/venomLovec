let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == null || money == ''){
         money = +prompt("Ваш бюджет на месяц?");
    }
}
//start()

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    choseExpenses: function () { 
        let i = 0, a, b
        do { 
            a = prompt('Введите обязательную статью расходов')
            b = +prompt('Во сколько это обойдется')
            i = ++i
            switch (true) {
            case (a.length > 5 || b.toString().length > 5):
                alert('only 5 symbols')
                i=i-1
                break
            case (a == '' || a == null || isNaN(a) == false):
                alert('wrong inupt, please enter "the required expence item" correctly')
                i=i-1
                break
            case (isNaN(b) == true || b == ''):
                alert('wrong input, please enter "how much will it cost" correctly')
                i=i-1
                break
            default:
                alert('good boy')
                appData.expenses[a]=b
                break
            }
        } while (i < 2)
        console.log(appData.expenses)
    }, //ОБЯЗАТЕЛЫЕ СТАТЬИ РАСХОДОВ
    detectLevel: function(){ 
        appData.moneyPerDay = +((appData.budget/30).toFixed(2))
        if(appData.moneyPerDay <100) {
            console.log('Низкий уровень достатка '+ appData.moneyPerDay)
        } else if (appData.moneyPerDay>100 && appData.budget/30<2000){
            console.log('Средний уровень достатка ' + appData.moneyPerDay)
        } else if(appData.moneyPerDay >= 2000){
            console.log('Высокий уровень достатка ' + appData.moneyPerDay)
        } else {
            console.log('ERROR')
        }  
    }, //РАСЧЕТ УРОВНЯ ДОСТАТКА
    checkSavings: function(){ //ПРОВЕРКА НАКОПЛЕНИЙ(ВКЛАДОВ)
        if(appData.savings == true) {
            let save =+prompt('Какова сумма вклада?', '10000')
            let persent =+prompt('Под какой процент?', '16')
            let month = +prompt('На какой срок? (в месяцх)', '12')
            appData.monthIncome = +(((save*persent)/100/month).toFixed(1))
            alert('Ежемесячный доход от вашего вклада: '+ appData.monthIncome)
            console.log('Ежемесячный доход от вашего вклада: '+ appData.monthIncome)
        }
    }, //ПРОВЕРКА НАКОПЛЕНИЙ(ВКЛАДОВ)
    detectDayBudjet: function(){ //РАСЧЕТ ДНЕВНОГО БЮДЖЕТА
        appData.dayBudjet = appData.budget/30;
        console.log('Дневной бюджет: ' + (appData.dayBudjet).toFixed() + ' BYN')
        alert('Дневной бюджет: ' + (appData.dayBudjet).toFixed() + ' BYN')
    }, //РАСЧЕТ ДНЕВНОГО БЮДЖЕТА
    chooseOptExpenses: function(){ //ДОПОЛНИТЕЛЬЫНЕ РАСХОДЫ
        for(i=0; i<3; i++){
        let a=prompt('Статья необязательных расходов?', '')
        appData.optionalExpenses[i]=a
    }
        console.log(appData.optionalExpenses)
    }, //ДОПОЛНИТЕЛЬЫНЕ РАСХОДЫ
    chooseIncome: function (){
        
        let optIncome = prompt('Через запятую введите источники ваших дополнительных доходов', '');
        
        for(let i=0; i<1; i++){
            if(     optIncome == '' || optIncome == null       || optIncome.includes('0') || optIncome.includes('1') || optIncome.includes('2') || optIncome.includes('3') || optIncome.includes('4') || optIncome.includes('5') || optIncome.includes('6') || optIncome.includes('7') || optIncome.includes('8') || optIncome.includes('9')  ) {
                alert('try again');
                optIncome = prompt('Через запятую введите источники ваших дополнительных доходов', '')
                console.log("optIncome: " + optIncome);
                i--;
            } else { console.log('all right')}
        }
        
        appData.income = optIncome.split(', ');
        
        appData.income.push(prompt('Может что-то ещё?')); 
        appData.income.sort();
        console.log('!!! - '+optIncome);
        console.log('appData.income: '+ appData.income);
        
        appData.income.forEach( item => alert(`Способы доп. заработка:` + optIncome) )
         
        for(let key in appData) {
            console.log("Наша программа включает в себя данные: " + appData[key]);
        }
            
    }, //ИСТОЧНИКИ ПРИБЫЛИ
}



