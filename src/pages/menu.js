import Martini from "../assets/martini.png";

export default function displayMenu() {
    console.log('Menu page activated');

    const content = document.getElementById('content');
    

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);


    // DRINKS
    const drinksHead = document.createElement('div');
    drinksHead.classList.add('drinksHead');
    menu.appendChild(drinksHead);

    const drinks = document.createElement('h1');
    drinks.classList.add('drinks');
    drinks.textContent = "Drinks";
    drinksHead.appendChild(drinks);

    const drinkIcon = new Image();
    drinkIcon.src = Martini;
    drinkIcon.classList.add('drinkIcon');
    drinksHead.appendChild(drinkIcon);
};

