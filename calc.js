const num1i = document.getElementById('num1');
const num2i = document.getElementById('num2');
const func = document.getElementById('func');
const calculate = document.getElementById('calculate');
const resultElem = document.getElementById('result');

calculate.addEventListener('click', () => {
    const num1 = parseFloat(num1i.value);
    const num2 = parseFloat(num2i.value);
    const funcion = func.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultElem.value = 'Заполните оба поля';
        return;
    }

    let result;

    switch (funcion) {
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
            if (num2 === 0) {
                resultElem.value = 'Делить на ноль нельзя(';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElem.value = 'Ошибка';
            return;
    }

    resultElem.value = result; 
});