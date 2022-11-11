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
/* console.log(addNum(5,5))
console.log(subNum(5,5))
console.log(multiplyNum(5,5))
console.log(divideNum(5,5)) */

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
/* console.log(operate(100,100,'/')) */

// select the buttons 
const btn = document.querySelectorAll('button')
/* console.log(btn) */
for(let i=0;i<=btn.length-1;i++){
    btn[i].addEventListener('click',modifyDisplay)
}


// function that populate the display
function modifyDisplay(e){
    console.log(e.target.className)
    let btnnClass = e.target.className
    let valPassed = e.target.innerText
    let display = document.querySelector('.value')
    if(e.target.className === 'number'){
        /* console.log('yesnumber'); */
        return (display.innerText==0)? display.innerText= valPassed:display.innerText+= valPassed
    }else if(e.target.className === 'operator'){
        return (display.innerText==0)? display.innerText= valPassed:display.innerText+= valPassed
    }else if(e.target.className === 'clear'){
        return display.innerText = 0
    }else if(e.target.className === 'equal'){
        (display.innerText==0)? display.innerText= valPassed:display.innerText+= valPassed;
        let resultA = display.innerText
        resultA = resultA.split('')
        console.log(resultA)
        resultA.splice(resultA.length-1,1)// remove the = sign
        console.log(resultA)
        //let's store the operator sign
        let operatorVal
        let operatorIndex
        for(let i=0;i<=resultA.length-1;i++){
            if(resultA[i]=='+'||resultA[i]=='-'||
            resultA[i]=='*'||resultA[i]=='/'){
                operatorVal = resultA.splice(i,1).join('')
                operatorIndex = i
            }
        }
        console.log(operatorVal)
        console.log(operatorIndex)
        //let's store the first number
        let firstNumber = []
        for(let i=0;i<operatorIndex;i++){
            firstNumber[i] = resultA[i]
        }
        //lets' store the second number
        let secondNumber = []
        for(let i=operatorIndex;i<=resultA.length-1;i++){
            secondNumber[i-operatorIndex] = resultA[i]
        }
        firstNumber=firstNumber.join('')
        secondNumber=secondNumber.join('')
        console.log(firstNumber)
        console.log(secondNumber)
        // call the operate function
        console.log(operate(firstNumber,secondNumber,operatorVal))
        display.innerText = operate(firstNumber,secondNumber,operatorVal)
    }

    /* return display.innerText===0? = valPassed */
        /* console.log(display.innerText) */
    /* return display.innerText += valPassed */
}