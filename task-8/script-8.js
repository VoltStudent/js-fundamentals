//1
const btn23 = document.querySelector('#btn23');
const out5 = document.querySelector('#out5');
const input = document.querySelector('#input');
function upperCase(word) {
    let regexp = /^[A-Z]/;
    if (regexp.test(word)) {
        out5.innerHTML = "String's starts with uppercase character";
        out5.style.backgroundColor = 'transparent';
    }
    else {
        out5.innerHTML = "String's not starts with uppercase character";
        out5.style.backgroundColor = '#FF7F50';
    }
}

btn23.addEventListener('click', () => {
    upperCase(input.value);
});

//2

const btn24 = document.querySelector('#btn24');
const input2 = document.querySelector('#input2');
const out6 = document.querySelector('#out6')

function checkEmail(email) {
    let regexp = /^[\w\.\-]{3,}@\w+\.\w+$/;
    if (regexp.test(email)) {
        out6.innerHTML = "Email is valid";
        out6.style.backgroundColor = 'transparent';
    }
    else {
        out6.innerHTML = "Email is invalid";
        out6.style.backgroundColor = '#FF7F50';
    }
}

btn24.addEventListener('click', () => {
    checkEmail(input2.value);
});

//3
const btn25 = document.querySelector('#btn25');
const input3 = document.querySelector('#input3');
const out7 = document.querySelector('#out7');

function replaceWords(string) {
    let regexp = /(\w+)\s(\w+)/;
    out7.innerHTML = string.replace(regexp, "$2, $1")
}

btn25.addEventListener('click', () => {
    replaceWords(input3.value);
});

//4

const btn26 = document.querySelector('#btn26');
const input4 = document.querySelector('#input4');
const out8 = document.querySelector('#out8');

function checkCard(num) {
    let regexp = /^(\d{4}\-){3}\d{4}$/;
    if (regexp.test(num)) {
        out8.innerHTML = "Card number is valid";
        out8.style.backgroundColor = 'transparent';
    }
    else {
        out8.innerHTML = "Card number is invalid";
        out8.style.backgroundColor = '#FF7F50';
    }
}

btn26.addEventListener('click', () => {
    checkCard(input4.value);
});

//5

const btn27 = document.querySelector('#btn27');
const input5 = document.querySelector('#input5');
const out9 = document.querySelector('#out9');

function checkNewEmail(email) {
    let regexp = /^[a-zA-Z0-9]+\w*\-?\w*@\w+\.\w+$/;
    if (regexp.test(email)) {
        out9.innerHTML = "Email is valid";
        out9.style.backgroundColor = 'transparent';
    }
    else {
        out9.innerHTML = "Email is invalid";
        out9.style.backgroundColor = '#FF7F50';
    }
}

btn27.addEventListener('click', () => {
    checkNewEmail(input5.value);
});

//6
const btn28 = document.querySelector('#btn28');
const input6 = document.querySelector('#input6');
function checkLogin(login) {
    let regexp = /^[a-z](\d\.?|[a-z]){1,9}$/gi;
    let numMatch = (login.match(/\d\.\d|\d/g) || []).join(', ');
    if (regexp.test(login)) {
        out10.innerHTML = "Login is correct ";
        out10.innerHTML += `//${numMatch}`
        out10.style.backgroundColor = 'transparent';
    }
    else {
        out10.innerHTML = "login is incorrect ";
        out10.innerHTML += `//${numMatch}`
        out10.style.backgroundColor = '#FF7F50';
    }
}

btn28.addEventListener('click', () => {
    checkLogin(input6.value);
});