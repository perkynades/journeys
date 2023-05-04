import './style.css'
import trainPaths from './trainPath';
import planePaths from './planePath'

document.querySelector('#app').innerHTML = `
  <div id="map"></div>
`

const map = L.map('map').setView([60.189579, 11.105640], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

trainPaths.forEach(trainPath => map.addLayer(trainPath))

planePaths.forEach(planePath => map.addLayer(planePath))