'use strict';

(function() {
    setInterval(() => {
        const container = document.querySelector('.buble-root');
        if (container.style.display === 'none') {
            console.log('mobile');
        } else if (container.style.display === 'display') {
            console.log('desktop');
        }
        createBuble();
    }, 3000);
}());


function createBuble() {
    const container = document.querySelector('.buble-root');

    if (container.style.display === 'none') {
        console.log('mobile');
    } else if (container.style.display === 'display') {
        console.log('desktop');
    }
    const boble = document.createElement('DIV');
    boble.classList.add('puz-rotate');
    const min = 0;
    const max = 800;
    const margin = Math.floor(min + Math.random() * (max + 1 - min));
    boble.style.marginLeft = `${margin}px`;
    const htmlString =
        ` <div class="puz-up">
           <div class="puz"></div>
         </div>`;
    boble.insertAdjacentHTML('afterbegin', htmlString);

    container.append(boble);

    setInterval(() => {
        boble.remove();
    }, 11000);

};