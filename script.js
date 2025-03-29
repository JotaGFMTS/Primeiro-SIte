// Envio do formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert('Mensagem enviada! Obrigado por entrar em contato.');
});
