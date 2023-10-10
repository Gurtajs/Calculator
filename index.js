const buttons = document.querySelectorAll('.buttons');
const button = document.querySelector('.buttons');
const clear = document.querySelector('.acbutton');
const previousScreen = document.querySelector('.previous');
const currentScreen = document.querySelector('.current');
const operators = document.querySelectorAll('.operator')
const oneOperator = document.querySelector('.operator')
const equal = document.querySelector('.equal')
const text = document.querySelector('.text')

let currentValue = '';
let previousValue = '';
let operator = '';

function display() {
    buttons.forEach(button => button.addEventListener('click', () => {
        handleNumber(button.textContent);
        currentScreen.textContent = currentValue;
}))

    operators.forEach(oneOperator => oneOperator.addEventListener('click', () => {
        handleOperator(oneOperator.textContent);
        previousScreen.textContent = previousValue + '' + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', () => {
        text.textContent = '';
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
        })
    
    equal.addEventListener('click', function(){
      if (currentValue != '' && previousValue != ''){
        calculate()
        }
      })
    }

display();

function handleNumber(num) {
    currentValue += num;
}

function handleOperator(oper) {
    operator = oper;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === '+'){
        previousValue += currentValue;
    } else if (operator === '-'){
        previousValue -= currentValue;
    } else if (operator === 'x'){
        previousValue *= currentValue;
    } else if (operator === '÷'){
        if (currentValue == 0){
        text.textContent = 'You can\'t divide by 0';
        previousScreen.textContent = '';
        currentScreen.textContent = '';
        
        operator = '';
        return;
    }
        previousValue /= currentValue
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
    operator = ''
}

function roundNumber(num){
    return Math.round(num * 1000)/1000;
}
