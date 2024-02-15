import "./styles.css";
import logo from './assets/restaurantLogo.png';

console.log('working');



const headerContent = document.getElementById('headerContent');
const headLogo = new Image();
headLogo.src = logo;
headerContent.appendChild(headLogo);
console.log(headerContent);


const content = document.getElementById('content');