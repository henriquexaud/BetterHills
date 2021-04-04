const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([2.8221589, -60.673142], 14);

// create and add titleLayer and copyRight
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/marker-icon.png",
    iconSize: [68, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker

map.on('click', (event) => {

    // console.log(event)

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)


    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)

})

// images upload 

function addPhotoField() {

    // select image conteiner #Images
    const container = document.querySelector('#images')

    // select conteiner to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // last image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verified field
    const input = newFieldContainer.children[0]
    console.log(input == "")

    //if (input.value == "") {
    //return
    //}

    // clean field
    input.value = "";

    // add clone to image conteiner
    container.appendChild(newFieldContainer)

}
