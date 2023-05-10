// //1
// const btn16 = document.querySelector('.btn16');
// btn16.addEventListener('click', () => {
//     const newWindow = window.open('', '_blank', 'width=300,height=300');
//     setTimeout(() => {
//         newWindow.resizeTo(500, 500);
//         setTimeout(() => {
//             newWindow.moveTo(200, 200);
//             setTimeout(() => {
//                 newWindow.close();
//             }, 2000);
//         }, 2000);
//     }, 2000);
// })

// //2
// const btn17 = document.querySelector('#new-style');
// const newText = document.querySelector('#text');
// function changeCSS() {
//     newText.style.color = 'orange';
//     newText.style.fontFamily = 'Comic Sans MS';
//     newText.style.fontSize = '20px';
// }

// btn17.addEventListener('click', changeCSS);

// //3

// const btn18 = document.querySelector('#btn18');
// const btn19 = document.querySelector('#btn19');
// const btn20 = document.querySelector('#btn20');
// const link1 = document.querySelector('#link1');

// btn18.addEventListener('click', () => {
//     document.body.style.background = 'blue';
// });

// btn19.addEventListener('dblclick', () => {
//     document.body.style.background = 'pink';
// });

// btn20.addEventListener('mousedown', () => {
//     document.body.style.background = 'brown';
// });

// btn20.addEventListener('mouseup', () => {
//     document.body.style.background = 'white';
// });

// link1.addEventListener('mouseover', () => {
//     document.body.style.background = 'yellow';
// });

// link1.addEventListener('mouseout', () => {
//     document.body.style.background = 'white';
// });

// //4

// const selectNames = document.querySelector('select');
// const btn21 = document.querySelector('#btn21');
// btn21.addEventListener('click', () => {
//     selectNames.options[selectNames.selectedIndex].remove();
// });

// //5

// const btn22 = document.querySelector('#btn22');
// const out2 = document.querySelector('#out2');

// btn22.addEventListener('click', () => {
//     out2.innerHTML += 'I was pressed<br>';
// });

// btn22.addEventListener('mouseover', () => {
//     out2.innerHTML += 'Mouse on me!<br>';
// });

// btn22.addEventListener('mouseout', () => {
//     out2.innerHTML += 'Mouse is not on me!<br>'
// });


// //6

// const out3 = document.querySelector('#out3');

// window.onresize = () => out3.innerHTML = `Width: ${window.innerWidth}, Heigth: ${window.innerHeight}`;

// //7
// const country = document.querySelector('#country');
// const cities = document.querySelector('#cities');
// const out4 = document.querySelector('#out4');
// const countryCities = {
//     Ukraine: ['Kyiv', 'Chernivtsi', 'Kharkiv', 'Chernigiv', 'Mykolaiv', 'Kherson', 'Simferopil'],
//     USA: ['Washington', 'New-York', 'Boston', 'Chicago'],
//     Germany: ['Berlin', 'Hamburg', 'Munich'],
// };

// function addOptions(citiesNames) {
//     cities.innerHTML = '';
//     for (let city of citiesNames) {
//         let newOption = document.createElement('option');
//         newOption.value = city;
//         newOption.text = city;
//         cities.append(newOption);
//     }
// }

// addOptions(countryCities.Ukraine);
// country.addEventListener('change', () => {
//     switch (country.value) {
//         case 'ger':
//             addOptions(countryCities.Germany);
//             break;
//         case 'ukr':
//             addOptions(countryCities.Ukraine);
//             break;
//         case 'usa':
//             addOptions(countryCities.USA);
//             break;
//     }
// });

// cities.addEventListener('change', () => {
//     out4.innerHTML = cities.value
// })