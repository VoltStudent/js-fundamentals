//1

const list = document.getElementById('list');
const li = list.getElementsByTagName('li');
const result = li[0].textContent + ',' + li[4].textContent + ',' + li[1].textContent + ',' + li[3].textContent + ',' + li[2].textContent;
alert(result); 

//2

const header = document.querySelector('h1');
header.style.backgroundColor = 'green';

const myDiv = document.getElementById('myDiv');
myDiv.children[0].style.fontWeight = 900;
myDiv.children[1].style.color = 'red';
myDiv.children[2].style.textDecoration = 'underline';
myDiv.children[3].style.fontStyle = 'italic';

const myList = document.getElementById('myList');
myList.style.listStyle = 'none';
myList.style.display = 'flex';
myList.style.flexDirection = 'row';

const invisibleText = document.getElementsByTagName('span');
invisibleText[0].style.display = 'none';

//3
const spanTag = document.querySelector('span');
const newBox = document.createElement('main');
newBox.classList.add('mainClass', 'check', 'item');
spanTag.after(newBox);
const divTag = document.createElement('div');
divTag.setAttribute('id', 'myDiv');
newBox.append(divTag);
const paragrapfTag = document.createElement('p');
paragrapfTag.textContent = 'First paragraph';
divTag.append(paragrapfTag);

//4
