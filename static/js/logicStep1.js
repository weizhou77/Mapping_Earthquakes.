// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
// from the Leaflet Quick Start Guide page, change the gergraphical center of the map to the US

//let map = L.map('mapid').setView([40.7,-94.5], 4); //([centerLatitude, centerLontitude], zoomLevel)

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'streets-v11',
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
// ********* for 'Add Multiple Maps' section, we dont add the streets.addTo(map);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! for other sections, we need to uncomment it.

// streets.addTo(map);

// above: we call the addTo() function with our map object, map on our graymap object tile layer
// the addTo() function will add the graymap object tile layer to our let map

//******************************** */
// For Mapping Multiple GeoJSON Points
//****************************** */
// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/weizhou77/Mapping_Earthquakes./main/majorAirports.json"


// ******************************** 
//Add a Marker to the Map
//*********************************** */
// from the Leaflet Quick Start Guide under the "Markers, circles and polygons"
// add a marker to the map for Los Angeles,CA

// let marker = L.marker([34.0522, -118.2437]).addTo(map);


//********************************* */ 
// Add a circle to the map

//L.circle([34.0522,-118.2437], {
  //  radius:100
// }).addTo(map);

// alternative function to make a circle
//L.circleMarker([34.0522, -118.2437],{
  //  radius :300,
    //color: "black", // the circle edge
    //fillColor :'#ffffa1' // the color inside the circle
//}).addTo(map);

//********************************** */
// Add multiple markers

// to add multiple markers, we have to iterate through the array and add each latitude and longitude to the map
// An array containing each city's location, state, and population.

// Get data from cities.js
let cityData = cities;

  // Loop through the cities array and create one marker for each city
  //cityData.forEach(function(city) {
    //  console.log(city)
    //  L.marker(city.location)
      // we use bindPopup() method to show data of each cities on the map
    //  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    //  .addTo(map);  
    //});

// **************************
// use the radius circle to represent the population for each city
//cityData.forEach(function(city) {
  //    console.log(city)
    //  L.circleMarker(city.location,{
      //    radius: city.population/100000
      //})
      //we use bindPopup() method to show data of each cities on the map
     // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
     // .addTo(map);  
    //});

// *********************************
// Mapping a single Line

// map a airline route from LA to SF
// coordinates for each point to be used in the line
//let line = [
  //  [33.9416,-118.4085],
  //  [37.6213,-122.3790]
//];

// Create a polygon using the line coordinates and make the line red
//L.polyline(line,{
  //  color:"red"
//}).addTo(map);

//****************** */
// Map multiple lines


// Coordinates for each point to be used in the polyline.
//let line = [
  //  [33.9416, -118.4085],
    //[37.6213, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
  //];

// Create a polyline using the line coordinates and make the line yellow.
//L.polyline(line, {
  //  color: "yellow"
 //}).addTo(map);

 //****************************** */
 //Map a GeoJSON point

 // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}} // reverse order, becaue GeoJSON data coordinates are set with the first parameter as X(longitude) and second parameter as Y(latitude).
// ]};

// create the GeoJSON layer and add it to out map
// L.geoJSON(sanFranAirport).addTo(map);

//Build a popup tp the marker

// // Grabbing our GeoJSON data
// L.geoJSON(sanFranAirport,{
//     // We turn each feature into a marker on the map
//     pointToLayer : function(feature, latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2> <hr><h3>" + feature.properties.city + "," + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

// Grabbing our GeoJSON data
// L.geoJSON(sanFranAirport, {
//     onEachFeature : function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>" + "Airport code:" + feature.properties.faa + "</h3> <hr><h3>" + "Airport name: " + feature.properties.name + "</h3>");
//     }
// }).addTo(map);

//************************************** */
// Mapping Multiple GeoJSON Points
//*************************************** */

//******************************** */
// For Mapping Multiple GeoJSON Points
//****************************** */
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/weizhou77/Mapping_Earthquakes./main/majorAirports.json"


//Grabbing our GeoJSON data
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJSON(data).addTo(map);
// });

// **********************************
// Add Multiple Maps, or multile base layers and overlays
// **********************************

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'dark-v10',
    accessToken: API_KEY
});

// Create a base layer that holds both maps
// let baseMaps = {
//   Street: streets,
//   Dark : dark
// };

// create the map object with center, zoom level and default layer
// let map = L.map('mapid', {
//   center : [30,30],
//   zoom:2,
//   layers:[streets]
// });

// Pass our map layers into our layers control and add the layers control to the map
// L.control.layers(baseMaps).addTo(map);

//*************************** */
// Mapping GeoJSON LineStrings
// ******************************

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/weizhou77/Mapping_Earthquakes./main/torontoRoutes.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);

// // Create a style for the lines
// let myStyle  = {
//   color: "#ffffa1",
//   weight:2 // thickness of the linestring?
// };

// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//   style:myStyle,
//   onEachFeature : function(feature, layer) {
//     layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
//     + feature.properties.dst + "</h3>");
//   }
// }).addTo(map);
// });

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'light-v10',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});

// let baseMaps = {
//   Light: light,
//   Dark : dark
// };


// let map = L.map('mapid', {
//   center : [44.0,-80.0],
//   zoom:2,
//   layers:[light]
// });

// L.control.layers(baseMaps).addTo(map);


//************************** */
// Mapping GeoJSON Polygon
//**************************

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/weizhou77/Mapping_Earthquakes./main/torontoNeighborhoods.json";

// // Grabbing our GeoJSON data
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   //Creating a GeoJSON layer with the retrieved data
//   L.geoJSON(data, {
//     onEachFeature : function(feature, layer) {
//       layer.bindPopup("<h3> Neighborhood: "+ feature.properties.AREA_NAME + "</h3>")
//     }
//   }).addTo(map);
// });

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});


//Create a base layer that holds both maps
// let baseMaps ={
//   "Streets" : streets,
//   "Satellite Streets" : satelliteStreets
// };

// Create a map object with the center, zoom level and default layer
// let map = L.map('mapid', {
//   center :[43.7,-79.3],
//   zoom:11,
//   layers:[satelliteStreets]
// });

// Pass out map layers into our layer control and add the layer control to the map
// L.control.layers(baseMaps).addTo(map);

//*************************************************** */
// Add Earthquake Data to a Map
//*************************************************** */

// create a base layer that holds both maps.
let baseMaps = {
  "Streets" : streets,
  "Satellite" : satelliteStreets
};

let map = L.map('mapid', {
  center: [39.5,-98.5],
  zoom:3,
  layers:[streets]
});

// pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});