let Hello1 = document.getElementById('nav_hello1')
let Hello2 = document.getElementById('nav_hello2')
let navb = document.getElementById('navb')

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    Hello1.style.right = value*0.5 + 'px';
    Hello2.style.left = value*0.5 + 'px';
    navb.style.top = value*0.8 + 'px';

})
