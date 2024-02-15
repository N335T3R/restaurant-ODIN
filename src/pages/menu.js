import removeChildren from "../utils/removeChildren";
// Above function needs work;
// see ../utils/removeChildren

import Martini from "../assets/martini.png";
import Plate from "../assets/plate.png";



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

    const mixedDrink = document.createElement('li');
    mixedDrink.textContent = "mixed drinks";
    drinkList.appendChild(mixedDrink);

    const domestics = document.createElement('li');
    domestics.textContent = "domestics";
    drinkList.appendChild(domestics);

    const imports = document.createElement('li');
    imports.textContent = "imports";
    drinkList.appendChild(imports);


    // drinkPrices
    const priceList = document.createElement('ul');
    priceList.classList.add('priceList');
    drinksContent.appendChild(priceList);

    const mixedP = document.createElement('li');
    mixedP.textContent = "$7";
    priceList.appendChild(mixedP);

    const domesticP = document.createElement('li');
    domesticP.textContent = "$3.50";
    priceList.appendChild(domesticP);

    const importsP = document.createElement('li');
    importsP.textContent = "$4.50";
    priceList.appendChild(importsP);
    // END DRINKS CONTENT
    // END DRINKS


    // FOOD

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('foodMenu');
    menu.appendChild(foodMenu);

    // food HEADER
    const foodHeader = document.createElement('div');
    foodHeader.classList.add('foodHeader');
    foodMenu.appendChild(foodHeader);

    const food = document.createElement('h1');
    food.textContent = "food";
    foodHeader.appendChild(food);

    const plate = new Image();
    plate.src = Plate;
    plate.classList.add('plate');
    foodHeader.appendChild(plate);
    // end food HEADER
    // END FOOD 
    
};

