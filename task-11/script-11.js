//1

function getPromise(message, time) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, time);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
  });

  //2

  function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("Error! Incorrect array!");
      } else {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
          if (isNaN(arr[i])) {
            reject("Error! Incorrect array!");
            return;
          }
          product *= arr[i];
        }
        resolve(product);
      }
    });
  }

  calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"

//3

new Promise(function (resolve, reject) {
  let number = prompt("Введіть число:");
  if (isNaN(number)) {
    reject("Помилка! Введено нечислове значення.");
  } else {
    resolve(number);
  }
})
  .catch(function (error) {
    return new Promise(function (resolve) {
      let number;
      function askNumber() {
        number = prompt("Введіть число:");
        if (isNaN(number)) {
          askNumber();
        } else {
          resolve(number);
        }
      }
      askNumber();
    });
  })
  .then(function (result) {
    console.log("Введене число:", result);
  });

  //4
  