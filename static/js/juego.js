const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    const color = pinks[parseInt(Math.random() * pinks.length)];
    heartEl.style.background = color;
    
    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add('left');
    heartLeftEl.style.background = color;
    heartEl.appendChild(heartLeftEl);
    
    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add('right');
    heartRightEl.style.background = color;
    heartEl.appendChild(heartRightEl);
    
    this.el = heartEl;
    
    setTimeout(() => {
      this.el.remove();
      this.hearts.splice(this.hearts.indexOf(this));
    }, 15000)
  }

  update() {
    this.x += Math.cos(this.theta) * 1;
    this.y += 1;
    this.theta += 0.01;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}

setInterval(() => {
  const heart = new Heart(
    Math.random() * (window.innerWidth - 100), // Coordenada x dentro del ancho de la ventana
    -100
  );
  hearts.push(heart);
}, 200);

setInterval(() => {
  hearts.forEach((heart, index) => {
    heart.update(); // Actualiza la posición del corazón

    // Elimina el corazón si ha caído completamente fuera de la ventana
    if (heart.y > window.innerHeight+10) {
      heart.el.remove(); // Elimina el elemento del DOM
      hearts.splice(index, 1); // Elimina el corazón del array
    }
  });
}, 10);

/*const btn = document.querySelector('.joker');
btn.addEventListener('click',()=>{
  window.location.href = '/principal';
});*/


let clickCount = 0;
const CM_TO_PIXEL = 1.5*37.8; // Aproximadamente 5 cm en píxeles

window.addEventListener("load", () => {
  const btn = document.querySelector('.joker');

  btn.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
      // Redirigir al otro HTML en el cuarto clic
      window.location.href = '/principal';
    }

    if (clickCount ===1) {
      btn.textContent = "¡Otra vez!";
    }

    if (clickCount ===2) {
      btn.textContent = "¡Una más!";
    }

    if (clickCount ===3) {
      btn.textContent = "¡Ahora si!";
    }

    if (clickCount ===4) {
      btn.textContent = "¡JAJAJA!";
    }
  });

  btn.addEventListener('click', moveButton);

  function moveButton() {
    // Solo mover el botón en los tres primeros clics
    if (clickCount <= 4) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const buttonWidth = btn.offsetWidth;
      const buttonHeight = btn.offsetHeight;

      const maxX = windowWidth - buttonWidth;
      const maxY = windowHeight - buttonHeight;

      const randomX = getRandomOffset(1.5, CM_TO_PIXEL);
      const randomY = getRandomOffset(1.5, CM_TO_PIXEL);

      btn.style.top = `${randomY}px`;
      btn.style.left = `${randomX}px`;
    }
  }

  function getRandomOffset(min, cmToPixel) {
    const offset = Math.random() * min * cmToPixel;
    const sign = Math.random() < 0.5 ? -1 : 1;
    return offset * sign;
  }
});



$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});