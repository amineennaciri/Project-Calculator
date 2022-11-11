/* add
subtract
multiply
divide */
function addNum(a,b){
    return a+b
}
function subNum(a,b){
    return a-b
}
function multiplyNum(a,b){
    return a*b
}
function divideNum(a,b){
    return a/b
}
//test
console.log(addNum(5,5))
console.log(subNum(5,5))
console.log(multiplyNum(5,5))
console.log(divideNum(5,5))

//Create a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(numOne,numTwo,operation){
    if(operation === '+'){
        return addNum(numOne,numTwo)
    }else if(operation === '-'){
        return subNum(numOne,numTwo)
    }else if(operation === '*'){
        return multiplyNum(numOne,numTwo)
    }else if(operation === '/'){
        return divideNum(numOne,numTwo)
    }else{
        return false
    }
}

//test
console.log(operate(100,100,'/'))

// select the buttons 
const btn = document.querySelectorAll('button')
/* console.log(btn) */
for(let i=0;i<=btn.length-1;i++){
    btn[i].addEventListener('click',modifyDisplay)
}


// function that populate the display
function modifyDisplay(e){
    /* console.log(e.target.innerText) */
    let valPassed = e.target.innerText
    let display = document.querySelector('.value')
    /* console.log(display.innerText) */
    return display.innerText = valPassed
}