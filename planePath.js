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
    // Oslo - Bodø
    [
        [60.19335566726187, 11.097022854113305],
        [67.26684917948292, 14.361062899409713]
    ],
    // Oslo - Bardufoss
    [
        [60.19335566726187, 11.097022854113305],
        [69.0598396837238, 18.53791101688064]
    ],
    // Oslo - Tromsø
    [
        [60.19335566726187, 11.097022854113305],
        [69.67996197252181, 18.907340503861953]

    ],
    // Oslo - Barcelona
    [
        [60.19335566726187, 11.097022854113305],
        [41.29770830725133, 2.083311848848005]
    ],
    // Oslo - København
    [
        [60.19335566726187, 11.097022854113305],
        [55.61245390334066, 12.647789494549684]
    ],
    // København - Tokyo Narita
    [
        [55.61245390334066, 12.647789494549684],
        [35.77250234673138, 140.3929670905408]
    ],
    //Tokyo Narita - Sapporo Chitose
    [
        [35.77250234673138, 140.3929670905408],
        [42.787443561590855, 141.67877453793713]
    ],
    // Trondheim - Ålesund
    [
        [63.454136845664685, 10.91735807576121],
        [62.5586291264617, 6.115283126333325]
    ],
    // Lakselv - Tromsø
    [
        [70.0670575184383, 24.98239813572595],
        [69.67996197252181, 18.907340503861953]
    ],
    // Berlin - Oslo
    [
        [52.36450567469514, 13.509293619697551],
        [60.19335566726187, 11.097022854113305],
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