import "./styles.css";
import logo from './assets/restaurantLogo.png';
import displayMenu from "./pages/menu";
import displayHome from "./pages/home";
import displayAbout from "./pages/about";


// HEADER CONTENT VARIABLES & DOM MANIPULATION
const headerContent = document.getElementById('headerContent');
const headLogo = new Image();
headLogo.src = logo;
headerContent.appendChild(headLogo);
console.log(headerContent);

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');



// BODY CONTENT VARIABLES AND DOM MANIPULATION 
const content = document.getElementById('content');


menuBtn.addEventListener('click', () => {
    displayMenu();
});
homeBtn.addEventListener('click', () => {
    displayHome();
});
aboutBtn.addEventListener('click', () => {
    displayAbout();
});