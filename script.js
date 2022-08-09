var tempo_real = "" //cria uma variavel para capturar o texto
const formulario__cartao = document.getElementById('formulario__cartao');
const formulario__cartao_nome = document.getElementById('formulario__cartao_nome');
const formulario__cartao_numero = document.getElementById('formulario__cartao_numero');
const formulario__cartao_mes = document.getElementById('formulario__cartao_mes');
const formulario__cartao_ano = document.getElementById('formulario__cartao_ano');
const formulario__cartao_cvc = document.getElementById('formulario__cartao_cvc');

formulario__cartao.addEventListener('submit', e => { e.preventDefault(); checkInputs(); });

function checkInputs() {
    const formulario__cartao_nome_Value = formulario__cartao_nome.value.trim();
    const formulario__cartao_numero_Value = formulario__cartao_numero.value.trim();
    const formulario__cartao_mes_Value = formulario__cartao_mes.value.trim();
    const formulario__cartao_ano_Value = formulario__cartao_ano.value.trim();
    const formulario__cartao_cvc_Value = formulario__cartao_cvc.value.trim();

    if (formulario__cartao_nome_Value === '') {
        setErrorFor(formulario__cartao_nome, "Can't be blank");
    } else {
        setSuccessFor(formulario__cartao_nome);
    }
    if (formulario__cartao_numero_Value === '') {
        setErrorFor(formulario__cartao_numero, 'Wrong format, numbers only, 16 digits');
    } else {
        setSuccessFor(formulario__cartao_numero);
    }
    if (formulario__cartao_mes_Value === '') {
        setErrorFor(formulario__cartao_mes, "Can't be blank");
    } else {
        setSuccessFor(formulario__cartao_mes);
    }

    if (formulario__cartao_ano_Value === '') {
        setErrorFor(formulario__cartao_ano, "Can't be blank");
    } else {
        setSuccessFor(formulario__cartao_ano);
    }
    if (formulario__cartao_cvc_Value === '') {
        setErrorFor(formulario__cartao_cvc, "Can't be blank");
    } else {
        setSuccessFor(formulario__cartao_cvc);
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formulario__cartaoDados error';
    small.innerText = message;
    input.classList.add("formulario__erro");
    small.classList.add("mostrar_erro")
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formulario__cartaoDados success';
    input.classList.remove("formulario__erro");
    small.classList.remove("mostrar_erro");
    window.location.href = "https://www.google.com/";
}

//nome da função foi dado inline no html no input que esta sendo digitado pelo usuario
function tempo_real_nome() {
    //joga os valores digitados no input dentro da variavel
    tempo_real = document.getElementById('formulario__cartao_nome').value;
    //substitui o paragrafo com o id selecionado pela variavel
    document.getElementById('cartao__nome').innerHTML = tempo_real;
}

function tempo_real_numero() {
    tempo_real = document.getElementById('formulario__cartao_numero').value;
    var tempo_real_replace = tempo_real.replace(/\D/g, "");
    tempo_real_replace = tempo_real_replace.replace(/(\d{4})/g, "$1 ");
    tempo_real_replace = tempo_real_replace.substring(0, 19);
    document.getElementById('cartao__numero').innerHTML = tempo_real_replace;
}

function tempo_real_mes() {
    tempo_real = document.getElementById('formulario__cartao_mes').value;
    document.getElementById('cartao__mes').innerHTML = tempo_real;
}
function tempo_real_ano() {
    tempo_real = document.getElementById('formulario__cartao_ano').value;
    document.getElementById('cartao__ano').innerHTML = tempo_real;
}
function tempo_real_cvc() {
    tempo_real = document.getElementById('formulario__cartao_cvc').value;
    document.getElementById('cartao__cvc').innerHTML = tempo_real;
}