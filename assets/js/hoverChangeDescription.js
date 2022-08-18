export function hoverChangeDescription(nameCard, text){
    var changeDescription= document.querySelector(".changeDescription");

    document.querySelector(nameCard) .addEventListener("mousevoer", () => {
        changeDescription.innerHTML=text;
    });

document.querySelector(nameCard).addEventListener("mouseover",() => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;

}
)
}