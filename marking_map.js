// "L" is default because i used leaflet.js

var mymap = L.map('mapid').setView([21.14981,79.08204], 5);
/*setview([latitude,longitude],zoom value) latitude is positive for north and negative
for south whereas lonitude is positive for east and negative for west
and lower the zoom value wider the map
*/

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

//marker is just a pin and it has popup showing city name eg.,Kolkata
L.marker([22.56775, 88.34759]).addTo(mymap)
  .bindPopup("<b>Kolkata</b>").openPopup();

//circle is to show the area covered the radius of circle depends on two
//which i multiplied
L.circle([28.61419, 77.20226], 150*250, {
      color: 'blue',
      fillColor: '#bada55',
      fillOpacity: 0.4
  }).addTo(mymap).bindPopup("<b>Delhi</b>");


//polygon is used to create different shapes
  L.polygon([
      [12.86982,74.84299],
      [11.00182,76.96283],
      [8.44266, 76.94462]  //the no. of latitude and longititude u give will
      //form that shape here i gave 3 diferent latitude and longitude so
      //i formed a triangle if had given rectangle then it would form rectangle
      //oor square
    ]).addTo(mymap).bindPopup("<b>Kerala</b>");
