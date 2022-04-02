
const card=document.querySelectorAll(".card__inner").forEach( card => card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  })); 

  



  ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.heading, .row-22',{delay:200, origin:'left'});
ScrollReveal().reveal('.row-11',{delay:200, origin:'right'});
ScrollReveal().reveal('.footer-section',{delay:400,});

