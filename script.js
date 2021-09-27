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















