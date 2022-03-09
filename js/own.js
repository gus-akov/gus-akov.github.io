let Hello1 = document.getElementById('nav_hello1')
let Hello2 = document.getElementById('nav_hello2')
let navb = document.getElementById('navb')
let ab_head = document.getElementById('ab_head')
const windowOuterWidth = window.outerWidth

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    let pos = ab_head.getBoundingClientRect()
    if (pos.top > value) {
        Hello1.style.right = value*0.5 + 'px';
        Hello2.style.left = value*0.5 + 'px';
        navb.style.top = value*0.8 + 'px';
    } else {
        Hello1.style.right =0 + 'px';
        Hello2.style.left = 0 + 'px';
        navb.style.top = 0 + 'px';
    }


})


