//let a = parseInt(prompt("Ваш бюджет на месяц?", ""));
//console.log(a); console.log(typeof(a))
//
//function start () {
//    while (isNaN(a) || a == '' || a == null)
//     {
//        console.log('ERROR');
//        a = parseInt(prompt ("Ваш бюджет на месяц?", ""));
//    }
//}
//start();

//let circle = document.getElementsByTagName('button');
//console.log(circle);
//
//circle[0].style.backgroundColor = 'red';
//circle[2].style.opacity = '50%';
//circle[0].style.width = '100px';
//circle[0].style.borderRadius = '20px';
//
//let div = document.createElement('div');
//div.style.width = '100px';
//let text = document.createTextNode('privet');
//console.log(div, text);
//
//document.body.appendChild(div);
//console.log(div);

let circle = document.getElementsByTagName('button') ;
console.log(circle);
circle[0].style.backgroundColor = 'red';
circle[1].style.borderRadius = '50%';
circle[2].style.height = '50px';
circle[2].style.width = '200px';

let div = document.createElement('div');
div.style.marginTop = '20px';
div.style.height = '50px';
div.style.backgroundColor = '#fdf';
//div.textContent = 'Hell, world'';
div.innerHTML = '<h1> Hi, Den </h1>';

circle[2].onclick = ()=>alert('third button!')

circle.addEventListener('click', )

document.body.appendChild(div);



console.log(div);
