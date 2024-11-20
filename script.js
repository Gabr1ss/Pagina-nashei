const gamesInfo = {
    sekiro: {
        title: "Sekiro: Shadows Die Twice",
        description: "Sekiro es un juego que destacó por su innovación en la jugabilidad y su dificultad desafiante. Fue desarrollado por FromSoftware, conocido por crear experiencias exigentes. El juego combina combate preciso y estratégico, con mecánicas de sigilo y exploración, todo en un mundo inspirado en el Japón feudal.",
        image: "assets/sekiro-modal.jpg",
    },
    tlou2: {
        title: "The Last of Us Part II",
        description: " Este juego, desarrollado por Naughty Dog, fue ampliamente elogiado por su narrativa, que aborda temas de venganza, redención y el costo emocional de las decisiones difíciles. La calidad gráfica y la inmersión en el mundo post-apocalíptico también fueron sobresalientes. The Last of Us Part II fue controversial por su enfoque en los personajes y su historia, pero el nivel de detalle en la producción, la evolución de los personajes y la jugabilidad refinada lo convirtieron en uno de los títulos más impactantes de la década",
        image: "assets/tlou2-modal.jpg",
    },
    eldenRing: {
        title: "Elden Ring",
        description: " Elden Ring es otro título de FromSoftware, pero esta vez con la colaboración del escritor George R. R. Martin. El juego marcó un hito en el mundo de los RPGs de mundo abierto, con un diseño de niveles impresionante que premiaba la exploración y ofrecía una sensación de libertad sin igual. La dificultad característica de FromSoftware estuvo presente, pero con un mundo vasto y rico en lore, que atrapó tanto a nuevos jugadores como a los veteranos de la serie. La innovación de la narrativa abierta y la integración de mecánicas de combate pulidas, junto con su impactante banda sonora y gráficos",
        image: "assets/eldenring-modal.jpg",
    },
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

document.querySelectorAll("[data-game]").forEach((gameCard) => {
    gameCard.addEventListener("click", () => {
        const gameKey = gameCard.getAttribute("data-game");
        const gameData = gamesInfo[gameKey];

        if (gameData) {
            modalTitle.textContent = gameData.title;
            modalDescription.textContent = gameData.description;

            if (gameData.image) {
                modalImage.src = gameData.image;
                modalImage.alt = `Imagen de ${gameData.title}`;
                modalImage.classList.remove("hidden");
            } else {
                modalImage.classList.add("hidden");
            }

            modal.classList.remove("hidden");
        }
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
    
});
