import removeChildren from "../utils/removeChildren";

export default function displayHome() {
    console.log("Home page activated");
    const content = document.getElementById('content');
    removeChildren(content);
}