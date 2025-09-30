const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;


const novasImagens = {
    "flakes.webp": "dantes1.jpeg",
    "flakes 2.webp": "dantes2.jpeg",
    "flakes 3.webp": "dantes3.jpeg",
    "falkes.jpeg": "dantes4.jpeg",
    "flakescalvo.jpeg": "dantes5.jpeg",
    "flakesfalkes.jpeg": "dantes6.jpeg",
    "Logo flakes.jpg": "danteslogo.jpeg",
    "flakescima.jpeg": "dantescima.jpeg"
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