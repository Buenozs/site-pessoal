document.getElementById("form-contato")
.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    try {
        const response = await fetch("http://localhost:3000/enviar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, mensagem })
        });

        const data = await response.json();
        alert(data.message);

    } catch (error) {
        alert("Erro ao enviar mensagem.");
    }
});
