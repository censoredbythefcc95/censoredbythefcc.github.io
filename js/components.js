// Menu Bar Configuration 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

//Images
gsap.from('.image_home', {opacity: 0, duration: 2, delay: 2, x: 60})

// Social Media Icons

gsap.from('.image_home-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})


// Text information
gsap.from('.information_home', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.introduction-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// Nav Bar Configuration
gsap.from('.navigation_logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav_item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

$header = $("<h1>Hello World</h1>")

