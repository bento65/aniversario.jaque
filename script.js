document.getElementById('surpriseBtn').addEventListener('click', function() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.style.display = 'block';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
    this.textContent = 'Te Amo';
});

document.getElementById('videoBtn').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=gP-HXBKgU-0', '_blank');
});
document.getElementById('videoBtn2').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=09EDvyhbEgo', '_blank');
});

document.getElementById('photoBtn').addEventListener('click', function() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.style.display = 'flex'; 
});
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const modal = document.getElementById('photoModal');
        const modalImg = document.getElementById('photo');
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
document.getElementById('messageBtn').addEventListener('click', function() {
    const messageContainer = document.getElementById('messageContainer');
    
    // Remove any existing content
    messageContainer.innerHTML = '';

    const paragraphs = [
        "Hoje celebramos não apenas o dia em que você nasceu, mas também a pessoa maravilhosa que você se tornou.",
        "Sua força, determinação e generosidade são inspiradoras. Você enfrenta cada desafio com graça e transforma qualquer situação com seu otimismo contagiante.",
        "Que este aniversário marque o início de um novo capítulo repleto de momentos inesquecíveis, conquistas surpreendentes e felicidade abundante.",
        "Que você continue a iluminar o caminho de todos ao seu redor com sua luz única. Saiba que sua presença é um presente inestimável em minha vida.",
        "Neste dia especial, desejo a você toda a alegria do mundo. Que seus sonhos se realizem e que cada novo dia traga novas razões para sorrir. Você merece tudo de melhor que a vida pode oferecer.",
        "Com todo meu carinho e admiração, José Bento. "
    ];

    paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        messageContainer.appendChild(p);
    });
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

 // Função que será chamada quando a página for carregada
 function saudarUsuario() {
    // Solicita o nome do usuário
    const nome = prompt("Digite seu nome:");

    // Verifica se o usuário inseriu um nome
    if (nome) {
        // Exibe uma mensagem de agradecimento com o nome do usuário
        alert(`Obrigado ${nome} por visitar minha página!`);
    } else {
        // Se o usuário não inserir um nome, exibe uma mensagem padrão
        alert("Obrigado!");
    }
}

// Adiciona um evento para chamar a função quando a página for carregada
window.onload = saudarUsuario;
