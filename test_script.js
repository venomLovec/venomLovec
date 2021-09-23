let btn1 = document.getElementsByClassName('btn1');
console.log(btn1);

let circle = document.getElementsByClassName('circle');
console.log(circle);

let heart = document.getElementById('circle');
console.log(heart);

heart.addEventListener('click', ()=>{alert('1-st click')})
heart.addEventListener('click', ()=>{alert('2-nd click')})

circle[0].addEventListener('mouseover', ()=>{alert('hi')})
circle[0].style.borderRadius = '20px'

btn1[1].addEventListener('mouseout', (event)=>{
    console.log('Произошло событие: '+ event.type + ' на элементе: '+ event.target)
})
btn1[0].addEventListener('click', (event)=>{
    let hide = event.target
    hide.style.display = 'none'
})



let div = document.createElement('div')
div.innerHTML = '<h1>text</h1>'
div.style.marginLeft = '450px'
document.body.appendChild(div)

let input1 = document.createElement('input')
document.body.appendChild(input1)

input1.addEventListener('input', ()=>{
    div.innerHTML = input1.value    
})