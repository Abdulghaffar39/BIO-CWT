let menu_list = document.getElementById('menu_list');
let nav = document.getElementById('nav');

menu_list.style.maxHeight = '0px';


function toggleMenu() {

    if (menu_list.style.maxHeight === '0px' ) {

        menu_list.style.maxHeight = '300px'
        menu_list.style.backgroundColor = 'rgb(31, 12, 6)';
        nav.style.backgroundColor = 'rgb(31, 12, 6)';

    } else {

        menu_list.style.maxHeight == '0px'

    }

}

function hide_menu(){

    menu_list.style.display = 'none'
}


