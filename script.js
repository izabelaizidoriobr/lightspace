function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Seleciona todos os itens da FAQ
const faqItems = document.querySelectorAll('.faq-item');

// Adiciona um evento de clique a cada pergunta
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Alterna a classe "open" para expandir/recolher
        item.classList.toggle('open');

        // Fecha os outros itens, se necessário
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
            }
        });
    });
});
