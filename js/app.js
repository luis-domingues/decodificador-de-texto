document.getElementById('criptografar').addEventListener('click', function () {
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoCriptografado = criptografar(textoEntrada);
    document.getElementById('textoResultado').value = textoCriptografado;
});

document.getElementById('descriptografar').addEventListener('click', function () {
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoDescriptografado = descriptografar(textoEntrada);
    document.getElementById('textoResultado').value = textoDescriptografado;
});

document.getElementById('copiarResultado').addEventListener('click', function () {
    let textoResultado = document.getElementById('textoResultado');
    textoResultado.select();
    document.execCommand('copy');
});

function criptografar(texto) {
    let textoCriptografado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
}

function descriptografar(texto) {
    let textoDescriptografado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
}


const botaoCopiar = document.getElementById("copiarResultado");

botaoCopiar.addEventListener("click", () => {
    const textoResultado = document.getElementById("textoResultado").value;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoResultado).then(() => {
            alert("Texto copiado com sucesso!");
        })
            .catch(error => {
                console.error("Erro ao copiar o texto:", error);
                alert("Falha ao copiar o texto. Tente novamente.");
            });
    }
});