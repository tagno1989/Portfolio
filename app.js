const linkList = document.querySelector('.link-list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    linkList.style.display = 'flex';
    linkList.style.top = '0';
}
function close(){
    linkList.style.top = '-100%'
}