function appendLi (msg) {
    const consoleTag = document.querySelector('#console');
    const newLine = `<li>
        <span>${type(msg)}</span> 
        <pre>${JSON.stringify(msg, null, '  ')}</pre>
    </li>`;
    consoleTag.innerHTML = consoleTag.innerHTML + newLine;
}
console.log = function (...args) {
    try {
        args.forEach((msg) => {
            appendLi(msg);
        });
    } catch (e) {
        appendLi(e);
    }
}