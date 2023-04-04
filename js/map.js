const mymap = L.map('mapid').setView([44.990,38.94],15.2);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG1pdHJ5a2FsaW5pbiIsImEiOiJja3RhOWxwdWYwOW51MnluaXo0a3hjdTZmIn0.-SLGDqfPUEvkmhSHt90wVQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG1pdHJ5a2FsaW5pbiIsImEiOiJja3RhYm5mOXIxa2FjMnRwZTlheTVjaGNnIn0.Jro-Yik0tAQFH2Qj9Q5XIw'
}).addTo(mymap);
const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [76, 76],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
const azsIcon = new LeafIcon({iconUrl: 'img/map-icons/azs.svg'}),
    daycareIcon = new LeafIcon({iconUrl: 'img/map-icons/daycare.svg'}),
    hospitalIcon= new LeafIcon({iconUrl: 'img/map-icons/hospital.svg'}),
    locationIcon = new LeafIcon({iconUrl: 'img/map-icons/location.svg'}),
    shopIcon = new LeafIcon({iconUrl: 'img/map-icons/shop.svg'}),
    pullIcon = new LeafIcon({iconUrl: 'img/map-icons/pull.svg'});
    
const azs = L.marker([44.989,38.924],{icon: azsIcon}).bindPopup('Заправка'),
    daycare = L.marker([44.988,38.929],{icon: daycareIcon}).bindPopup('Детский сад'),
    hospital = L.marker([44.989,38.932],{icon: hospitalIcon}).bindPopup('Больница'),
    locationPoint = L.marker([44.991,38.927],{icon: locationIcon}).bindPopup('ЖК Яблоновский');
    shop = L.marker([44.991,38.931],{icon: shopIcon}).bindPopup('Магазин'),
    pull = L.marker([44.995,38.924],{icon: pullIcon}).bindPopup('Аквапарк');

const locationGroup = L.layerGroup([azs, daycare, hospital, locationPoint, shop, pull]),
    azsGroup = L.layerGroup([azs]),
    shopGroup = L.layerGroup([shop]),
    daycareGroup = L.layerGroup([daycare]),
    hospitalGroup = L.layerGroup([hospital]),
    pullGroup = L.layerGroup([pull]);

const names={
    locationGroup,
    azsGroup,
    shopGroup,
    daycareGroup,
    hospitalGroup,
    pullGroup
}
names['locationGroup'].addTo(mymap)
document.querySelector(".layers").addEventListener("click",(e)=>{
    if(e.target.classList.contains("item__btn")){
        document.querySelectorAll(".item__btn").forEach(el=>el.classList.remove("item__btn_active"));
        e.target.classList.add("item__btn_active")
        for(key in names){names[key].remove()}
        names[e.target.dataset.layer].addTo(mymap)
        
    }
})  