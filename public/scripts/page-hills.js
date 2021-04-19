const options = {
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    zoomControl: false

}

// create map
const map = L.map('mapid', options).setView([2.8221589, -60.673142], 14);

// create and add titleLayer and copyRight
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [68, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

function addMarker({ id, name, lat, lng }) {


    // create popup overlay
    const popup1 = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href = "hill?id=${id}" ><img src="/images/arrow-white.svg"></a>`)

    // create and add marker
    L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup1);
}

const hillsSpan = document.querySelectorAll('.hills-hidden span')
hillsSpan.forEach(span => {

    const hill = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(hill)
})