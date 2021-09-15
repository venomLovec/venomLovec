let money, time;

function start () {
    money = parseInt(prompt("Ваш бюджет на месяц?", ""));
    time = prompt("Введите дату в формате YYYY-MM--DD", "");
    
    while (isNaN(money) || money == '' || money == null){
        console.log('ERROR');
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start();
 
let appData =  {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
    detectLevel: function() {
    if(appData.moneyPerDay <= 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000){
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay>=2000){
        console.log('Высокий уровень достатка');
    } else {
        console.log('ERROR');
    }
    }, //УРОВЕНЬ ДОСТАТКА
    detectDayBudjet: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        console.log("Ваш бюджет на один день:  " + appData.moneyPerDay + " BYN");     
    },//ДНЕВНОЙ БЮДЖЕТ
    chooseExpenses: function() {
        for(let i=0; i < 2; i++){
        let q1 = prompt("Введите обязательную статью расходов");
        let q2 = +prompt("Во сколько обойдется?");

        if(typeof(q1) == 'string' && typeof(q1) != null && 
           typeof(q2) != null && q1 != '' && q2 != '' && q1.length <=10){
            console.log('done');
            appData.expenses[q1] = q2;
        } else {
            console.log('error');
            i--;
        }
    }
    }, //РАСХОДЫ
    chooseOptExpenses: function() {
        for(let i=1; i<3; i++){
            let opt = prompt('Статья необязательных расходов', '');
            appData.optionalExpenses[i] = opt;
        }
    }, //НЕОБЯЗАТЕЛЬНЫЕ РАСХОДЫ
    checkSavings: function () {
        if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            persent = +prompt('Под какой процент?');
        
        appData.monthIncome = save/100/12*persent;
        console.log('Доход в месяц с вашего депозита '+ appData.monthIncome);
        alert('Доход в месяц с вашего депозита '+ appData.monthIncome);
    }
    }, //ДОХОД ОТ НАКОПЛЕНИЙ
    choseIncome: function(){let items = prompt('Что принесет доп. доход(перечисли через пробел)', '');
        appData.income = items.split(' ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
    }, //ДОПОЛНИТЕЛЬНЫЙ ДОХОД
};


