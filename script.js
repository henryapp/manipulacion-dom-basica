/*const h1 = document.querySelector('h1');
const pid = document.getElementById('pid');
h1.innerHTML ='Pattito';
//h1.innerText =' pattito <br> Feo';
 console.log(h1.getAttribute('class'));
 h1.setAttribute('class', 'rojo');

 h1.classList.add('rojo');
 h1.classList.remove('verde')

 const img = document.createElement('img')
 img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png');
pid.append(img);*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const cal1 = document.querySelector('#calculo1');
const cal2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

btn.addEventListener('click', sumarInputValues);

/*function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const a = Number(cal1.value);
    const b = Number(cal2.value);
    const suma = a+b;
    pResult.innerHTML='El Resultado es: '+ suma;
    console.log(a + b);
}*/

function sumarInputValues(event){
    //console.log({event});
    //event.preventDefault();
    const a = Number(cal1.value);
    const b = Number(cal2.value);
    const suma = a+b;
    pResult.innerHTML='El Resultado es: '+ suma;
    console.log(a + b);
}


