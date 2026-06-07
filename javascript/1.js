const fotos = [
        "img/barca.webp",
        "img/arsenal-campeon.png",
        "img/psg.jpg",
        "img/inter.webp",
        "img/bayern.avif"
    ];
    let i = 0;
    function cambiar(dir) {
        i = (i + dir + fotos.length) % fotos.length;
        document.getElementById('foto').src = fotos[i];
    }