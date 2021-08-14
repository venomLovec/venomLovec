let money = +prompt ("Ваш бюджет на месяц?");
let time = +prompt ("Введите дату в формате YYYY-MM--DD");
let appData =  {
	budget: money,
	timeData: time,
	expenses: {
		firstQuestion: prompt("Введите обязательную статью расходов"),
		secondQuestion: +prompt("Во сколько обойдется?")
	},
	optionalExpenses: {},
	income: [],
	savings: false
};

alert("Ваш бюджет на один день:  " + 
	(money - appData.expenses.secondQuestion)/(30-time));