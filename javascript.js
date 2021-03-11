
let myMap1 = L.map('myMap1').setView([41.3858148, 2.1692236],14)


L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap1);
    

let myMap2 = L.map('myMap2').setView([41.387008195037005, 2.1660524696550834],14)

L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap2);   

let marcador = L.marker([41.387008195037005, 2.1660524696550834]).addTo(myMap2)

marcador.bindPopup("<b>Restaurant Centfocs</b><br> <p> Restaurante mediterráneo <br> Carrer de Balmes, 16, 08007, Barcelona </p>").openPopup();
    