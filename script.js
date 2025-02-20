// Exemplo de interação com o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Exemplo de interação com os botões de compra
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        const produto = this.parentElement.querySelector('h3').innerText;
        alert(`Você adicionou ${produto} ao carrinho!`);
        // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
    });
});