let iconImg = document.getElementsByClassName('iconImg');

Array.from(iconImg).forEach((element)=>{
    element.parentElement.style.backgroundColor = element.parentElement.dataset.color;
});

// hamburger responce

function myFunction(x) {
  x.classList.toggle("change");
}

// responsive navbar

