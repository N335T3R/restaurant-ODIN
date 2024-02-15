import Martini from "../assets/martini.png";

export default function displayMenu() {
    console.log('Menu page activated');

    const content = document.getElementById('content');
    

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);




    // DRINKS
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('drinkMenu');
    menu.appendChild(drinkMenu);

    // DRINKS HEAD
    const drinksHead = document.createElement('div');
    drinksHead.classList.add('drinksHead');
    drinkMenu.appendChild(drinksHead);

    const drinks = document.createElement('h1');
    drinks.classList.add('drinks');
    drinks.textContent = "Drinks";
    drinksHead.appendChild(drinks);

    const drinkIcon = new Image();
    drinkIcon.src = Martini;
    drinkIcon.classList.add('drinkIcon');
    drinksHead.appendChild(drinkIcon);
    // END DRINKS HEAD


    // DRINKS CONTENT
    const drinksContent = document.createElement('div');
    drinksContent.classList.add('drinksContent');
    drinkMenu.appendChild(drinksContent);

    // drink names
    const drinkList = document.createElement('ul');
    drinkList.classList.add('drinkList');
    drinksContent.appendChild(drinkList);

    const martini = document.createElement('li');
    martini.textContent = "martini";
    drinkList.appendChild(martini);


    // drinkPrices
    const priceList = document.createElement('ul');
    priceList.classList.add('priceList');
    drinksContent.appendChild(priceList);

    const martiniP = document.createElement('li');
    martiniP.textContent = "$7";
    priceList.appendChild(martiniP);
};

