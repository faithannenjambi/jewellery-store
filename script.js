const menu_icon = document.querySelector('#mobile-menu');

const menu_navigations = document.querySelector('#mobile-menu-navigations');



document.addEventListener('DOMContentLoaded', () =>
{
    menu_icon.addEventListener('click' , () =>
        {
            menu_navigations.classList.toggle('hide-mobile-menu-navigations');
        })
})

window.onscroll = () => {
    change_nav_background();
    hide_menu();
};

function change_nav_background()
{
    var navbar = document.querySelector("#navbar");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 )
        {
            navbar.classList.add("nav-background");
        }
    else
    {
        navbar.classList.remove("nav-background");
    }    
}

function hide_menu()
{
    menu_navigations.classList.add("hide-mobile-menu-navigations");
}