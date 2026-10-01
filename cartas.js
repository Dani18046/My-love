// Lista de cartas (12)
const cartas = [
  { titulo: "💫02 July: We meet.....", contenido: `<p>💌We met on 29 May in the most unexpected place, but thank God we found each other. I never thought that, starting that day, my life would change in a such a beautiful way. I met a girl with an incredible personality and unmatched beauty, before long, I fell in love with you, with who are and since then, my life has been more beautiful........🩷Link: <a href="https://dani18046.github.io/Bombon/" target="_blank"> Bombon 🍓 </a> </p><img src="imagen1.png" alt="Carta 1">` },
  { titulo: "❤️02 August: Learning from you.....", contenido: `<p>💕With each passing day. I am more and more amazed by you. Even though we don't speak the same language. I undersrabd every part of you, and I truly admire you because you teach me what it means to be both tender and strong at the same time. you are the person wuth whom I want to keep making memories and building a life togheter...🩷Link: <a href="https://dani18046.github.io/Rei/" target="_blank"> Promise 🍓 </p><img src="imagen2.png" alt="Carta 2">` },
  { titulo: "🌹02 September: I really like you....", contenido: `<p>✨I really like your personality and your beauty. I love every part of you, it's so lovely: Your face, your eyes, your cheeks, your lips, your nose, your forehead, your body. I love everithing about you and every time I see you, I love admiring how pretty you are. I can't believe I have a girlfriend who is so pretty in every way, my universe......  😮‍💨Link: <a href="https://dani18046.github.io/galaxy/" target="_blank"> Pretty 😮‍💨 </p><img src="imagen3.png" alt="Carta 3">` },
  { titulo: "💖02 October: A future together....", contenido: `<p>💕A life together—that is the promise and the commitment. I will love you every day of my life and always win your heart anew; I promise to respect you at all times and to make all decisions together. Not everything is perfect, but being together is the most beautiful gift God has given me.......💍Link: <a href="https://dani18046.github.io/universe/" target="_blank"> Together Forever ✨💍 </p><img src="imagen4.jpg" alt="Carta 4">` },
  { titulo: "💕02 November:", contenido: `<p>🌙Soon......🫵</p><iframe width="100%" height="315"
src="Link:"
title="Video 1" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "🦊02 December:", contenido: `<p>❤️Soon.....🫵</p><iframe width="100%" height="315"
src="Link:"
title="Video 2" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "🌹02 January:", contenido: `<p>💘Soon.....🫵</p><img src="imagen5.jpg" alt="Carta 5">` },
  { titulo: "💞02 February:", contenido: `<p>💕Soon.....🫵</p><iframe width="100%" height="315"
src="Link:"
title="Video 3" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "💌02 March:", contenido: `<p>🌹Soon......🫵</p></p><iframe width="100%" height="315"
src="Link:"
title="Video 4" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "✨02 April:", contenido: `<p>💫Soon......🫵</p><img src="imagen6.jpg" alt="Carta 6">` },
  { titulo: "💫02 May:", contenido: `<p>💞Soon.....🫵</p><iframe width="100%" height="315"
src="Link:"
title="Video 5" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` },
  { titulo: "💖02 June:", contenido: `<p>💘Soon.....🫵</p><iframe width="100%" height="315"
src="Link:"
title="Video 6" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>` }
];

const cartasContainer = document.getElementById("cartas-container");
let cartasLeidas = 0;

// Crear las 12 cartas
cartas.forEach((carta, i) => {
  const div = document.createElement("div");
  div.classList.add("carta");
  div.textContent = "💗";
  div.addEventListener("click", () => abrirCarta(carta.titulo, carta.contenido, div));
  cartasContainer.appendChild(div);
});

const modal = document.getElementById("modal");
const tituloCarta = document.getElementById("titulo-carta");
const contenidoCarta = document.getElementById("contenido-carta");
const closeModal = document.querySelector(".close");

function abrirCarta(titulo, contenido, cartaDiv) {
  tituloCarta.textContent = titulo;
  contenidoCarta.innerHTML = contenido;
  modal.style.display = "flex";

  // Marca la carta como leída
  if (!cartaDiv.classList.contains("leida")) {
    cartaDiv.classList.add("leida");
    cartasLeidas++;
    if (cartasLeidas === cartas.length) mostrarMensajeFinal();
  }
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Modal de pantalla completa
const fullscreenModal = document.createElement("div");
fullscreenModal.classList.add("fullscreen-modal");
fullscreenModal.innerHTML = `<span>&times;</span><div id="fullscreen-content"></div>`;
document.body.appendChild(fullscreenModal);

fullscreenModal.querySelector("span").addEventListener("click", () => {
  fullscreenModal.style.display = "none";
  fullscreenModal.querySelector("#fullscreen-content").innerHTML = "";
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".modal-content img, .modal-content video")) {
    const src = e.target.src;
    const tipo = e.target.tagName.toLowerCase();
    fullscreenModal.style.display = "flex";
    fullscreenModal.querySelector("#fullscreen-content").innerHTML =
      tipo === "img"
        ? `<img src="${src}" alt="imagen ampliada">`
        : `<video src="${src}" controls autoplay></video>`;
  }
});

// Mostrar mensaje final
function mostrarMensajeFinal() {
  const mensajeFinal = document.getElementById("mensaje-final");
  mensajeFinal.style.display = "block";

  const btnFinal = document.getElementById("btn-final");
  btnFinal.addEventListener("click", () => {
    window.location.href = "final.html"; // redirige a la última página
  });
}













