import { antPath } from 'leaflet-ant-path';

const route = [
    new L.latLng(59.740391, 10.203090), 
    new L.latLng(59.74383311770222, 10.233028238595375),
    new L.latLng(59.7634375549731, 10.290034796969007),
    new L.latLng(59.833716718224515, 10.434333228545038),
    new L.latLng(59.89280994095815, 10.524766896497399),
    new L.latLng(59.91384179276465, 10.63739851165453),
    new L.latLng(59.922198426887185, 10.679293064397594),
    new L.latLng(59.91481418568047, 10.7303315410454),
    new L.latLng(59.911414209935366, 10.75259160306053),
    new L.latLng(59.95381501725711, 11.044585854598402),
    new L.latLng(60.19335566726187, 11.097022854113305)
]

export const trainPath = antPath(route, {
    "delay": 1000,
    "dashArray": [
        10,
        20
    ],
    "weight": 5,
    "color": "#0000FF",
    "pulseColor": "#FFFFFF",
    "paused": false,
    "reverse": false,
    "hardwareAccelerated": true
})