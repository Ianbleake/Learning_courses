window.addEventListener('load',() => {
    const style = 'background: rgb(102,188,208);background: linear-gradient(0deg, rgba(102,188,208,1) 0%, rgba(33,26,232,1) 100%);';
    console.log("%c Desarrollado por BleakeDev",style)

    var raiz = document.querySelector('html');
    var firma = document.createComment("Desarrollado por Bleakedev");

    raiz.parentNode.insertBefore(firma,raiz)
});