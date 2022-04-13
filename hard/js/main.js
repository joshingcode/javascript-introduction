let total=0

let num1=document.querySelector('#num1') 
let num2=document.querySelector('#num2')

document.querySelector('#addThat').addEventListener('click', add2 )
document.querySelector('#subThat').addEventListener('click', sub2 )
document.querySelector('#multiply').addEventListener('click', multi2 )
document.querySelector('#divide').addEventListener('click', divide2 )
// document.querySelector('#equalTo').addEventListener('click', equal)

function add2(){
    total=Number(num1.value)+Number(num2.value)
    document.querySelector('#putResult').innerText=total

}

function sub2(){
    total=Number(num1.value)-Number(num2.value)
    document.querySelector('#putResult').innerText=total
}

function multi2(){
    total=Number(num1.value)*Number(num2.value)
    document.querySelector('#putResult').innerText=total
}

function divide2(){
    total=Number(num1.value)/Number(num2.value)
    document.querySelector('#putResult').innerText=total
}


// function equal(){

//     total=Number(num1.value)+Number(num2.value)
//     document.querySelector('#putResult').innerText=total 
// }