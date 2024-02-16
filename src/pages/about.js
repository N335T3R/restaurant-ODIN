import removeChildren from "../utils/removeChildren";

export default function displayAbout() {
    console.log("About page activated");

    const content = document.getElementById('content');
    removeChildren(content);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    content.appendChild(wrapper);

    const firstWord = document.createElement('p');
    firstWord.classList.add('firstWord');
    firstWord.textContent = "Lorem ";
    wrapper.appendChild(firstWord);

    const aboutUs = document.createElement('p');
    aboutUs.classList.add('aboutUs');
    aboutUs.textContent = "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    wrapper.appendChild(aboutUs);

    const sendOff = document.createElement('h1');
    sendOff.textContent = "Buon Apetit!";
    sendOff.classList.add('sendOff');
    content.appendChild(sendOff);
}
