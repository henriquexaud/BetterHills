const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}


// create map
const map = L.map('mapid', options).setView([2.838165, -60.652934], 14);

// create and add titleLayer and copyRight
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [68, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

const popup1 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Ladeira da Getúlio <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

// create and add marker
L
    .marker([2.838165, -60.652934], { icon })
    .addTo(map);

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".hill-details > img")

    //atualizar o conteiner de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão clicado
    button.classList.add('active')
}
