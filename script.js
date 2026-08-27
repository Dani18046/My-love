// Crear corazones flotantes
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Botón para entrar
document.getElementById('enter-btn').addEventListener('click', () => {
    // Efecto de transición
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'cartas.html'; // siguiente página
    }, 2000);
});
