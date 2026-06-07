const Num1 = document.getElementById('campoNum1');
const Num2 = document.getElementById('campoNum2');
const btnSoma = document.getElementById('btnSomar');
const btnSubtracao = document.getElementById('btnSubtrair');
const btnMultiplicacao = document.getElementById('btnMultiplicar');
const btnDivisao = document.getElementById('btnDividir');
const resultado = document.getElementById('visor');

function somar() {
    event.preventDefault();
    
    const soma = parseFloat(Num1.value) + parseFloat(Num2.value);
    resultado.innerHTML = `<h1>Resultado: ${soma}</h1>`;
}

function subtrair() {
    event.preventDefault();

    const subtracao = parseFloat(Num1.value) - parseFloat(Num2.value);
    resultado.innerHTML = `<h1>Resultado: ${subtracao}</h1>`;
}

function multiplicar() {
    event.preventDefault();

    const multiplicacao = parseFloat(Num1.value) * parseFloat(Num2.value);
    resultado.innerHTML = `<h1>Resultado: ${multiplicacao}</h1>`;
}

function dividir() {
    event.preventDefault();

    const divisao = parseFloat(Num1.value) / parseFloat(Num2.value);
    resultado.innerHTML = `<h1>Resultado: ${divisao}</h1>`;
}
