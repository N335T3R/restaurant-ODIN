export default function removeChildren(element) {
    const node = element;
    node.innerHTML = '';
}

// intention: remove all DOM children & HTML content
// For use: clear HTML before injection new
    // HTML on button click