"use strict";

// const box = document.getElementById('box');
// console.log(box);

const firstButton = document.getElementsByTagName('button')[0];
firstButton.style.background = 'purple';

console.log(firstButton);
console.dir(firstButton);

// const btns = document.querySelectorAll('.btn.btn-warning');
// console.log(btns);

// btns.forEach(item => console.log(item));

const newButton = document.createElement('button');
newButton.classList.add('btn', 'btn-outline-success');
newButton.innerHTML = '<h1>Hello<h1>';
// newButton.textContent = '<h2>Hello<h2>';
// document.body.append(newButton);

document.querySelector('.main').prepend(newButton);