let btnArea = document.querySelector('[data-calc]')
let height = document.getElementById('height').value
let base = document.getElementById('base').value
let display = document.getElementById('result')


btnArea.addEventListener('click',function(){

    let height = document.getElementById('height').value
    let base = document.getElementById('base').value
    area(base,height)
})


function area(a,b) {
    let sum = 1/2*(a*b);
    display.innerText = sum
}