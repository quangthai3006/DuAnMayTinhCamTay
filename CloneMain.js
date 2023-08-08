var input = document.querySelector('.input')
var operators = document.querySelector('.operators')
var divElements = operators.querySelectorAll('div:not(#comeback)')
var divElementsNumber = document.querySelectorAll('.leftPanel .numbers div:not(#clear)')
var equal = document.querySelector('.equal')
var clear = document.querySelector('#clear')
var comeback = document.querySelector('#comeback')



function handleClick(div){
    div.onclick = function(e){
        var target = e.target
        var value = target.innerText
        input.innerText += value
    }
}

function numberClick(divNumber){
    divNumber.onclick = function(e){
        var target = e.target
        var value = target.innerText
        input.innerText += value
    }
}

divElements.forEach(div => {

    handleClick(div)
})

divElementsNumber.forEach(divNumber => {

    handleClick(divNumber)
})

equal.onclick = function(){
  
    try{
        var kq = eval(input.innerText)
        input.innerText = kq
    }
    catch(e){
        input.innerText = 'error'
    }
    

}

clear.onclick = function(){
    input.innerText = ''
}

comeback.onclick = function(){
    input.innerText = input.innerText.slice(0, -1)
}