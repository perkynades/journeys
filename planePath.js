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
    // Oslo - Stavanger
    [
        [60.19335566726187, 11.097022854113305],
        [58.88268792440138, 5.629481602462913]
    ],
    // Stavanger - Aberdeen
    [
        [58.88268792440138, 5.629481602462913],
        [57.20384278980261, -2.1999252110199556]
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
    // Oslo - Alicante
    [
        [60.19335566726187, 11.097022854113305],
        [38.285067075866145, -0.560990101013187]
    ],
    // Oslo - Frankfurt
    [
        [60.19335566726187, 11.097022854113305],
        [50.038909035703625, 8.563277303154631]
    ],
    // Frankfurt - Vernoa
    [
        [50.038909035703625, 8.563277303154631],
        [45.39726643705018, 10.885795202642884]
    ],
    // Oslo - København
    [
        [60.19335566726187, 11.097022854113305],
        [55.61245390334066, 12.647789494549684]
    ],
    // Oslo - London Heathrow
    [
        [60.19335566726187, 11.097022854113305],
        [51.47059732016339, -0.4541481856861124]
    ],
    // London Gatwick - Oslo
    [
        [51.15376298022043, -0.18182685902707538],
        [60.19335566726187, 11.097022854113305]
    ],
    // Oslo - New York Newark
    [
        [60.19335566726187, 11.097022854113305],
        [40.69090128900594, -74.17448561911473]
    ],
    // Munchen - Oslo
    [
        [48.35474682776355, 11.784383416688316],
        [60.19335566726187, 11.097022854113305]
    ],
    // New York - San Diego
    [
        [40.69090128900594, -74.17448561911473],
        [32.734165350946284, -117.19335085394219]
    ],
    // London Heathrow - Vancouver
    [
        [51.47059732016339, -0.4541481856861124],
        [49.19450878542524, -123.17508929058349]
    ],
    // Vancouver - San Francisco
    [
        [49.19450878542524, -123.17508929058349],
        [37.62038107571887, -122.3817969733196]
    ],
    [
        [37.62038107571887, -122.3817969733196],
        [32.734165350946284, -117.19335085394219]
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
        "hardwareAccelerated": false
    }))
})

export default planePaths
