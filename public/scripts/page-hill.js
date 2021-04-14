const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 14);

// create and add titleLayer and copyRight
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [68, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

// create and add marker
L
    .marker([lat, lng], { icon })
    .addTo(map);

