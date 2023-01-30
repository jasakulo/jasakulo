//Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const totop = document.querySelector('#to-top');

    if(window.pageYOffset > fixednav){
    header.classList.add('navbar-fixed');
    totop.classList.remove('hidden');
    totop.classList.add('flex');
    }else {
        header.classList.remove('navbar-fixed');
        totop.classList.remove('flex');
    totop.classList.add('hidden');
    }
}
// Hamberger
const hamberger = document.querySelector('#hamberger');
const navmenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
    navmenu.classList.toggle('hidden');
});

// Klik di luar hamberger
window.addEventListener('click',function(e){
if(e.target != hamberger && e.target != navmenu) {
    hamberger.classList.remove('hamberger-active');
    navmenu.classList.add('hidden');
}
}
);
// Darkmode toggle
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function() {
    if (darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';

    } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darktoggle.checked =true;
  } else {
    darktoggle.checked =false;
  }

  
