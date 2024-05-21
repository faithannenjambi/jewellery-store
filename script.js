const menu_icon = document.querySelector('#mobile-menu');

const menu_navigations = document.querySelector('#mobile-menu-navigations');



document.addEventListener('DOMContentLoaded', () =>
{
    menu_icon.addEventListener('click' , () =>
        {
            menu_navigations.classList.toggle('hide-mobile-menu-navigations');
        })
})