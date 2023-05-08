// //1

// const list = document.getElementById('list');
// const li = list.getElementsByTagName('li');
// let result = li[0].textContent + ',' + li[4].textContent + ',' + li[1].textContent + ',' + li[3].textContent + ',' + li[2].textContent;
// alert(result)

// //2

// const header = document.querySelector('h1');
// header.style.backgroundColor = 'green';

// const myDiv = document.getElementById('myDiv');
// myDiv.children[0].style.fontWeight = 900;
// myDiv.children[1].style.color = 'red';
// myDiv.children[2].style.textDecoration = 'underline';
// myDiv.children[3].style.fontStyle = 'italic';

// const myList = document.getElementById('myList');
// myList.style.listStyle = 'none';
// myList.style.display = 'flex';
// myList.style.flexDirection = 'row';

// const invisibleText = document.getElementsByTagName('span');
// invisibleText[0].style.opacity = '0%';

// //3
// const spanTag = document.querySelector('span');
// const newBox = document.createElement('main');
// newBox.classList.add('mainClass', 'check', 'item');
// spanTag.after(newBox);
// const divTag = document.createElement('div');
// divTag.setAttribute('id', 'myDiv');
// newBox.append(divTag);
// const paragrapfTag = document.createElement('p');
// paragrapfTag.textContent = 'First paragraph';
// divTag.append(paragrapfTag);

// //4
// const form = document.querySelector('fieldset')

// const fullName = form.elements.fio;
// const phone = form.elements.phone;
// const birthday = form.elements.birthday;
// const email = form.elements.email;
// const submitBtn = document.querySelector('.btn');
// const outField = document.querySelector('.out');

// submitBtn.addEventListener('click', () => {
//     outField.innerHTML = `${fullName.getAttribute('data-form')}: ${fullName.value}; <br> 
//                           ${phone.getAttribute('data-form')}: ${phone.value}; <br>
//                           ${birthday.getAttribute('data-form')}: ${birthday.value}; <br>
//                           ${email.getAttribute('data-form')}: ${email.value};`
// }
// );

// //5
// const box = document.querySelector('.box')
// const circle = document.getElementsByClassName('circle');
// const animArr = [];
// for (let item of circle) {
//     animArr.push(item.getAttribute('data-anim'));
// }

// for (i = 0; i < animArr.length; ++i) {
//     box.children[i].classList.add(`${animArr[i]}`);
// }

// //6

// const color = document.getElementsByClassName('color');
// const prices = document.querySelector('#outprice');
// const nikeImg = document.getElementsByClassName('shoe');
// const backgroundGrad = document.getElementsByClassName('gradient');
// for (let i = 0; i < color.length; ++i) {
// color[i].addEventListener('click', () => {
//     for (let j = 0; j < color.length; j++) {
//         color[j].classList.remove('active');
//     }
//     color[i].classList.add('active');
//     let price = color[i].getAttribute('data-price');
//     prices.innerHTML = `${price}.00 $`;
//     for (let j = 0; j < nikeImg.length; j++) {
//         nikeImg[j].classList.remove('show');
//     }
//     nikeImg[i].classList.add('show');
//     for (let j = 0; j < backgroundGrad.length; j++) {
//         backgroundGrad[j].classList.remove('second');
//     }
//     backgroundGrad[i].classList.add('second');
// })
// }


