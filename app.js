let menu_list = document.getElementById('menu_list');
let nav = document.getElementById('nav');
let menu_bar = document.getElementById('menu_bar');
let menu_icon_2 = document.getElementById('menu_icon_2');

menu_list.style.maxHeight = '0px';



function toggleMenu() {
    
    
    if (menu_list.style.maxHeight === '0px' ) {

        menu_list.style.maxHeight = '300px'
        menu_list.style.backgroundColor = 'rgb(31, 12, 6)';
        nav.style.backgroundColor = 'rgb(31, 12, 6)';
        menu_icon_2.style.display = 'block';
        menu_bar.style.display = 'none';

    } else {

        menu_list.style.maxHeight == '0px'

    }

}

function toggleMenu_2(){


    if (menu_list.style.maxHeight === '300px' ) {

        menu_list.style.maxHeight = '0px';
        menu_list.style.backgroundColor = 'transparent';
        nav.style.backgroundColor = 'transparent';
        menu_icon_2.style.display = 'none';
        menu_bar.style.display = 'block';


    } else {

        menu_list.style.maxHeight == '0px'

    }
}


