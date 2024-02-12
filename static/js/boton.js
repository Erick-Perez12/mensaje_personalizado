//boton que se mueve
let clickCount = 0;

const movingButton = document.getElementById('movingButton');

movingButton.addEventListener('click', function() {
    clickCount++;

    if (clickCount <= 3) {
        movingButton.classList.add('clicked');
    } else if (clickCount === 4) {
        // Redireccionar a otra página en el cuarto clic
        window.location.href = 'otra_pagina.html';
    }
});