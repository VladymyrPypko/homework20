function getNum(message){
    let value;
    let number;
    do {
        value = prompt(message);
        number = parseFloat(value);
        if(isNaN(number)){
            alert('Сударь, вы втираете мне какую-то строку');
        }
    } while(isNaN(number));
    return number;
}

function calculate(){
    const getOption = prompt('Что вы хотите сделать? (add, sub, mult, div)')
        .trim()
        .toLowerCase();

    const firstNum = getNum('Введите первое число:');
    const secondNum = getNum('Введите второе число:');

    let result;
    let operation;
    switch(getOption){
        case 'add':
            result = firstNum + secondNum;
            operation = '+';
        break;
        case 'sub':
            result = firstNum - secondNum;
            operation = '-';
        break;
        case 'mult':
            result = firstNum * secondNum;
            operation = '*';
        break;
        case 'div':
            if(secondNum === 0){
                document.write(`<img src="images/punishment.gif" alt="cant div 0">`);
                return;
            }
            result = firstNum / secondNum;
            operation = '/';
        break;
        default:
            document.write(`<img src="images/error.gif" alt="wrong operator">`);
            return;
    }

    document.write(`<p>${firstNum} ${operation} ${secondNum} = ${result}</p>`);
}

document.addEventListener('DOMContentLoaded', () => {
    calculate();
});