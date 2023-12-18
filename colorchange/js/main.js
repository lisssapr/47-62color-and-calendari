// игра цвет
// function getRandomElement(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

// let rows = 3;
// let cols = 3;

// let colors = ['red', 'green', 'blue'];

// let field = document.getElementById('field');
// for (let i = 0; i < rows; i++) {
//   let row = field.insertRow();
//   for (let j = 0; j < cols; j++) {
//     let cell = row.insertCell();
//     let randomColor = getRandomElement(colors);
//     cell.classList.add(randomColor);
//   }
// }

// function getNextElement(array, currentElement) {
//   const currentIndex = array.indexOf(currentElement);
//   const nextIndex = (currentIndex + 1) % array.length;
//   return array[nextIndex];
// }


// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 
// }


// let cells = document.querySelectorAll('#field td');
// cells.forEach(cell => {
//   cell.addEventListener('click', handleClick);
// });
// function checkVictory(cells) {
 
//   const firstCellClass = cells[0].className;

//   for (let cell of cells) {
//     if (cell.className !== firstCellClass) {
//       return false; 
//     }
//   }

//   return true; 
// }

// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 

//   if (checkVictory(cells)) {
//     alert('Победа!');
//   }
// }
// let clickCount = 0; 

// let clickCountElement = document.createElement('div');
// clickCountElement.textContent = `Количество кликов: ${clickCount}`;
// document.body.insertBefore(clickCountElement, field);


// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 

//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 

//   clickCount++; 
//   clickCountElement.textContent = `Количество кликов: ${clickCount}`; 

//   if (checkVictory(cells)) {
//     alert(`Победа! Количество кликов: ${clickCount}`);
//   }
// }

// календарь 


// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// let monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

// draw(body, year, month);

// function draw(body, year, month) {
//     let arr = range(getLastDay(year, month));

//     let firstWeekDay = getFirstWeekDay(year, month);
//     let lastWeekDay = getLastWeekDay(year, month);

//     let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
//     createTable(body, nums);
//     updateInfo(month, year);

//     function updateInfo(month, year) {
//         let infoElement = document.querySelector('.info');
//         infoElement.textContent = `${monthNames[month]} ${year}`;
//     }
// }
// function createTable(parent, arr) {
//   parent.textContent = '';
//   let cells = [];

//   for (let sub of arr) {
//     let tr = document.createElement('tr');

//     for (let num of sub) {
//       let td = document.createElement('td');
//       td.textContent = num;
//       tr.appendChild(td);

//       cells.push(td);
//     }

//     parent.appendChild(tr);
//   }

//   return cells;
// }

// function normalize(arr, left, right) {
//   for (let i = 0; i < left; i++) {
//     arr.unshift('');
//   }
//   for (var i = 0; i < right; i++) {
//     arr.push('');
//   }

//   return arr;
// }

// function getFirstWeekDay(year, month) {
//   let date = new Date(year, month, 1);
//   let num  = date.getDay();

//   if (num === 0) {
//     return 6;
//   } else {
//     return num - 1;
//   }
// }

// function getLastWeekDay(year, month) {
//   let date = new Date(year, month + 1, 0);
//   let num  = date.getDay();

//   return num === 0 ? 6 : num - 1;
// }

// function getLastDay(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// function range(count) {
//   let arr = [];

//   for (let i = 1; i <= count; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// function chunk(arr, n) {
//   let result = [];
//   let count = Math.ceil(arr.length / n);

//   for (let i = 0; i < count; i++) {
//     let elems = arr.splice(0, n);
//     result.push(elems);
//   }

//   return result;
// }

// function getNextYear(currentYear, currentMonth) {
//   return currentMonth === 11 ? currentYear + 1 : currentYear;
// }

// function getNextMonth(currentMonth) {
//   return currentMonth === 11 ? 0 : currentMonth + 1;
// }

// function getPrevYear(currentYear, currentMonth) {
//   return currentMonth === 0 ? currentYear - 1 : currentYear;
// }

// function getPrevMonth(currentMonth) {
//   return currentMonth === 0 ? 11 : currentMonth - 1;
// }

// function updateInfo(month, year) {
//   let infoElement = document.querySelector('.info');
//   infoElement.textContent = `${monthNames[month]} ${year}`;
// }

// next.addEventListener('click', function () {
//   year = getNextYear(year, month);
//   month = getNextMonth(month);
//   draw(body, year, month);
// });

// prev.addEventListener('click', function () {
//   year = getPrevYear(year, month);
//   month = getPrevMonth(month);
//   draw(body, year, month);
// });