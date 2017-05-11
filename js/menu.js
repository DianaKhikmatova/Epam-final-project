 var count = 0;
function showMenu() {
    if (count % 2 === 0) {
        document.getElementById('menu-icon').src = 'img/cross.png';
        document.getElementById('navigation').style.display = 'block';
        document.getElementById('header').style.height = '580px';
    } else {
        document.getElementById('menu-icon').src = 'img/menu.png';
        document.getElementById('navigation').style.display = 'none';
        document.getElementById('header').style.height = '70px';
    }
    count++;
}