import { antPath } from 'leaflet-ant-path';

const trainRoutes = [
    // Drammen - OSL
    [
        [59.740391, 10.203090],
        [59.74383311770222, 10.233028238595375],
        [59.7634375549731, 10.290034796969007],
        [59.833716718224515, 10.434333228545038],
        [59.89280994095815, 10.524766896497399],
        [59.91384179276465, 10.63739851165453],
        [59.922198426887185, 10.679293064397594],
        [59.91481418568047, 10.7303315410454],
        [59.911414209935366, 10.75259160306053],
        [59.95381501725711, 11.044585854598402],
        [60.19335566726187, 11.097022854113305]
    ],
    // Drammen - Stavanger
    [
        [59.740391, 10.203090],
        [59.7675782052851, 9.912777318232385],
        [59.67231103555439, 9.651427993500661],
        [59.41929635327552, 9.323343264419616],
        [59.40952594698596, 9.069395554653326],
        [59.29944588144085, 9.10300128309321],
        [59.09638305054227, 9.064960571102551],
        [58.97148276534039, 9.156926145382393],
        [58.87122802957254, 9.02676492489465],
        [58.76072361025512, 8.855286935041523],
        [58.65780545740244, 8.630518606157175],
        [58.2532023393923, 7.967771497422088],
        [58.14570046182887, 7.988318802790941],
        [58.15713248426268, 7.835584109956264],
        [58.213039955210846, 7.512654449442582],
        [58.31890680206658, 7.367906101049252],
        [58.33199859963573, 7.211445823740862],
        [58.379799321898226, 6.957880282785686],
        [58.384392312098896, 6.837409006140051],
        [58.41779462662165, 6.661061532205396],
        [58.458346997186155, 6.55071956597834],
        [58.46121851111666, 6.002586869912811],
        [58.73474039605652, 5.650133324549784],
        [58.852434026229126, 5.737254294939911],
        [58.91398727893055, 5.729171924212877],
        [58.96734204484092, 5.732242261460858]
    ],
    // Barcelona - Paris
    [
        [41.379020612190885, 2.139921362414156],
        [41.9796100553242, 2.8169582409838156],
        [42.265010155680265, 2.943641445676934],
        [42.696343491349666, 2.8797004629454515],
        [43.190724371468086, 3.0058119536331533],
        [43.33644961921117, 3.218919306907918],
        [43.31740863057665, 3.466218291216883],
        [43.41289114692955, 3.696506833469149],
        [43.604945651453235, 3.880716405943787],
        [43.83250971724771, 4.366221388395142],
        [44.99214501823948, 4.978620689011024],
        [48.8443290948642, 2.374379983215558]
    ],
    // Paris - Metz
    [
        [48.87698474782823, 2.3593327884543327],
        [49.10989369742056, 6.177255672814412]
    ],
    // Metz - Luxembourg
    [
        [49.10989369742056, 6.177255672814412],
        [49.253565396575304, 6.16433999318918],
        [49.30349896314859, 6.156574148775138],
        [49.33302872526251, 6.1509774935365416],
        [49.51679072940495, 6.10187644126718],
        [49.581529026499844, 6.1324870960048665],
        [49.60025288999584, 6.134007250263954]
    ],
    // Luxembourg - Brussel-Central
    [
        [49.60025288999584, 6.134007250263954],
        [49.680432047085915, 5.80953661039583],
        [49.72739020513129, 5.539753338002775],
        [49.92054737538234, 5.379259276981813],
        [50.16008671405507, 5.267168177610167],
        [50.202848528461686, 5.313930709048922],
        [50.29153230617433, 5.091430290795877],
        [50.4693298094555, 4.862386478263319],
        [50.5703740524437, 4.691092913917585],
        [50.67349775149814, 4.5694295561256],
        [50.83844224509314, 4.3729982846803965],
        [50.842594513180806, 4.37902158004835],
        [50.86044071516123, 4.360889583652174],
        [50.83613072353712, 4.335448148283205]
    ],
    // Bruassel-Central - Amsterdam-Central
    [
        [50.83613072353712, 4.335448148283205],
        [50.86044071516123, 4.360889583652174],
        [50.89649453723018, 4.482059888468278],
        [51.01810883417766, 4.483329578358743],
        [51.20013163522653, 4.431968480673783],
        [51.216730115496595, 4.421130275049271],
        [51.35723464222555, 4.632642759366966],
        [51.59605694557378, 4.77968954203987],
        [51.92434975312403, 4.470027170040229],
        [52.310499341606864, 4.7624307709226015],
        [52.37922310245284, 4.9002337099933655]
    ],
    // Amsterdam-Central - Berlin Hbf
    [
        [52.37922310245284, 4.9002337099933655],
        [52.22677238440505, 5.181552335852725],
        [52.1535011209966, 5.374064906198177],
        [52.21001439764656, 5.968594501229005],
        [52.257350964853856, 6.160744900931313],
        [52.35768916116548, 6.65493642797411],
        [52.262444085060515, 6.793623879473661],
        [52.30978076724036, 7.158164158822731],
        [52.27656420792312, 7.435221128101186],
        [52.27282644483104, 8.060921891235498],
        [52.20209173370472, 8.573735710237308],
        [52.29025888178235, 8.934158761226833],
        [52.37658933046634, 9.741047859034826],
        [52.12291033384137, 11.625424289059499],
        [52.52524050600343, 13.369402008772846]
    ],
    // Aberdeen - Edinburgh
    [
        [57.14368016139261, -2.0986874414474244],
        [56.966698227907806, -2.2254490526299953],
        [56.71284391679146, -2.4719025546865496],
        [56.5591829713514, -2.5895472128836805],
        [56.45647312567355, -2.9712922842500236],
        [56.375062735458236, -2.8936429495739944],
        [56.112143937715835, -3.167208660937623],
        [56.03530344984645, -3.3956285260958032],
        [55.94562430702597, -3.218282077780145],
        [55.952436615709246, -3.1884570886085415]
    ],
    // Edinburgh - Durham
    [
        [55.952436615709246, -3.1884570886085415],
        [54.96850071747708, -1.6171226309881896],
        [54.77934281004116, -1.5816054554558776]
    ],
    // Durham - York
    [
        [54.77934281004116, -1.5816054554558776],
        [54.52095669541935, -1.546901946633315],
        [54.33301921645876, -1.441196507990254],
        [53.95801511002857, -1.0932736828067666]
    ],
    // York - London Kings Cross
    [
        [53.95801511002857, -1.0932736828067666],
        [51.5316072434355, -0.12353601237026546]
    ],
    // London Marylebone - Oxford
    [
        [51.52478319953605, -0.16375106224498392],
        [51.629835589324216, -0.7458037255100612],
        [51.717845355673255, -0.8440158194690568],
        [51.770992357323735, -0.9425523609210087],
        [51.89261474018647, -1.1497361180048464],
        [51.80358532010473, -1.2751527639275222],
        [51.753404224669325, -1.2702906036908137]
    ],
    // London Victoria
    [
        [51.495248239087765, -0.1445276992086807],
        [51.464019987941796, -0.1699870378365898],
        [51.375060005533896, -0.0927518749190796],
        [51.15689708341514, -0.1609396879250501]
    ]
]

const trainPaths = []

trainRoutes.forEach(route => {
    trainPaths.push(antPath(route, {
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
    }))
})

export default trainPaths