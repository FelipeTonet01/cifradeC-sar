function cifrar(texto, chave) {
    let resultado = "";
    chave = parseInt(chave);

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Verifica se é uma letra maiúscula
        if (char.match(/[A-Z]/)) {
            let codigo = ((char.charCodeAt(0) - 65 + chave) % 26) + 65;
            resultado += String.fromCharCode(codigo);
        }
        // Verifica se é uma letra minúscula
        else if (char.match(/[a-z]/)) {
            let codigo = ((char.charCodeAt(0) - 97 + chave) % 26) + 97;
            resultado += String.fromCharCode(codigo);
        }
        // Se não for letra (espaço, número, ponto), mantém igual
        else {
            resultado += char;
        }
    }
    return resultado;
}

function decifrar(texto, chave) {
    // A lógica inversa: mover para trás no alfabeto
    return cifrar(texto, 26 - (chave % 26));
}

// --- FUNÇÕES QUE OS BOTÕES CHAMAM ---

function executarCriptografia() {
    // Pega o texto digitado no campo de cima
    const msg = document.getElementById("textoOriginal").value;
    const k = document.getElementById("chave").value;
    
    // Criptografa
    const res = cifrar(msg, k);
    
    // Joga o resultado no campo de baixo
    document.getElementById("textoCifrado").value = res;
}

function executarDescriptografia() {
    // Pega o texto criptografado do campo de baixo
    const msgCifrada = document.getElementById("textoCifrado").value;
    const k = document.getElementById("chave").value;
    
    // Descriptografa
    const res = decifrar(msgCifrada, k);
    
    // Joga o resultado de volta no campo de cima
    document.getElementById("textoOriginal").value = res;
}