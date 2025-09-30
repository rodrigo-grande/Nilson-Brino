const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;


const novasImagens = {
    "flakes.webp": "cbum1.jpeg",
    "flakes2.webp": "cbum2.jpeg",
    "flakes3.webp": "cbum3.jpeg",
    "falkes.jpeg": "cbum4.jpeg",
    "flakescalvo.jpeg": "cbum5.jpeg",
    "flakesfalkes.jpeg": "cbum6.jpeg",
    "Logo flakes.jpg": "cbumllogo.jpeg",
    "flakescima.jpeg": "cbumcima.png"
};

botaoImagens.addEventListener("click", () => {
    if (!trocou) {
        imagens.forEach(img => {
            img.dataset.original = img.src;
            const arquivo = img.src.split("/").pop(); 
            if (novasImagens[arquivo]) {
                img.src = novasImagens[arquivo];
            }
        });
        trocou = true;
    } else {
        imagens.forEach(img => {
            if (img.dataset.original) {
                img.src = img.dataset.original; // volta ao original
            }
        });
        trocou = false;
    }
});