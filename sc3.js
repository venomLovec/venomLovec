//
//function camelize(str) {
//  return str
//    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//    .map(
//      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//    )
//    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//}
//camelize('background-color')


//let arr = [1, 2];
//
//let arrayLike = {
//    0: "что-то",
//    1: "ещё",
//    2: "any",
//  [Symbol.isConcatSpreadable]: 1,
//  length: 4
//};
//console.log(arr.concat(arrayLike))

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».То есть дефисы удаляются, а все слова после них получают заглавную букву.
// camelize("background-color") == 'backgroundColor'

//function camelize(str){
//    let a = str.split('-'); console.log(a);
////    a.forEach(function(item) {
//        alert(`${index}`)
//    })    
//    let a = str.join('');
//    return a;
//}
//camelize('background-color')
//console.log(camelize('background-color'))

//let arr = ['uno', 'dos', 'tres']
//arr.forEach(function(index, item, array, callback){
//    console.log(index.toUpperCase() + item + array);
//    callback
//})
//function call (){
//    arr[0].split('/')
//    console.log(arr)
//}
//console.log(arr, call)

//function camelaze (str){
//    let arr = str.split('-'); console.log(arr);
//    let b = arr.map((word, index)=>index==0 ? word : word[0].toUpperCase() + word.slice(1)); console.log(b);
//    let c = b.join(''); console.log(c);
//}
//camelaze('ivan-den-oleg');

//let arr = [5, 3, 8, 1];
//
//function filterRangeInPlace (arr, a, b) {
//    let arr2 = arr.filter( item => item>=a && item<=b ); 
//    console.log(arr2);
//}
//filterRangeInPlace(arr, 1, 7)


//let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => {if (a<b) return 1; 
//                    if (a==b) return 0; 
//                    if (a>b) return -1;
//                   }
//         )
//alert( arr ); // 8, 5, 2, 1, -10

//let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => b-a);
//console.log( arr ); 

//let arr = [ 1, 3, 2, -4, 44, 10, 15 ];
//
//arr.sort((a, b) => a - b);
//
//console.log(arr); 


//let arr = ["HTML", "JavaScript", "CSS"];
//
//let sorted = copySorted(arr);
//
//function copySorted(arr){
//    return arr.slice().sort();
//}
//
//console.log(sorted)
//console.log(arr)

//let str1 = '2 ** 2'; 
//let arr1 = str1.split(' ').map((number, index)=> index==1 ? number : parseInt(number)); 
//
//function summCheck() {
//if(arr1[1]=='+') {let summ1 = arr1[0] + arr1[2]; console.log(summ1)}
//else if(arr1[1]=='-') {let summ2 = arr1[0] - arr1[2]; console.log(summ2)}
//else if(arr1[1]=='**') {let summ3 = Math.pow(arr1[0], arr1[2]); console.log(summ3)}
//else {console.log('ERROR')}
//}
//summCheck();
//
//console.log(arr1);
//
//
//function addMethod(name, func) {
//    
//}
document.write(' При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome) Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome')

let appData = {
chooseIncome: function(){
let optIncome = prompt('Через пробел введите источники ваших дополнительных доходов', '');

    for(let i=0; i<1; i++){
        if(     optIncome == '' || optIncome == null       || optIncome.includes('0') || optIncome.includes('1') || optIncome.includes('2') || optIncome.includes('3') || optIncome.includes('4') || optIncome.includes('5') || optIncome.includes('6') || optIncome.includes('7') || optIncome.includes('8') || optIncome.includes('9')  ) {
            alert('try again');
            optIncome = prompt('Через пробел введите источники ваших дополнительных доходов', '')
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
}
}
//let a = ['d', 'a', 'c', 'b'];
//a.push('e');
//a.sort();
//
//a.forEach((item, index)=> console.log("Способы доп. заработка: "+ item+ ' на позиции '+ ++index + ';'))
//
//let b = prompt('any').split(' ');
//b.push(prompt('any2'));
//b.sort();
//console.log(b);






































