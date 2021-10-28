<<<<<<< HEAD
let startBtn = document.getElementById('start') //Начать расчет
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

let money, time

 
let appData =  {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: [],
	income: [],
	savings: false,
};
   
done1.setAttribute('disabled', true)
done1.style.background = '#c8c6c4'
done2.setAttribute('disabled', true)
done2.style.background = '#c8c6c4'
calculate.setAttribute('disabled', true)
calculate.style.background = '#c8c6c4'

checkSavings.setAttribute('disabled', true)

startBtn.addEventListener('click', ()=>{
    done1.removeAttribute('disabled')
    done1.style.background = '#ff964b'
    
    done2.removeAttribute('disabled')
    done2.style.background = '#ff964b'

    calculate.removeAttribute('disabled')
    calculate.style.background = '#ff964b'

    checkSavings.removeAttribute('disabled')
})

startBtn.addEventListener('click', ()=>{
    
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
}) //НАЧАТЬ РАСЧЕТ

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
}) //ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ

done2.addEventListener('click', ()=>{
    for(let i=0; i<optExpenses.length; i++){
            let opt1 = optExpenses[0].value
            let opt2 = optExpenses[1].value
            let opt3 = optExpenses[2].value
            appData.optionalExpenses[0] = opt1;
            appData.optionalExpenses[1] = opt2;
            appData.optionalExpenses[2] = opt3;
            optionalExpensesValue.innerHTML = appData.optionalExpenses[0] + ' ' + appData.optionalExpenses[1] + ' ' + appData.optionalExpenses[2] + ' ' 
        }
    
//    let sum = (optExpenses[0].value+", "+optExpenses[1].value+", "+ optExpenses[2].value)
//    optionalExpensesValue.textContent = sum
}) //НЕОБЯЗАТЕЛЬНЫЕ РАСХОДЫ

calculate.addEventListener('click', ()=>{
    
        appData.moneyPerDay = ((appData.budget - +expensesItem[1].value - +expensesItem[3].value) /30).toFixed(2);
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
    
}) //РАСЧЕТ ДНЕВНОГО БЮДЖЕТА

incomeItem.addEventListener('input', ()=>{
    let items = incomeItem.value
    appData.income = items.split(', ')
    incomeValue.textContent = appData.income
}) //СТАТЬИ ВОЗМОЖНОГО ДОХОДА

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false
    } else{appData.savings = true}
}) //ЧЕКБОКС "ЕСТЬ ЛИ НАКОПЛЕНИЯ"

sumValue.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +sumValue.value
        let persent = +percentValue.value
        
        appData.monthIncome = sum/100/12*persent
        appData.yearIncome = sum/100*persent

        monthSavingsValue.textContent = appData.monthIncome
        yearSavingsValue.textContent = appData.yearIncome
    }
}) //СУММА НАКОПЛЕНИЙ

percentValue.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +sumValue.value
        let persent = +percentValue.value
        
        appData.monthIncome = sum/100/12*persent
        appData.yearIncome = sum/100*persent

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2)
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2)
    }
}) //ПРОЦЕНТ ВКЛАДА












=======
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
>>>>>>> 124a6755cdcb613666b8d03933c45149523ab3f3



