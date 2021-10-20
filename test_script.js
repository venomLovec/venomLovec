//----------------------------------------------------------------------------
//ВЫВОДИМ ПОВТОРЯЮЩИЕСЯ ЭЛЕМЕНТЫ ИЗ ДВУХ МАССИВОВ
//const first = [1, 2, 3, 4, 7, 10 ]
//const second = [10, 3, 4, 5, 6, 2, 1, 7]
//
//
//function intersetion (a, b) {
//    let third = []
//    let compare
//    if(first.length > second.length){
//        compare = first.length
//        console.log(compare)
//    }
//    else{
//        compare = second.length
//        console.log(compare)
//    }
//    for(let i=0; i<compare; i++){
//        for(let j=0; j<compare; j++) {
//        if(first[j] == second[i]){third.push(second[i])}
//        }
//    }
//    console.log(third)
//}
//intersetion(first, second)  //->[3, 4]
//-----------------------------------------------------------------------
//ДЕЛАЕМ ТАК, ЧТО ПРИ НАЖАТИИ КНОПКИ КНОПКА ИСЧЕЗАЕТ, А НА ЕЁ МЕСТЕ ПОЯВЛЯЮТСЯ ДВЕ НОВЫЕ
//let a = document.getElementById('circle')
//a.addEventListener('click', ()=>{
//    //a.setAttribute('disabled', true) //CДЕЛАЕТ КНОПКУ НЕ АКТИВНОЙ
//    //a.style.display = 'none' //СКРОЕТ КНОПКУ
//    document.body.removeChild(a) //УДАЛИТ КНОПКУ
//    let b = document.createElement('button') //СОЗДАЛИ НОВУЮ КНОПКУ
//    b.innerHTML = 'button5'
//    let c = document.createElement('button') //СОЗДАЛИ НОВУЮ КНОПКУ
//    c.textContent = 'button6'
//    c.style.marginLeft = '5px'
//    document.body.appendChild(b) //ДОБАВИЛИ КНОПКУ В БОДИ
//    document.body.appendChild(c) //ДОБАВИЛИ КНОПКУ В БОДИ
//})
//---------------------------------------------------------------------------
//Создать функцию, кот. б. возвращать разрешение файла
//function start(a){
//    let b = a.split('.')
//    if(b.length == 1) {alert('error inpput')}
//    else {
//        console.log(b)
//        return(b[1])
//    }
//}
//start('film.avi')
//-----------------------------------------------------------------------
//МОДАЛЬНОЕ ОКНО ПО СРЕДИ ЭКРАНА С ИНТЕРВАЛОМ В 3 сек
//let frame = document.querySelector('.frame')
//let close = document.querySelector('.bottom')
//let content = document.querySelector('.content')
//
//close.addEventListener('mouseover', ()=>{close.style.cursor = 'pointer'})
////close.addEventListener('click', ()=>{document.body.removeChild(frame)}) //удаляет frame
//close.addEventListener('click', ()=>{frame.style.visibility = 'hidden'}) //Элемент не отображается, но его место никто не займет
//
//console.log(frame)
//console.log(close)
//console.log(content)
//
//function modal(){
//    //frame.style.display = 'inline-block'
//    frame.style.visibility = 'visible'
//}
//
//setInterval(modal, 3000)
//-----------------------------------------------------------------------
//let square = document.createElement('div')
//square.style.width = '50px'
//square.style.height = '50px'
//square.style.backgroundColor = 'blue'
//let box = document.querySelector('div')
//box.appendChild(square)
//let btn = document.querySelector('#btn_start')
//
//console.log(box, square, btn)
//
//function myAnimation(){
//    let pos = 0
//    
//    let id = setInterval(frame, 10)
//    function frame(){
//        if(pos == 300) {
//            clearInterval(id) 
//        } else{
//            pos++
//            square.style.left = pos + 'px'
//            square.style.top = pos + 'px'
//        }
//    }
//}
//btn.addEventListener('click', myAnimation)
//---------------------------------------------------------------------------
//Пишем простую линейную анимацию, когда мячь двигается из одного угла в другой 
//<body>
//    <div class="frame">
//        <button class="btn"></button>
//    </div>
//    <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi nesciunt, non qui corporis repellat veritatis odio sed quasi quos vel incidunt, eligendi iste ex fuga illum aliquam sequi id cumque atque. Rerum aspernatur temporibus mollitia, non tempora voluptas voluptatum enim! Officiis voluptates omnis facere numquam illo ullam, rem fugiat. Dignissimos impedit repudiandae incidunt. Asperiores?</div>
//    <style>
//        .btn{
//            position: absolute;
//            width: 40px;
//            height: 40px;
//            border-radius: 50%;
//            background-color:crimson;
//            cursor: pointer;
//        }
//        .frame{
//            position: relative;
//            width: 400px;
//            height: 400px;
//            background-color: antiquewhite;
//            margin: 0 auto;
///*            visibility: hidden;*/
///*            display: none;*/
//        }
//    </style>
//    <script src="test_script.js"></script>
//</body>
// НЕПОСРЕДСТВЕННО САМ SCRIPT:
//let ball = document.querySelector('.btn')
//let frame = document.querySelector('.frame')
//let position = 0
//
//function func(){
//    if (position == 360){
//        clearInterval(func)
//    } else{
//    position++; console.log(position)
//    ball.style.top = position+'px'
//    ball.style.left = position+'px'
//    }
//}
//
// ball.addEventListener('click', ()=>{
//        setInterval(func, 10)
//    })
//----------------------------------------------------------------------

let btnBlock = document.querySelector('.btn-block')
let btns = document.getElementsByTagName('button')
//btnBlock.addEventListener('click', (event)=>{
//    if (event.target && event.target.matches('button')){
//        console.log(1)
//    }
//})
btnBlock.addEventListener('click', (event)=>{
    if(event.target.classList.contains('first')){
        console.log(1)
    } else if(this) {console.log(2)}
})

























