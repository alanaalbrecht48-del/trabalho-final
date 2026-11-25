
// Função para comprar um produto
function comprar(produto) {

    alert("Você escolheu: " + produto);

    alert("Entre em contato para finalizar seu pedido!");
}


function fazerLogin(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == "" || senha == "") {

        alert("Preencha todos os campos!");

    } else {

        alert("Login demonstrativo realizado com sucesso!");

        window.location.href = "index.html";

    }

}