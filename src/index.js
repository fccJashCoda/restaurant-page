import initialPageLoad from './initialPageLoad.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import footer from './footer.js';


initialPageLoad();
home();
menu();
contact();
footer();

(() => {
    let homeTab = document.querySelector('#Home');
    let menuTab = document.querySelector('#Menu');
    let contactTab = document.querySelector('#Contact');

    let btn = document.querySelector('.btn');

    let homeContent = document.querySelector('.homeContent');
    let menuContent = document.querySelector('.menuContent');
    let contactContent = document.querySelector('.contactContent');

    
    homeTab.addEventListener('click', () => {homeContent.style.display = 'block';
                                            menuContent.style.display='none'; 
                                            contactContent.style.display='none'; 
                                            });
    menuTab.addEventListener('click', () => {homeContent.style.display = 'none';
                                            menuContent.style.display='block';
                                            contactContent.style.display='none';
                                            });
    contactTab.addEventListener('click', () => {homeContent.style.display = 'none';
                                                menuContent.style.display='none';
                                                contactContent.style.display='block';
                                                });
    btn.addEventListener('click', () => {homeContent.style.display = 'none';
                                menuContent.style.display='none';
                                contactContent.style.display='block';
                                })
})()
