'use strict'

const ad = document.querySelector('.adv');
ad.style.display = 'none'

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

const wrapperBooks = document.querySelector('.books');
const books = document.querySelectorAll('.book');


wrapperBooks.append(books[2]);
wrapperBooks.prepend(books[3]);
wrapperBooks.prepend(books[4]);
wrapperBooks.prepend(books[0]);
wrapperBooks.prepend(books[1]);

const headerOfBook = books[4].getElementsByTagName('a')[0];
  headerOfBook.textContent = 'Книга 3. this и Прототипы Объектов';
  
const sixthBook = books[2].getElementsByTagName('ul')[0];
const chaptersOfSix = books[2].querySelectorAll('li');
const chapterEight = document.createElement('li')
  chapterEight.textContent = 'Глава 8: За пределами ES6';

  sixthBook.append(chapterEight);
  sixthBook.append(chaptersOfSix[9]);

const secondBook = books[0].getElementsByTagName('ul')[0],
    chaptersOfTwo = books[0].querySelectorAll('li');




secondBook.prepend(chaptersOfTwo[8])
secondBook.prepend(chaptersOfTwo[6])
secondBook.prepend(chaptersOfTwo[3])
secondBook.prepend(chaptersOfTwo[1])
secondBook.prepend(chaptersOfTwo[0])

secondBook.append(chaptersOfTwo[2])
secondBook.append(chaptersOfTwo[10])



const fifthBook = books[5].getElementsByTagName('ul')[0],
    chaptersOfFive = books[5].querySelectorAll('li');



fifthBook.prepend(chaptersOfFive[7])
fifthBook.prepend(chaptersOfFive[6])
fifthBook.prepend(chaptersOfFive[2])
fifthBook.prepend(chaptersOfFive[4])
fifthBook.prepend(chaptersOfFive[3])
fifthBook.prepend(chaptersOfFive[9])
fifthBook.prepend(chaptersOfFive[1])
fifthBook.prepend(chaptersOfFive[0])

