let starnBtn = document.getElementById('start') //Начать расчет
let budgetValue = document.getElementsByClassName("budget-value")[0] 
budgetValue.innerHTML = '0'
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0]
let levelValue = document.getElementsByClassName("level-value")[0]
let expensesValue = document.getElementsByClassName("expenses-value")[0]
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0]
let incomeValue = document.getElementsByClassName("income-value")[0]
let monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0]
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0]

// Поля(input) c обязательными расходами
let expensesItem = document.querySelectorAll('.expenses-item');
//Кнопки “Утвердить” и “Рассчитать”  
let done1 = document.getElementsByTagName('button')[0]; 
let done2 = document.getElementsByTagName('button')[1];
let calculate = document.getElementsByTagName('button')[2]
//Поля для ввода необязательных расходов
let optExpenses = document.querySelectorAll('.optionalexpenses-item')
//Поля: статьи возможного дохода, чекбокс savings, сумма, процент, год, месяц, день)
let incomeItem = document.querySelector('.choose-income')
let checkSavings = document.querySelector('#savings')
let sumValue = document.querySelector('.choose-sum')
let percentValue = document.querySelector('.choose-percent')
let yearValue = document.querySelector('.year-value')
let monthValue = document.querySelector('.month-value')
let dayValue= document.querySelector('.day-value')

let money, time;

 
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

starnBtn.addEventListener('click', ()=>{
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = parseInt(prompt("Ваш бюджет на месяц?", ""));
    
    while (isNaN(money) || money == '' || money == null){
        alert('ERROR INPUT');
        money = +prompt ("Ваш бюджет?", "");
    }
    appData.budget = money
    budgetValue.innerHTML = money
    
    while(new Date(Date.parse(time)).getFullYear() != new Date().getFullYear() || 
          new Date(Date.parse(time)).getMonth() != new Date().getMonth() || 
          new Date(Date.parse(time)).getDate() != new Date().getDate() )
    {
        alert('WRONG DATE! , NOW -  ' + new Date() +', TRY AGAIN') 
        time = prompt("Введите дату в формате YYYY-MM-DD", "")
    }

    appData.timeData = time    
    yearValue.value = new Date(Date.parse(time)).getFullYear()
    monthValue.value = new Date(Date.parse(time)).getMonth()+1
    dayValue.value = new Date(Date.parse(time)).getDate()
})

done1.addEventListener('click', ()=>{
    
    let summ = 0

    for(let i=0; i < expensesItem.length; i++){
            let q1 = expensesItem[i].value
            let q2 = expensesItem[++i].value
            
            if(q1 != '' && q2 != '' && q1.length < 15){
                console.log('done')
                appData.expenses[q1] = q2
                summ += +q2;
                expensesValue.textContent = summ
            } else {
                console.log('error')
            }
        }
})

done2.addEventListener('click', ()=>{
    for(let i=0; i<optExpenses.length; i++){
            let opt = optExpenses[i].value
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.innerHTML += appData.optionalExpenses[i] + ' '
        }
    
//    let sum = (optExpenses[0].value+", "+optExpenses[1].value+", "+ optExpenses[2].value)
//    optionalExpensesValue.textContent = sum
})

calculate.addEventListener('click', ()=>{
    if (budgetValue.innerHTML == '0') {
        alert('Сначала нажмите кнопку "НАЧАТЬ РАСЧЕТ"')
    } else {
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        dayBudgetValue.innerHTML = appData.moneyPerDay
        
        let moneyPerDay = (appData.budget/30).toFixed(2)
        
        function  detectLevelIncome () {
            if(moneyPerDay <= 100) {
                return ('Минимальный уровень достатка');
            } else if (moneyPerDay >100 && moneyPerDay <2000){
                return ('Средний уровень достатка');
            } else if (moneyPerDay>=2000){
                return ('Высокий уровень достатка');
            } else {
                console.log('ERROR');
            }
        } 

        levelValue.innerHTML = detectLevelIncome()
    }
})

incomeItem.addEventListener('input', ()=>{
    let items = incomeItem.value
    appData.income = items.split(', ')
    incomeValue.textContent = appData.income
})

















