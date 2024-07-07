// script.js
function updateCount() {
    let text = document.getElementById('inputText').value;

    document.getElementById('charCount').innerText = text.length;
    document.getElementById('wordCount').innerText = (text.match(/\b\w+\b/g) || []).length;
    document.getElementById('sentenceCount').innerText = (text.match(/[^\.!\?]+[\.!\?]+/g) || []).length;
    document.getElementById('paragraphCount').innerText = (text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0)).length;
    document.getElementById('spaceCount').innerText = (text.match(/\s/g) || []).length;
    document.getElementById('letterCount').innerText = (text.match(/[a-zA-Z]/g) || []).length;
    document.getElementById('digitCount').innerText = (text.match(/\d/g) || []).length;
    document.getElementById('specialCharCount').innerText = (text.match(/[^\w\s]/g) || []).length;
}
