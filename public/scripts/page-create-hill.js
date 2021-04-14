const options = {
    dragging: true,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: true,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([2.8221589, -60.673142], 14);

// create and add titleLayer and copyRight
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
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

    if (input.value == "") {
        return
    }


    // clean field
    input.value = "";

    // add clone to image conteiner
    container.appendChild(newFieldContainer)

}

function deleteField(event) {

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {

        //clean value
        span.parentNode.children[0].value = ""
        return

    }

    //delete field
    span.parentNode.remove();

}
