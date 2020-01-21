const menu = () => {
    let content = document.querySelector('#content');

    let burgerList = [
        ['CheeseBurger', '$12,50', 'Pure beef, cheddar cheese, onions, tomatoes, sweet pickles'],
        ['Bacon-cheese burger', '$13,50', 'Pure beef, bacon, cheddar cheese, barbecue sauce, garnish'],
        ['Crispy-Chicken Burger', '$15,50', 'Crispy chicken filet, honey mustard sauce, garnish'],
        ['Veggie-burger', '$15,50', 'Veggie patties, tomato sauce, garnish'],
        ['Black Salmon Burger', '$17,50', 'Beef, cheese, salmon and garnish'],
        ['Double Beef', '$17,50', 'Double beef patties, double cheese, garnish'],
                    ] 
                    
    let shakesList = [
        ['Vanilla Shake', '$5'],
        ['Chocolate Shake', '$5'],
        ['Strawberry Shake', '$5'],
        ['Banana Shake', '$5'],
        ['Double Deluxe Chocolate-banana Shake', '$8'],
                    ]
                    
    /* Menu */
    let menuContent = document.createElement('div');
    menuContent.classList = 'container menuContent';

    let menuBurgerTitle = document.createElement('h1');
    menuBurgerTitle.textContent = 'Our Burgers';
    menuBurgerTitle.classList = 'menuTitle';

    let burgerMenuImg = document.createElement('img');
    let burgerUl = document.createElement('ul');

    burgerMenuImg.classList = 'burgerMenuImg';
    burgerMenuImg.src = "images/burger.jpg";
    

    for (let i = 0; i < burgerList.length; i++) {
        let burger = document.createElement('li');
        let burgerName = document.createElement('h3');
        burgerName.textContent = `${burgerList[i][0]} - ${burgerList[i][1]}`;
        
        let burgerIngredients = document.createElement('p');
        burgerIngredients.textContent = burgerList[i][2];

        burger.appendChild(burgerName);
        burger.appendChild(burgerIngredients);
        
        burgerUl.appendChild(burger);
    }

    let menuShakesTitle = document.createElement('h1');
    menuShakesTitle.textContent = 'Our Shakes';
    menuShakesTitle.classList = 'menuTitle';

    let shakesMenuImg = document.createElement('img');
    let shakesUl = document.createElement('ul');

    shakesMenuImg.classList = 'shakesMenuImg';
    shakesMenuImg.src = "images/shake.jpg";
    
    for (let i = 0; i < shakesList.length; i++) {
        let shakes = document.createElement('li');
        let shakesName = document.createElement('h3');
        shakesName.textContent = `${shakesList[i][0]} - ${shakesList[i][1]}`;

        shakes.appendChild(shakesName);

        shakesUl.appendChild(shakes)
    }

    menuContent.appendChild(menuBurgerTitle);
    menuContent.appendChild(burgerMenuImg);
    menuContent.appendChild(burgerUl);

    menuContent.appendChild(menuShakesTitle);
    menuContent.appendChild(shakesMenuImg);
    menuContent.appendChild(shakesUl);

    content.appendChild(menuContent);
}

export default menu;