// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
};


// scroll section active kink
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bi-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img ',  { origin: 'left' });
ScrollReveal().reveal('.home-container p, .about-content ',  { origin: 'right' });

// typed js

var typingEffect = new Typed(".typedText", {
    strings: ["Frontend Developer", "UX | UI Designer", "Full Stack Development", "Content Crator", "Blogger"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  /* sun light mode  */
let sunModeIcon = document.querySelector('#sunMode-icon');

sunModeIcon.onclick = () => {
    sunModeIcon.classList.toggle('bi-moon');
    document.body.classList.toggle('sun-mond')
}