const initialPageLoad = () => {
    let content = document.querySelector('#content');
    
    /* Menu elements */
    let header = document.createElement('header');
    let container = document.createElement('div');
    container.classList = 'container';

    
    let titleLogo = document.createElement('h2');
    titleLogo.textContent = 'Atomic Café'

    let menuList = document.createElement('ul');

    let menuItems = ['Home', 'Menu', 'Contact'];
    for (let i = 0; i < menuItems.length; i++) {
        let menuListItem = document.createElement('li');
        menuListItem.id = menuItems[i];
        menuListItem.textContent = menuItems[i];
        menuList.appendChild(menuListItem);
    }

    /* Layer */
    let layerDiv = document.createElement('div');
    layerDiv.id = 'layer';

    
    /* Appending everything */
    
    container.appendChild(titleLogo);
    container.appendChild(menuList);

    header.appendChild(container);
    content.append(layerDiv)
    content.appendChild(header);
}

export default initialPageLoad;