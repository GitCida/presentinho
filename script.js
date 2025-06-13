const motivos = [
    "Você me faz rir e fica comigo, mesmo quando estou cansada.",
    "Seu abraço é o meu lugar favorito. Me sinto segura e protegida.",
    "Tem as melhores cantadas 😳",
    "Você é meu porto seguro.",
    "Você me apoia em tudo que eu faço.",
    "Tem o sorriso mais lindo do mundo 😍.",
    "Seus olhos brilham quando fala do que ama. E é lindo demais. 😋",
    "Você me escuta de verdade.",
    "Sua voz me acalma.",
    "Você é gentil com todos. (Mesmo que eu ache que Jiu-Jitsu não seja tão carinhoso 😅).",
    "Sabe me fazer sentir especial.",
    "A gente se entende com um olhar.",
    "Tem um coração enorme.",
    "É meu parceiro pra tudo.",
    "Sempre me surpreende com gestos pequenos.",
    "É meu cavalheiro (com H).",
    "Seu jeito bobo me encanta.",
    "Adoro quando você filosofa do nada (eu existo? 🤔).",
    "Você é minha pessoa favorita no mundo.",
    "Com você, tudo é mais leve.",
    "Você me inspira a me conhecer melhor.",
    "Você me faz aproxima de Deus. ❤️",
    "Faz meu dia melhor só por estar nele.",
    "Espero que nosso relacionamento acabe... No Vaticano (não levou um susto, levou?)",
    "Seu carinho é o melhor remédio.",
    "Você vai me defender pra toda vida (Um dia eu aprendo a lutar. Com você e por você.)",
    "Você tem o melhor beijo.(e nem invente de começar uma briga, nunca beijei outra pessoa viu?) 😘",
    "Me sinto abençoada por Deus por ter você.",
    "Você é o amor da minha vida.",
    "Eu te amo, e isso nunca vai mudar. Nunquinha."
];

let index = 0;
const motivoDiv = document.getElementById("motivo");
const botao = document.getElementById("botao");

function typeWriter(texto, i = 0, callback) {
    if (i === 0) {
    motivoDiv.textContent = "";
    botao.disabled = true; 
    }
    if (i < texto.length) {
    motivoDiv.textContent += texto.charAt(i);
    setTimeout(() => typeWriter(texto, i + 1, callback), 30);
    } else {
    if (callback) callback();
    }
}

botao.addEventListener("click", () => {
    if (index < motivos.length) {
    typeWriter(motivos[index], 0, () => {
        botao.disabled = false; 
    });
    index++;
    } else {
    typeWriter("🌹 Fim dos 30 motivos 🌹\nEu te amo! Feliz Dia dos Namorados!", 0, () => {
        botao.disabled = true;
        botao.style.backgroundColor = "#ccc";
setTimeout(() => {
        document.getElementById("mural").style.display = "block";
        }, 1500);
    });
}
});
