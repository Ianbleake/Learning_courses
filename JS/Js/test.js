window.addEventListener('load', () => {
    function cambiarColorUltimaPalabra() {
        var elemento = document.querySelector('.content-list__title');
        var elementos = document.querySelector('.section-category__title');
        var palabras = elemento.innerText.split(' ');
        var palabras2 = elementos.innerText.split(' ');
        var ultimaPalabra = palabras.pop();
        var ultimasPalabras = palabras2.slice(-2);
        
        elemento.innerHTML = palabras.join(' ') + ' <span style="color: #53941f;">' + ultimaPalabra + '</span>';
        elementos.innerHTML = palabras2.slice(0, -2).join(' ') + ' <span style="color: #53941f;">' + ultimasPalabras.join(' ') + '</span>';
    }
    
    cambiarColorUltimaPalabra();
});


