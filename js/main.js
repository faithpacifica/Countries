const elLightButton = document.querySelector('.header__theme-change-btn');

elLightButton.addEventListener('click', function () {
    document.body.classList.toggle('dark__mode');
 
})