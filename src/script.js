const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const body = document.body;

let trocaCor = false;
ctx.fillStyle = "green";

// Alterna a cor do objeto ao clicar no corpo da página
body.addEventListener("click", function() {
    if (!trocaCor) {
        ctx.fillStyle = "blue";
        trocaCor = true;
    } else {
        ctx.fillStyle = "green";
        trocaCor = false;
    }
});

// Desenho do objeto e animação básica
function step(timestamp) {
    const x = (canvas.width - 150) / 2 + Math.sin(timestamp / 1000) * 50;
    const y = (canvas.height - 100) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 150, 100);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);