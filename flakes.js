const container = document.getElementById('fotos');
    const imagens = container.getElementsByTagName('img');

    const fotosOriginais = ["flakes 2.webp", "flakes 3.webp", "flakes.webp","flakescalvo.jpeg","falkes.jpeg","flakescalvo.jpeg"];
    const novasFotos = ["dioni.jpg", "dioni.jpg", "dioni.jpg"];
    




    let trocou = false;

    container.addEventListener('click', () => {
        if (!trocou) {
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].src = novasFotos[i];
            }
            trocou = true;
        } else {
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].src = fotosOriginais[i];
            }
            trocou = false;
        }
    });