import { MiniMaple } from "./miniMaple.js";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const polynom = document.getElementById('polynomField').value;
    const variable = document.getElementById('variableField').value;
    const resultElement = document.getElementById('result');
    try{
        const result = MiniMaple.diff(polynom, variable);
        resultElement.style.color = 'black';
        resultElement.innerHTML = `Результат: ${result}`;
    } catch (error) {
        resultElement.style.color = 'red';
        resultElement.innerHTML = `Ошибка в формате выражения. ${error}`;
    }
}