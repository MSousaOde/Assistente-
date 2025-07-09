
function enviarComando() {
    const input = document.getElementById('userInput').value;
    const resposta = document.getElementById('resposta');

    fetch("https://msousaode.github.io/Assistente-/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: input })
    })
    .then(res => res.json())
    .then(data => resposta.innerText = data.resposta)
    .catch(err => resposta.innerText = "Erro ao se conectar com a Laura.");
}
