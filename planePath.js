import { antPath } from 'leaflet-ant-path';

const planeRoutes = [
    // Oslo - Ålesund
    [
        [60.19335566726187, 11.097022854113305],
        [62.5586291264617, 6.115283126333325],
    ],
    // Oslo - Kristansund
    [
        [60.19335566726187, 11.097022854113305],
        [63.114081426401384, 7.825450872135551]
    ],
    // Oslo - Trondheim
    [
        [60.19335566726187, 11.097022854113305],
        [63.454136845664685, 10.91735807576121]
    ],
    // Trondheim - Ålesund
    [
        [63.454136845664685, 10.91735807576121],
        [62.5586291264617, 6.115283126333325]
    ]
]

const planePaths = []

planeRoutes.forEach(route => {
    planePaths.push(antPath(route, {
        "delay": 1000,
        "dashArray": [
            10,
            20
        ],
        "weight": 5,
        "color": "#FF0004",
        "pulseColor": "#FFFFFF",
        "paused": false,
        "reverse": false,
        "hardwareAccelerated": true
    }))
})

export default planePaths