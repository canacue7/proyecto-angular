'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// select elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header=document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


// creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent='we use cookied for improved functionality and analytics.';

message.innerHTML = 'We use cookied for improved functionality and analitycs. <button class="btn btn--close-cookie">got it!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete message

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // message.parentElement.removeChild(message);
});

// styles
message.style.backgroundColor = '#37323d';
message.style.width= '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =Number.parseFloat(getComputedStyle(message).height,10)+40+'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
// non standards
const logo = document.querySelector('.nav__logo');
console.log(logo.className);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// fata attibutes
console.log(logo.CDATA_SECTION_NODE.versionNumber);
console.log("cambio");
const btnScrollTO= document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTO.addEventListener('click', function(e){
  
});