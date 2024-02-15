export default function removeChildren(div) {
    const DOMTarget = div;
    DOMTarget.innerHTML = '';
}

// intention: remove all DOM children & HTML content
// For use: clear HTML before injection new
    // HTML on button click