/* add
subtract
multiply
divide 
percent */
function addNum(a,b){
    return ((a+b)%1===0)? a+b:(a+b).toFixed(2)
}
function subNum(a,b){
    return ((a-b)%1===0)?a-b:(a-b).toFixed(2)
}
function multiplyNum(a,b){
    return ((a*b)%1===0)? a*b:(a*b).toFixed(2)
}
function divideNum(a,b){
    if(b!=0){
        return ((a/b)%1===0)? a/b:(a/b).toFixed(2)
    }else{
        return 'Error'
    }
}
function percentNum(a){
    return ((a/100)%1===0)? (a/100):(a/100).toFixed(2)
}
function minusSign(a){
    return ((-a)%1===0)? (-a):(-a).toFixed(2)
}
//Create a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(numOne,numTwo,operation){
    if(operation === '+'){
        return addNum(+numOne,+numTwo)
    }else if(operation === '-'){
        return subNum(+numOne,+numTwo)
    }else if(operation === '*'){
        return multiplyNum(+numOne,+numTwo)
    }else if(operation === '/'){
        return divideNum(+numOne,+numTwo)
    }else if(operation === '%'){
        return percentNum(+numOne)
    }else if(operation === '+/-'){
        return minusSign(+numOne)
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
// global variables declaration
    let btnState = 'clear';
    let numOne = null;
    let numTwo = null;
    let operator = null;

// function that populate the display
function modifyDisplay(e){
    console.log(e.target.className)
    // variables declaration
    let display = document.querySelector('.value');
    let buttonPassed = e.target.className; // class of the button pressed
    let valPassed = e.target.innerText; // value of the button
    let dispVal = display.innerText;// value on the screen
    // conditions on each button

    if(buttonPassed === 'number'){
        console.log(isNaN(e.target.innerText))
        if(btnState=='clear'){
            numOne = valPassed//.split("")
            console.log(numOne)
            btnState = 'number'
            return display.innerText = valPassed   
        }else if(btnState=='number' && numOne != null && operator != null && numTwo!=null){
            numTwo += valPassed//.split("")
            console.log(numTwo)
            return display.innerText += valPassed      
        }else if(btnState=='number'){
            numOne += valPassed//.split("")
            console.log(numOne)
            return display.innerText += valPassed      
        }else if(btnState=='operator'){
            numTwo = valPassed//.split("")
            console.log(numTwo)
            btnState = 'number'
            return display.innerText = valPassed      
        }else if(btnState=='equal'){
            numOne = valPassed//.split("")
            console.log(numTwo)
            btnState = 'number'
            return display.innerText = valPassed      
        }
        /* return (dispVal==0)? display.innerText= valPassed : display.innerText+= valPassed */
    }else if(buttonPassed === 'operator'){
            /* if(operator === null && valPassed === '+/-'){
                console.log('hello')
/*                 numOne = display.innerText
                numOne = -numOne */
/*                 console.log(numOne) */
                /* btnState = 'operator' */
            /*    operator = valPassed
                console.log(operate(numOne,numTwo,operator))
                display.innerText = operate(numOne,numTwo,operator)
                numOne = display.innerText//operate(+numOne,+numTwo,+operator)
                return console.log(operator)
            }else  */if(operator === null){
                numOne = display.innerText
                console.log(numOne)
                btnState = 'operator'
                operator = valPassed
                return console.log(operator)
            }else{
/*                 numOne = parseInt(numOne);
                numTwo = parseInt(numTwo); */
                console.log(operate(numOne,numTwo,operator))
                display.innerText = operate(numOne,numTwo,operator)
                numOne = display.innerText//operate(+numOne,+numTwo,+operator)
                numTwo = null
                btnState = 'operator'
                operator = valPassed
                return console.log(operator)
            }

        /* return (dispVal==0)? display.innerText= valPassed:display.innerText+= valPassed */
    }else if(buttonPassed === 'clear'){
            btnState = 'clear';
            numOne = null;
            numTwo = null;
            operator = null;
        return display.innerText = 0
    }else if(buttonPassed === 'equal'){
        if(btnState!= 'equal'){
            btnState = 'equal'
/*             numOne = parseInt(numOne);
            numTwo = parseInt(numTwo); */
            console.log(operate(numOne,numTwo,operator))
            display.innerText = operate(numOne,numTwo,operator)
        }else{
            return
        }
/*         (dispVal==0)? display.innerText= valPassed:display.innerText+= valPassed;
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
        firstNumber=parseInt(firstNumber.join(''))
        secondNumber=parseInt(secondNumber.join(''))
        console.log(firstNumber)
        console.log(secondNumber) */
        // call the operate function
 
    }

    /* return display.innerText===0? = valPassed */
        /* console.log(display.innerText) */
    /* return display.innerText += valPassed */
}


/* BS */
/*     let arrA = [0,1,2]
    let arrB = []
function kiwi(param){
    let a = arrA
    arrA = [2,3,4]
    param = [a,arrA]
    console.log(arrA)
    console.log(a)
    console.log(param)
    return param
}*/