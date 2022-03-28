// global variables:
const intro = document.querySelector('.intro');
const introTitle = document.querySelector('.intro--title');
const introImg = document.querySelector('.intro--img');
const introSub = document.querySelector('.intro--subtitle');

const navToggle = document.querySelector('.nav--toggle');

const aboutTitle = document.querySelector('.about-me--title');
const aboutSub = document.querySelector('.about-me--subtitle');
const aboutBody = document.querySelector('.about-me--body');
const aboutImg = document.querySelector('.about-me--img');

const resume = document.querySelector('.resume');
const resumeTitle = document.querySelector('.resume--title');

// hamburger menu => shows the navigation menu, once the button is pressed
navToggle.addEventListener('click', (event) => {
    document.body.classList.toggle('nav--open');
});

// navigtion menu => closes the navigation menu, and transports to the relevant section
const navLinks = document.querySelectorAll('.nav--link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav--open');
    });
});


// animate in => intro section: 
intro.addEventListener('mouseenter', (event) => {

    if (window.innerWidth >= 800) {
        introImg.style.transition = 'all 0.2s ease';
        introImg.style.transform = "translateZ(60px) translateX(-10px)";
    
        introTitle.style.transition = 'all 0.4s ease';
        introTitle.style.transform = "translateZ(100px) translateX(20px)";
    
        introSub.style.transition = 'all 0.6s ease';
        introSub.style.transform = "translateZ(80px) translateX(30px)";
    }

})

// animate out => intro section:
intro.addEventListener('mouseleave', (event) => {

    if (window.innerWidth >= 800) {
        introImg.style.transition = 'all 0.8s ease';
        introImg.style.transform = "translateZ(0px)";

        introTitle.style.transition = 'all 0.4s ease';
        introTitle.style.transform = "translateZ(0px)";

        introSub.style.transition = 'all 0.2s ease';
        introSub.style.transform = "translateZ(0px)"
    }
})

// animate in => about section:
about.addEventListener('mouseenter', (event) => {

    if (window.innerWidth >= 800) {
        aboutImg.style.transition = 'all 0.5s ease';
        aboutImg.style.transform = "translateX(30px) translateZ(20px)";

        aboutTitle.style.transition = 'all 0.9s ease';
        aboutTitle.style.transform = "translateZ(100px)";

        aboutBody.style.transition = 'all 0.2s ease';
        aboutBody.style.transform = "translateZ(60px)";

        aboutSub.style.transition = 'all 1.3s ease';
        aboutSub.style.transform = "translateX(60px)";
    }
})

// animate out => about section:
about.addEventListener('mouseleave', (event) => {
    if (window.innerWidth >= 800) {
        aboutImg.style.transition = 'all 0.8s ease';
        aboutImg.style.transform = "translateX(0px)";

        aboutTitle.style.transition = 'all 0.7s ease';
        aboutTitle.style.transform = "translateX(0px)";

        aboutBody.style.transition = 'all 1.0s ease';
        aboutBody.style.transform = "translateZ(0px)";
        
        aboutSub.style.transition = 'all 0.5s ease';
        aboutSub.style.transform = "translateX(0px)";
    }
})


// light/dark mode (a feature to be added):
   