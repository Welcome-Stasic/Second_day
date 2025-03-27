const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const func = document.getElementById('func');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = func.value;

    if (isNaN(num1) || isNaN(num2)) {
        result.value = 'Заполните оба поля';
        return;
    }

    let result;

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
            if (num2 === 0) {
                resultInput.value = 'Делить на ноль нельзя(';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultInput.value = 'Ощибка';
            return;
    }

    result.value = result;
});