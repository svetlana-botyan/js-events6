
function createElement(tagName = 'div', receiver = document.body, content = '',) {
    const element = document.createElement(tagName);
    element.innerHTML = content;
    receiver.append(element);

    return element;
}

// task 1

const inputElement1 = document.querySelector('.input-task1');
const ulElement1 = document.querySelector('.ul-task1');

inputElement1.addEventListener('keydown', function (event) {
    const liElement = createElement('li', ulElement1, event.key)
});


// task 2

const inputElement2 = document.querySelector('.input-task2');
const divElement2 = document.querySelector('.div-task2');

inputElement2.addEventListener('keyup', function (event) {
    let message = '"Клиент набирает: ' + inputElement2.value + '"';

    console.log(event.key);
    const pElement = createElement('p', divElement2, message);
});


// task 3

const formElement3 = document.querySelector('.form-task3');
const inputElement3 = formElement3.querySelector('input');
const ulElement3 = document.querySelector('.ul-task3');

formElement3.addEventListener('submit', function (event) {
    event.preventDefault();
    const liElement = createElement('li', ulElement3, inputElement3.value)
    inputElement3.value = '';
});

// 3.1 если все же форма нужна через JS, решение:
const formElement31 = createElement('form');
formElement31.setAttribute('action', '#');
formElement31.setAttribute('metod', 'POST');

const inputElement31 = createElement('input', formElement31);
inputElement31.setAttribute('type', 'text');

const buttonlElement31 = createElement('button', formElement31, 'Submit 3.1');

const ulElement31 = document.createElement('ul');
formElement31.after(ulElement31);


formElement31.addEventListener('submit', function (event) {
    event.preventDefault();
    const liElement = createElement('li', ulElement31, inputElement31.value)
    inputElement31.value = '';
});


// task 4
// просто заголовок
const TitleElement4 = createElement('p', document.body, 'Задача 4'); 
TitleElement4.style.marginTop = '30px';
TitleElement4.style.color = 'green';      

// Решение
const formElement4 = createElement('form');
formElement4.setAttribute('action', '#');
formElement4.setAttribute('metod', 'POST');

const labelElement1 = createElement('label', formElement4, 'Введите число 1');
labelElement1.style.display = 'block';
labelElement1.style.margin = '10px 0px'

const input1Element4 = createElement('input', labelElement1);
input1Element4.setAttribute('type', 'text');

const selectTemplate = `
<select id="FormEvent" class="form-select" aria-label="Default select example">
  <option selected> Математическое действие</option>
  <option value="multiply">Умножить</option>
  <option value="divide">Разделить</option>
  <option value="subtract">Вычесть</option>
  <option value="sum">Сложить</option>  
</select>`
const selectElement4 = createElement('select', formElement4, selectTemplate);

const labelElement2 = createElement('label', formElement4, 'Введите число 2');
labelElement2.style.display = 'block';
labelElement2.style.margin = '10px 0px'

const input2Element4 = createElement('input', labelElement2);
input2Element4.setAttribute('type', 'text');

const buttonElement4 = createElement('button', formElement4, 'Расчет');
const divElement4 = createElement();
divElement4.style.color = '#e5132a';
divElement4.style.fontSize = '22px';

formElement4.addEventListener('submit', function (event) {
    event.preventDefault();

    let n = selectElement4.options.selectedIndex;

    if (n == 1) {
        let result = input1Element4.value * input2Element4.value;
        // console.log(result);
        const pElement = createElement('p', divElement4, 'Результат: ' + result)
    } else if (n == 2) {
        let result = input1Element4.value / input2Element4.value;
        const pElement = createElement('p', divElement4, 'Результат: ' + result)
    } else if (n == 3) {
        let result = input1Element4.value - input2Element4.value;
        const pElement = createElement('p', divElement4, 'Результат: ' + result)
    } else {
        let result =  Number(input1Element4.value ) + Number(input2Element4.value);
        const pElement = createElement('p', divElement4, 'Результат: ' + result)
    }

    input1Element4.value = '';
    input2Element4.value = '';
});
