// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
// from the Leaflet Quick Start Guide page, change the gergraphical center of the map to the US
let map = L.map('mapid').setView([34.0522,-118.2437],14);
// above: 'mapid' will reference the id tag in our <div> element on the index.html file
// setView() method sets the view of the map with a geographical center
// where the latitude is 40.7 and longitude  -94.5
// zoom level of '4' on a scale of 0-18

// alternative to using the setView()
// we use this method when we need to add multiple tile layers or a background image of our map

//let map = L.map("mapid", {
 //   center : [
   //     40.7,-90.5
    //],
    //zoom:4
//});

// Add a tile layer for our map
// copy from the Leaflet Quick Start Guide
// We create the tile layer that will be the background of our map.
// the first link is the mapbox styles, we can check the mapbox Docs - mapbox styles website to check
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// above: Leaflet doesnt provide a tile layer, instead, it offers various tile layer APIs
// API URL with a reference to the assceeToken
// the id attribute and assign it mapbox/streets-v11 which will show the streets on the map
// we add the accessToken attribute and asign it the value of our API_KEY
// map id styles: 
//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// above: we call the addTo() function with our map object, map on our graymap object tile layer
// the addTo() function will add the graymap object tile layer to our let map

// Add a Marker to the Map
// from the Leaflet Quick Start Guide under the "Markers, circles and polygons"
// add a marker to the map for Los Angeles,CA

// let marker = L.marker([34.0522, -118.2437]).addTo(map);


// Add a circle to the map

//L.circle([34.0522,-118.2437], {
  //  radius:100
// }).addTo(map);

// alternative function to make a circle
L.circleMarker([34.0522, -118.2437],{
    radius :300,
    color: "black", // the circle edge
    fillColor :'#ffffa1' // the color inside the circle
}).addTo(map);

