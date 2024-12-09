/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let firstVal = ''
let secondVal = ''
let operator = null
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText;

        if (event.target.classList.contains('number')) {
            handleNumber(value);
        } else if (event.target.classList.contains('operator')) {
            handleOperator(value);
        } else if (value === '=') {
            handleEquals();
        } else if (value === 'C') {
            handleClear();
        }
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
// remove emty space w/ trim
        const value = event.target.innerText.trim();
        if (value === 'C') {
            handleClear();
        }
    });
});
/*-------------------------------- Functions --------------------------------*/
function handleNumber(value) {
    if (operator === null) {
        firstVal += value;
        display.innerText = firstVal;
    } else {
        secondVal += value;
        display.innerText = secondVal;
    }
}
function handleOperator(value) {
    if (firstVal && secondVal) {
        handleEquals();
    }
    operator = value;
}

function handleEquals() {
    let result = 0;
    const num1 = parseFloat(firstVal);
    const num2 = parseFloat(secondVal);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.innerText = `${firstVal}${operator}${secondVal} = ${result}`;
    firstVal = `${result}`;
    secondVal = '';
    operator = null;
}

function handleClear() {
    firstVal = '';
    secondVal = '';
    operator = null;
    display.innerText = '0';
}



