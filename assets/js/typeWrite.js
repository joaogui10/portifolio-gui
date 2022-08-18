export function typeWrite (elemento){
    const textoArray = elemento.innerHTML.slipt("");
    elemento.innerHTML = " ";
    textoArray.forEach ( function(letra, i ){
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i );
    });
}