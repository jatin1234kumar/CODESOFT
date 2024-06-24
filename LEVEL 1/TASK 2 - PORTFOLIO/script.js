let iconImg = document.getElementsByClassName('iconImg');

Array.from(iconImg).forEach((element) => {
  element.parentElement.style.backgroundColor = element.parentElement.dataset.color;
});


// 

const links = document.getElementById('myLinks');
const navbar = document.getElementById('nav');
const hamburger = document.getElementById('hamburger')

let width = 950;
let innerWidth = window.innerWidth;

function addHamburger() {
  links.classList.add('hidden');
  hamburger.classList.remove('hidden');
}

function removeHamburger() {
  links.classList.remove('hidden');
  hamburger.classList.add('hidden');
}

if(innerWidth <= width) {
  addHamburger();
} else if (innerWidth > width){
  removeHamburger();
}


window.addEventListener('resize', function () {
  if (this.window.innerWidth <= width) {
    addHamburger()
  } else if ((this.window.innerWidth > width)) {
    removeHamburger()
  }
});

// hamburger responce

function myFunction(x) {
  x.classList.toggle("change");
}

// responsive navbar

hamburger.addEventListener('click', (e) => {
  myFunction(e.target);
  navbar.classList.toggle('responsive');  
})

