const inputText = document.getElementById('inputText');
const encryptButton = document.querySelector('.button__encrypt');
const decryptButton = document.querySelector('.button__descrypt');
const resultContainer = document.querySelector('.result');
const resultTitle = document.querySelector('.title__result');
const resultParagraph = document.querySelector('.paragraph__result');
const copyButton = document.createElement('button');

copyButton.textContent = 'Copiar';
copyButton.classList.add('button', 'button__copy', 'hidden');
resultContainer.appendChild(copyButton);

function encryptText() {
    const text = inputText.value.toLowerCase();
    const encryptedText = text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    updateResult(encryptedText, 'Texto criptografado:');
}

function decryptText() {
    const text = inputText.value.toLowerCase();
    const decryptedText = text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    updateResult(decryptedText, 'Texto descriptografado:');
}

function updateResult(text, title) {
    const imageElement = resultContainer.querySelector('.image__result')
    if (title.includes('Texto criptografado:')) {
        imageElement.classList.add('hidden');
    } else {
        imageElement.classList.remove('hidden');
    }

    copyButton.classList.remove('hidden');
    resultTitle.textContent = title;
    resultParagraph.textContent = text;
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(text);
    });
}

inputText.addEventListener('input', () => {
    if (inputText.value === '') {
        copyButton.classList.add('hidden');
    }
});

encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);
