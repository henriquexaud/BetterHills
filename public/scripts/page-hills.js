// create map
const map = L.map('mapid').setView([2.8221589, -60.673142], 14);

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

// create popup overlay
const popup1 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Ladeira da Getúlio <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

const popup2 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Pista do Anauá <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

const popup3 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Ladeira do Canteiro <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

const popup4 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Pista do Senna <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

const popup5 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Quadras Abandonadas <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

const popup6 = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Ladeira do Barro <a href = "hill?id=1" class= "choose-hill" ><img src="/images/arrow-white.svg"></a>')

// create and add marker
L
    .marker([2.838165, -60.652934], { icon })
    .addTo(map)
    .bindPopup(popup1);

L
    .marker([2.838500, -60.681833], { icon })
    .addTo(map)
    .bindPopup(popup2);

L
    .marker([2.862928, -60.659099], { icon })
    .addTo(map)
    .bindPopup(popup3);

L
    .marker([2.832520, -60.685648], { icon })
    .addTo(map)
    .bindPopup(popup4);

L
    .marker([2.841599, -60.676589], { icon })
    .addTo(map)
    .bindPopup(popup5);

L
    .marker([2.863139, -60.656523], { icon })
    .addTo(map)
    .bindPopup(popup6);

