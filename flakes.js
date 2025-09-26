
const imagens = document.querySelectorAll("img");

let trocou = false;

document.body.addEventListener("click", () => {
    if (!trocou) {
        imagens.forEach(img => {
            img.dataset.original = img.src;  
            img.src = "dioni.jpg";           
        });
        trocou = true;
    } else {
        imagens.forEach(img => {
            img.src = img.dataset.original;  
        });
        trocou = false;
    }
});
