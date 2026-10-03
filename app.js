/* Kenitra & Tangier Pharmacy Site Finder — multi-city, mirror-backed */
(function () {
  'use strict';

  const CITIES = {
    kenitra: {
      label: 'Kenitra',
      center: [34.2520, -6.5950],
      zoom: 13,
      bbox: { latMin: 34.185, latMax: 34.305, lngMin: -6.700, lngMax: -6.500 },
      seed: [
        ["Pharmacie de La Ville Haute","15 Rue Jamil Sidki Zouhaoui",34.2621276,-6.5889591],
        ["KENIPHARMA","Angle Rue Saad Zaghloul and Rue Moulay Slimane",34.2662784,-6.5913151],
        ["Pharmacie Bir Rami Sud","Sud, N1",34.2342551,-6.6066003],
        ["Belhachmi Pharmacy","Lotissement Haddada",34.2673888,-6.6241978],
        ["Pharmacie Al Ghofrane","Lotis El Ouafaa 3, Saknia",34.2331749,-6.5464161],
        ["Pharmacie Al Azhar","Kenitra",34.2487957,-6.6047751],
        ["Pharmacie Zouhair","Kenitra",34.2300827,-6.5471403],
        ["Pharmacie Moustachfa Idrissi","Near Al Idrissi Hospital",34.2495924,-6.5795514],
        ["Mimosas Pharmacy","Av. Mohamed V",34.2567028,-6.5924494],
        ["Pharmacie Fouarat","Kenitra",34.2528305,-6.5216863],
        ["Pharmacie Abbouda","Kenitra",34.2551876,-6.5242646],
        ["Pharmacie et Parapharmacie Centrale Bir Rami","Bir Rami",34.2198313,-6.6201388],
        ["Pharmacie Korchi","161 Bir Rami Ouest",34.2447456,-6.6077072],
        ["Pharmacie Sirine","Lot 988, Bir Rami Sud",34.2318395,-6.6093291],
        ["Pharmacie Badyine","Kenitra",34.2315337,-6.6175012],
        ["Pharmacie et Parapharmacie Azzahrae","Kenitra",34.2503433,-6.6203181],
        ["Pharmacie Populaire Bir Rami","Kenitra",34.2177855,-6.616263],
        ["Pharmacie Saknia","Avenue F, Saknia",34.2458258,-6.5475223],
        ["Pharmacie Yaacoub","Lotissement Al Andalous, Saknia",34.2461485,-6.5418987],
        ["Pharmacie Principale","204 Av. Mohamed V",34.2639888,-6.5682119],
        ["Pharmacie de la Mosquee","90 Hay Chabab, Saknia",34.2515784,-6.5467643],
        ["Pharmacie Hay Jamii","44 Lot Hay Tanchit, Saknia",34.2486295,-6.5584021],
        ["Pharmacie As-Safaa","Lot 878, Saknia",34.2442793,-6.5450487],
        ["Pharmacie Saoumaa","Kenitra",34.2509218,-6.6089656],
        ["Pharmacie Principale Al Bassatine","Kenitra",34.2553221,-6.5202191],
        ["Maamoura Pharmacy","Kenitra",34.2564123,-6.5862631],
        ["Pharmacie Centre Ville","Kenitra",34.2567112,-6.5851768],
        ["La Grande Pharmacie","62 Av. Mohamed Diouri",34.2608183,-6.5853957],
        ["Pharmacie Moderne","39 Rue Jbala / Rue Loubnane",34.2652388,-6.5923733],
        ["The Province Pharmacy","Av. Hassan II",34.2595289,-6.5807169],
        ["Pharmacie Ibn Khaldoune","Route Assaknia, Maamoura",34.2420902,-6.5535153],
        ["Pharmacie Saad Kenitra","69 Houmane El Fetouaki",34.2624622,-6.5943305],
        ["Pharmacie Doha Assam","Kenitra",34.2835526,-6.5334306],
        ["Pharmacie Val Fleury","Av. Antara",34.2684912,-6.5933801],
        ["Paraval Parapharmacie et Paramedical","Residence Ennakhil, Rue Ahmed Chaouki",34.2673134,-6.5930681],
        ["Pharmacie Karam","Lotissement Le Vallon",34.2629907,-6.6052981],
        ["Pharmacie Belahcen","Kenitra",34.2516003,-6.6794813],
        ["Mehdia Parapharmacie","44 Alliance",34.2477004,-6.6558452],
        ["Pharmacie Ezzahiri","Lot 18C, Alliances Darna",34.2460464,-6.6546074],
        ["Pharmacie Mehdia","Mehdia",34.2648875,-6.6518921],
        ["Pharmacie Riahi","Mehdia",34.2507786,-6.6512826],
        ["Al Kaouthar Pharmacy","Res Alliance d'Arnaud S4",34.249265,-6.654206],
        ["Pharmacie Familiale","Kenitra",34.2434766,-6.6528977],
        ["Pharmacie de Mehdia","Mehdia",34.2548446,-6.6770767],
        ["Pharmacy Ouled Oujih","Kenitra",34.264073,-6.613409],
        ["PARA Podium Ouled Oujih","Bloc K 355",34.2579476,-6.6217622],
        ["LOTUS SANTE","Bloc K, n13",34.2604577,-6.6210884],
        ["Pharmacie de la Gare","162 Av. Mohamed Diouri",34.2546611,-6.5818908],
        ["Comptoir Medical Rahma","Kenitra",34.2492308,-6.5796327],
        ["Pharmacie Takaddoum","Kenitra",34.2656016,-6.5738878],
        ["Pharmacie et Parapharmacie Chateau","Kenitra",34.2554844,-6.6269531],
        ["Pharmacie de l'Ecole","Kenitra",34.2627244,-6.6209935],
        ["Pharmacie des FAR","Ave des FAR",34.2542274,-6.579398],
        ["Pharmacie Hay Tbib","Hay Ennasma, Rue 144",34.2557523,-6.5524032],
        ["Life Pharmacy","Av. Abi Chita Eljamii",34.238348,-6.6169678],
        ["Hind Pharmacy","Bd Youssef Ibn Tachfin / Rue Farahat Hachad",34.2562471,-6.5760572],
        ["Pharmacie Al Manar","Kenitra",34.2443439,-6.6169077],
        ["Pharmacie El Kods","Lot 106, Secteur G1",34.2625971,-6.6174774]
      ]
    },
    tangier: {
      label: 'Tangier',
      center: [35.7595, -5.8340],
      zoom: 13,
      bbox: { latMin: 35.700, latMax: 35.850, lngMin: -5.950, lngMax: -5.720 },
      seed: [
        ["Pharmacie Anegay صيدلية أنغاي","Rue Siaghine 8",35.7851172,-5.8124517],
        ["Pharmacie Bab Bhar صيدلية باب البحر","Rue Bab El Assa",35.7878914,-5.8117694],
        ["Pharmacie Al Maghrib صيدلية المغرب","Rue de la Liberté شارع الحرية 56",35.7826008,-5.8129687],
        ["Pharmacie La Cité Universitaire صيدلية الحي الجامعي","Route Boukhalef",35.7338104,-5.8846632],
        ["Pharmacie Moderne صيدلية العصرية","Place du 9 avril",35.784065,-5.8126868],
        ["Pharmacie Cervantes صيدلية سيرفانطيس","Rue Anoual زنقة انوال",35.7826706,-5.8104385],
        ["Pharmacie Masjid Al Azhar صيدلية مسجد الأزهر","Rue Abderahman Kawakibi",35.7606341,-5.825484],
        ["Pharmacie Al Aouama Al Gharbia صيدلية العوامة الغربية","Avenue Al Quds",35.7261824,-5.8038898],
        ["Pharmacie Al Hanae صيدلية الهناء","Avenue Al Quds",35.7308435,-5.8029761],
        ["Pharmacie Al Machkouri صيدلية المشكوري","OpenStreetMap",35.7329935,-5.8152164],
        ["Pharmacie Marbella صيدلية مربيا","Route de Tétouan",35.7264593,-5.7564234],
        ["Pharmacie De La Plage صيدلية الشاطئ","Avenue Yousef Bnou Tachafine 7",35.778779,-5.8025272],
        ["Pharmacie Aswak Assalam صيدلية أسواق السلام","OpenStreetMap",35.7379607,-5.8736926],
        ["صيدلية اليسر","Boulevard Mohamed V",35.7786487,-5.8079357],
        ["Pharmacie du Soleil صيدلية الشمس","Boulevard Prince Heritier 111",35.7748656,-5.810182],
        ["Pharmacie Europharm صيدلية أوروفارم","OpenStreetMap",35.7150964,-5.8043066],
        ["Pharmacie du Conseil صيدلية النصيحة","Avenue Koweit 16",35.7377338,-5.8085571],
        ["Pharmacie Makarim صيدلية مكارم","OpenStreetMap",35.7411624,-5.8314178],
        ["Pharmacie Al Baraka صيدلية البركة","Place du Koweit",35.7815245,-5.8211285],
        ["Pharmacie Branes 2 صيدلية برانس","Avenue Ben Abi Zarae",35.7614251,-5.8360408],
        ["Pharmacie Sidi Boukhari صيدلية سيدي البخاري","Avenue Sidi Boukhari",35.7829045,-5.8319132],
        ["صيدلية ياسين","Avenue Lait Ben Saad",35.7696784,-5.8275932],
        ["Pharmacie El Moufid صيدلية المفيد","OpenStreetMap",35.7468356,-5.8354746],
        ["Pharmacie Boukhalef صيدلية بوخالف","Avenue Moulay Rachid",35.7352745,-5.8798639],
        ["Pharmacie Yanit","OpenStreetMap",35.7059664,-5.9041476],
        ["Pharmacie Achour صيدلية عاشور","Pénétrante de Tanger-Sud",35.7027591,-5.912325],
        ["Pharmacie Sidi Bouwafi صيدلية سيدي بوافي","Avenue Abou El Kacem Chrif Sebti 63",35.7650061,-5.8235157],
        ["Pharmacie Afilal صيدلية أفيلال","Avenue Allal El Fassi شارع علال الفاسي 30",35.7619903,-5.7998232],
        ["Pharmacie Place Des Arômes صيدلية العبير","OpenStreetMap",35.7608613,-5.7958861],
        ["Pharmacie Metioui صيدلية المتيوي","Avenue Mohamed V 153",35.7748294,-5.7980371],
        ["Pharmacie Al Madkhal Al Karim صيدلية المدخل الكريم","OpenStreetMap",35.7698574,-5.7893742],
        ["Pharmacie Doha صيدلية الضحى","OpenStreetMap",35.7601813,-5.7913394],
        ["Pharmacie De Tanger صيدلية طنجة","OpenStreetMap",35.7546704,-5.7927828],
        ["Pharmacie Touzani صيدلية التوزاني","Route de Tétouan",35.7586041,-5.7933354],
        ["Pharmacie de la Ville Nouvelle صيدلية المدينة الجديدة","OpenStreetMap",35.7033186,-5.9359797],
        ["Pharmacie les Jardins de l’Atlantique صيدلية حدائق الأطلسي","OpenStreetMap",35.7054585,-5.9309591],
        ["Pharmacie Vidal صيدلية فيدال","OpenStreetMap",35.7064759,-5.9180722],
        ["Pharmacie Bassam صيدلية بسام","OpenStreetMap",35.7090476,-5.915646],
        ["Pharmacie Zone Franche صيدلية المنطقة الحرة","OpenStreetMap",35.7090939,-5.9092204],
        ["Pharmacie El Irfane صيدلية العرفان 2","OpenStreetMap",35.7412978,-5.886864],
        ["Pharmacie Al Faraj صيدلية الفرج","OpenStreetMap",35.7374727,-5.8835907],
        ["Pharmacie Cap Spartel صيدلية كاب سبارطيل","OpenStreetMap",35.737151,-5.8875324],
        ["Pharmacie Al Irfane صيدلية العرفان","Avenue Moulay Rachid",35.7324127,-5.8819208],
        ["Pharmacie Route de Rabat صيدلية طريق الرباط","Avenue des Forces Armées Royales شارع الجيش الملكي",35.7296197,-5.8802996],
        ["Pharmacie Al Moustakbal صيدلية المستقبل","OpenStreetMap",35.7338,-5.8686245],
        ["Pharmacie Bennani صيدلية بناني","Route des Grottes d'Hercule",35.7403433,-5.8778488],
        ["Pharmacie Achakkar صيدلية أشقار","OpenStreetMap",35.7447997,-5.8845612],
        ["Pharmacie Al Hamd صيدلية الحمد","Avenue des Forces Armées Royales شارع الجيش الملكي",35.7355071,-5.8587766],
        ["Pharmacie Hassani صيدلية الحسني","OpenStreetMap",35.7371355,-5.8556197],
        ["Pharmacie Nour Moujamma Hassani صيدلية نور المجمع الحسني","OpenStreetMap",35.7309886,-5.8524769],
        ["Pharmacie Wissal صيدلية وصال","OpenStreetMap",35.7323562,-5.8557741],
        ["Pharmacie Bayti صيدلية بيتي","OpenStreetMap",35.7315199,-5.848763],
        ["Pharmacie Ajial صيدلية أجيال","OpenStreetMap",35.7304537,-5.8458172],
        ["Pharmacie Bir El Ghazi صيدلية بئر الغازي","OpenStreetMap",35.7132712,-5.8109078],
        ["Pharmacie La Perle du Boughaz صيدلية جوهرة البوغاز","OpenStreetMap",35.7096498,-5.8066446],
        ["Pharmacie la Vie صيدلية الحياة","OpenStreetMap",35.7121675,-5.804804],
        ["Pharmacie Salima صيدلية سليمة","OpenStreetMap",35.7205009,-5.7919902],
        ["Pharmacie Khadak Dir صيدلية خضر دير","OpenStreetMap",35.7229624,-5.7918022],
        ["Pharmacie Hjar Sfar صيدلية حجر الصفر","OpenStreetMap",35.7230817,-5.7891985],
        ["Pharmacie Madcher Al Aouama صيدلية مدشر العوامة","OpenStreetMap",35.7218432,-5.794929],
        ["Pharmacie Azhar Chifae صيدلية أزهار الشفاء","OpenStreetMap",35.7203982,-5.7979005],
        ["Pharmacie Aïn Dalya صيدلية عين دالية","OpenStreetMap",35.7201044,-5.8044386],
        ["Pharmacie Khandaq El Ward صيدلية خندق الورد","OpenStreetMap",35.7278783,-5.7930472],
        ["Pharmacie Abdelmajid Al Atia صيدلية عبد المجيد العطية","OpenStreetMap",35.7279901,-5.7880793],
        ["Pharmacie Adam صيدلية اًدم","OpenStreetMap",35.7320608,-5.7882049],
        ["Pharmacie Ward El Aouama صيدلية ورد العوامة","OpenStreetMap",35.7305111,-5.7850469],
        ["Pharmacie Al Assil صيدلية الأصيل","OpenStreetMap",35.7315316,-5.7661858],
        ["Pharmacie Sekka Aouama صيدلية السكة العوامة","OpenStreetMap",35.7322381,-5.7944065],
        ["Pharmacie Al karam صيدلية الكرم","OpenStreetMap",35.7274639,-5.768369],
        ["Pharmacie Ain Echifae صيدلية عين الشفاء","OpenStreetMap",35.7352668,-5.8510317],
        ["Pharmacie Al Aouama Charkia صيدلية العوامة الشرقية","OpenStreetMap",35.7240954,-5.79953],
        ["Pharmacie Gare Routière صيدلية المحطة الطرقية","OpenStreetMap",35.7228895,-5.8610412],
        ["Pharmacie du Grand Stade صيدلية الملعب الكبير","OpenStreetMap",35.7382582,-5.847701],
        ["Pharmacie Lilia صيدلية ليليا","OpenStreetMap",35.7153469,-5.8846399],
        ["Pharmacie L'Amitié صيدلية الصداقة","OpenStreetMap",35.723227,-5.878017],
        ["Pharmacie Houssam صيدلية حسام","OpenStreetMap",35.7118735,-5.8938187],
        ["Pharmacie Addoha Rif صيدلية الضحى ريف","OpenStreetMap",35.7088136,-5.9019591],
        ["Pharmacie El Filali صيدلية الفيلالي","OpenStreetMap",35.7097019,-5.8987876],
        ["Pharmacie Ibn Al Arabi صيدلية ابن العربي","OpenStreetMap",35.7402627,-5.8677095],
        ["Pharmacie Marshan صيدلية مرشان","OpenStreetMap",35.7409228,-5.8663561],
        ["Pharmacie Ibn Khaldoun صيدلية ابن خلدون","OpenStreetMap",35.7469497,-5.7956736],
        ["Pharmacie Dar Tounsi صيدلية دار التونسي","Avenue Abdeslam Ben Bouhout",35.7525722,-5.7988798],
        ["Pharmacie Al Yakine صيدلية اليقين","OpenStreetMap",35.7521903,-5.7963115],
        ["Pharmacie Al Majd صيدلية المجد","OpenStreetMap",35.7450726,-5.7963218],
        ["Pharmacie La Source صيدلية المنبع","Rue Al Quadissia",35.7421059,-5.7966406],
        ["Pharmacie Mountassir صيدلية منتصر","OpenStreetMap",35.7379854,-5.7990585],
        ["Pharmacie Grand Maghreb صيدلية المغرب الكبير","OpenStreetMap",35.728395,-5.8061626],
        ["Pharmacie Doha Louama صيدلية الضحى العوامة","OpenStreetMap",35.7243955,-5.806841],
        ["Pharmacie Route El Aouama صيدلية طريق العوامة","Avenue Al Quds شارع القدس",35.7339531,-5.8018479],
        ["Pharmacie Zineb صيدلية زينب","Avenue Aicha Al-Moussafir",35.7344339,-5.8052226],
        ["Pharmacie El Attabi صيدلية العتابي","OpenStreetMap",35.737058,-5.8029729],
        ["Pharmacie Al Zahara صيدلية الزهارة","OpenStreetMap",35.7408118,-5.8012384],
        ["Pharmacie Al Hambra صيدلية الحمراء","Avenue Aicha Al-Moussafir",35.7389882,-5.8055448],
        ["Pharmacie Al Aouda صيدلية العودة","Rue Tunisie زنقة تونس",35.7470338,-5.8057471],
        ["Pharmacie Hamza صيدلية حمزة","Rue Yemen 33",35.7482557,-5.8017203],
        ["Pharmacie Anoual صيدلية أنوال","Avenue Al Quds شارع القدس 26",35.750137,-5.7993912],
        ["Pharmacie Al Houria صيدلية الحرية","OpenStreetMap",35.7467466,-5.8003376],
        ["Pharmacie Annour صيدلية النور","Rue Mauritanie 15",35.7447193,-5.8017768],
        ["Pharmacie Sania صيدلية السانيا","Avenue Aicha Al-Moussafir",35.7429855,-5.8060324],
        ["Pharmacie El Aouama صيدلية العوامة","Boulevard Royaume d'Arabie Saoudite",35.7433347,-5.7997666],
        ["Pharmacie Jirari صيدلية الجيراري","Avenue Aicha Al-Moussafir 77",35.7488173,-5.80866],
        ["Pharmacie Afriquia صيدلية إفريقيا","Avenue Moulay Ali Cherif 44",35.752572,-5.8070116],
        ["Pharmacie Moulay Ali Cherif صيدلية مولي علي الشريف","Avenue Moulay Ali Cherif 78",35.7515983,-5.8020735],
        ["Pharmacie Fares صيدلية فارس","Avenue Abdeslam Ben Bouhout 34",35.7555289,-5.7948987],
        ["Pharmacie du Quartier صيدلية الحي","Avenue R'gaia 56",35.7572738,-5.7965159],
        ["Pharmacie Irchad صيدلية الإرشاد","Avenue R'gaia",35.7553991,-5.7989719],
        ["Pharmacie Al Raha صيدلية الراحة","Boulevard Tarik Ibn Ziad شارع طارق بن زياد 115",35.7660064,-5.8049135],
        ["Pharmacie Passadena صيدلية باسادينا","Route de Tétouan",35.7660792,-5.7995678],
        ["Grande Pharmacie Rif صيدلية الريف الكبرى","Avenue Moulay Ali Cherif 17",35.7539222,-5.8100232],
        ["Pharmacie Benallal صيدلية ابن علال","Boulevard Fatima Zahra 127",35.7554299,-5.8020759],
        ["Pharmacie Hay Bouhout صيدلية حي بوحوت","Avenue Abdelkhalek Torres",35.7553348,-5.8055756],
        ["Pharmacie de la Santé صيدلية الصحة","Boulevard Tarik Ibn Ziad شارع طارق بن زياد",35.7581749,-5.8015535],
        ["Pharmacie Tafilalet صيدلية تافيلالت","OpenStreetMap",35.7571433,-5.8103002],
        ["Pharmacie Al Hikma صيدلية الحكمة","Rue Omar El Mokhtar 25",35.7591814,-5.8048347],
        ["Pharmacie Drissia صيدلية الإدريسية","Boulevard Tarik Ibn Ziad شارع طارق بن زياد 42",35.7622996,-5.8034792],
        ["Pharmacie du Parc صيدلية الروض","Boulevard Moulay Soulayman",35.7630107,-5.8126443],
        ["Pharmacie Province صيدلية العمالة","Rue de la Province 38",35.7643841,-5.8082636],
        ["Pharmacie Al Kodss صيدلية القدس","Rue Mansour Ben Abi Amir 51",35.7625622,-5.8065548],
        ["Pharmacie Al Fahs صيدلية الفحص","OpenStreetMap",35.7503577,-5.8147573],
        ["Pharmacie Assalam صيدلية السلام","Rue Oued Ouargha شارع وادي ورغة 26",35.7518181,-5.8116118],
        ["Pharmacie Zaoudia صيدلية الزاودية","Avenue Achouhada 42",35.7555978,-5.8166095],
        ["Pharmacie Masjid Mabrouka صيدلية مسجد مبروكة","OpenStreetMap",35.7572922,-5.8132476],
        ["Pharmacie Beni Makada صيدلية بني مكادة","Boulevard Moulay Soulayman 152",35.7591748,-5.8128161],
        ["Pharmacie Mabrouka صيدلية مبروكة","Rue Ai Benbtaher Abih 35",35.7582633,-5.8147929],
        ["Pharmacie Al Kantara صيدلية القنطرة","OpenStreetMap",35.7589782,-5.8214875],
        ["Pharmacie Ibn Annafis صيدلية بن النفيس","Rue My Tahar Ben Abdelkrim Boughaz 29",35.7613621,-5.8172393],
        ["Pharmacie Hay Al Boughaz صيدلية حي البوغاز","OpenStreetMap",35.7611284,-5.8141052],
        ["Pharmacie Mouadafine صيدلية الموظفين","OpenStreetMap",35.7587386,-5.8186058],
        ["Pharmacie Préfecture Beni Makada صيدلية عمالة بني مكادة","Rue El Hind",35.7418415,-5.8097779],
        ["Pharmacie Al Fath صيدلية الفتح","Boulevard Royaume d'Arabie Saoudite 26",35.7421352,-5.8125651],
        ["Pharmacie Badr صيدلية بدر","Rue El Hind 49",35.7450738,-5.8094117],
        ["Pharmacie Belkacem صيدلية بلقاسم","OpenStreetMap",35.7472566,-5.8114154],
        ["Pharmacie Ouled Allal صيدلية أولاد علال","Boulevard Royaume d'Arabie Saoudite",35.7435833,-5.8152877],
        ["Pharmacie Nouvelle الصيدلية الجديدة","Rue 4 زنقة",35.7573328,-5.8242892],
        ["Pharmacie Al Hilal صيدلية الهلال","OpenStreetMap",35.7542749,-5.8302825],
        ["Pharmacie du Nord صيدلية الشمال","OpenStreetMap",35.7584477,-5.8280272],
        ["Pharmacie Anas صيدلية أنس","Avenue El Hoceima 78",35.751932,-5.8318449],
        ["Pharmacie Bni Touzine صيدلية بني توزين","OpenStreetMap",35.7361164,-5.8436013],
        ["Pharmacie Riad ahlen صيدلية رياض أهلا","OpenStreetMap",35.742425,-5.843168],
        ["Pharmacie Sara صيدلية سارة","OpenStreetMap",35.7381529,-5.8357057],
        ["Pharmacie Chems Ahlan صيدلية شمس أهلا","Rue Al Fidae",35.7423713,-5.8384262],
        ["Grande Pharmacie Assia صيدلية اسيا الكبرى","Boulevard Royaume d'Arabie Saoudite",35.7444463,-5.8328432],
        ["Pharmacie Al Kaoutar صيدلية الكوثر","OpenStreetMap",35.7450295,-5.8393477],
        ["Pharmacie Taferssiti صيدلية تافرسيتي","Avenue Al Afw",35.7414332,-5.8336189],
        ["Pharmacie Annasr صيدلية النصر","Avenue Martil",35.7504079,-5.8295296],
        ["Pharmacie Beni Ouriaghel صيدلية بني ورياغل","OpenStreetMap",35.7461918,-5.8298527],
        ["Pharmacie Ahlan صيدلية أهلا","Boulevard Royaume d'Arabie Saoudite",35.7475809,-5.8404456],
        ["Pharmacie Erradi صيدلية الراضي","Avenue Nigeria",35.7486334,-5.8376615],
        ["Pharmacie Bendibane صيدلية بن ديبن","OpenStreetMap",35.7559422,-5.8209421],
        ["Pharmacie Al Firdaous صيدلية الفردوس","OpenStreetMap",35.7543733,-5.8277417],
        ["Pharmacie Hay Ouarda صيدلية حي الوردة","Avenue Moulay Ali Cherif",35.7538142,-5.818627],
        ["Pharmacie Madrid صيدلية مدريد","Rue Iran زنقة إيران",35.7527334,-5.8220466],
        ["Pharmacie Ghailane صيدلية غيلان","Rue Malaisie 41",35.7516884,-5.8184929],
        ["Pharmacie Al Mouna صيدلية المنى","OpenStreetMap",35.7491823,-5.8174646],
        ["Pharmacie Al Idrissi صيدلية الإدريسي","OpenStreetMap",35.7462614,-5.8170134],
        ["Pharmacie Zemzem صيدلية زمزم","OpenStreetMap",35.7460004,-5.8207251],
        ["Pharmacie Al Jamae صيدلية الجامع","Boulevard Royaume d'Arabie Saoudite",35.7432827,-5.82036],
        ["Pharmacie Ibn Toufail صيدلية بن طفيل","OpenStreetMap",35.7450041,-5.8233534],
        ["Pharmacie Bir Chifae صيدلية بير الشفاء","Boulevard Royaume d'Arabie Saoudite",35.7428183,-5.8259495],
        ["Pharmacie Avenue Koweït صيدلية شارع الكويت","OpenStreetMap",35.7393423,-5.8120831],
        ["Pharmacie Zouitina صيدلية الزويتينة","OpenStreetMap",35.732901,-5.8116348],
        ["Pharmacie Andalucia صيدلية الأندلسية","Rue 1 زنقة",35.7312268,-5.8070085],
        ["Pharmacie Imam Ali صيدلية إمام علي","OpenStreetMap",35.7294235,-5.8124782],
        ["Pharmacie Al Ouroud Malika صيدلية الورود مليكة","OpenStreetMap",35.7264792,-5.8093655],
        ["Pharmacie El Mers صيدلية المرس","OpenStreetMap",35.7391683,-5.8252248],
        ["Pharmacie Achennad صيدلية أشناد","OpenStreetMap",35.7404209,-5.8286718],
        ["Pharmacie El Hadri صيدلية الحضري","OpenStreetMap",35.7360571,-5.8306417],
        ["Pharmacie Bayt Al Makdisse صيدلية بيت المقدس","OpenStreetMap",35.7384796,-5.8319203],
        ["Pharmacie Riad Achifaa صيدلية رياض الشفاء","OpenStreetMap",35.735227,-5.8341992],
        ["Pharmacie Salama صيدلية السلامة","OpenStreetMap",35.7376483,-5.8278288],
        ["Pharmacie Beni Said صيدلية بني سعيد","OpenStreetMap",35.7328169,-5.8318572],
        ["Pharmacie Boughlala صيدلية بوغلالة","OpenStreetMap",35.7295632,-5.8350427],
        ["Pharmacie Alharrarine صيدلية الحرارين","OpenStreetMap",35.7301164,-5.8392704],
        ["Pharmacie El Mesnaoui صيدلية المسناوي","OpenStreetMap",35.7348007,-5.8274459],
        ["Pharmacie Bhrayen صيدلية البحريين","OpenStreetMap",35.7323353,-5.8261185],
        ["Pharmacie Complexe Al Baraka 1 صيدلية مجمع البركة","OpenStreetMap",35.731719,-5.8184442],
        ["Pharmacie Ramses صيدلية رمسيس","OpenStreetMap",35.7288515,-5.8180304],
        ["Pharmacie Mikou صيدلية ميكو","OpenStreetMap",35.7248815,-5.8133417],
        ["Pharmacie Tanmia صيدلية التنمية","Route de Tétouan",35.7374112,-5.7657254],
        ["Pharmacie Rahhali صيدلية الرحالي","OpenStreetMap",35.7401384,-5.765085],
        ["Pharmacie Jihane صيدلية جيهان","Route de Tétouan",35.7418848,-5.7754502],
        ["Pharmacie Aïn Al Jadida صيدلية عين الجديدة","OpenStreetMap",35.7461422,-5.7754259],
        ["Pharmacie M'Ghogha صيدلية مغوغة","Route de Tétouan",35.7436011,-5.7780437],
        ["Pharmacie Najah صيدلية النجاح","OpenStreetMap",35.7476996,-5.7727257],
        ["Pharmacie Leila صيدلية ليلى","OpenStreetMap",35.7482953,-5.7778738],
        ["Pharmacie Ali Atifi صيدلية علي العاطيفي","OpenStreetMap",35.7497991,-5.7750419],
        ["Pharmacie Zone Industrielle صيدلية الحي الصناعي","Route de Tétouan",35.7456342,-5.7826468],
        ["Pharmacie M'Ghogha Kbira صيدلية مغوغة الكبرى","OpenStreetMap",35.7506064,-5.7803861],
        ["Pharmacie Taissir صيدلية التيسير","OpenStreetMap",35.7515728,-5.7870662],
        ["صيدلية مالاباطا هيلز","OpenStreetMap",35.7808403,-5.7530011],
        ["Pharmacie Akalai صيدلية أكلاعي","OpenStreetMap",35.7679127,-5.7523456],
        ["Pharmacie Oued Sania صيدلية وادي السانية","OpenStreetMap",35.7689272,-5.7571945],
        ["صيدلية عيش","OpenStreetMap",35.763499,-5.756338],
        ["صيدلية الصبر","OpenStreetMap",35.7580111,-5.7604782],
        ["صيدلية الرضى","OpenStreetMap",35.7624593,-5.7625914],
        ["Pharmacie Ben Ayad صيدلية بن عياد","Rue Plage Kaa Asrass",35.7704222,-5.7719122],
        ["Pharmacie Perle de Méditerranée صيدلية لؤلؤة المتوسط","Rue Plage Ain Addaib",35.7673647,-5.7610958],
        ["صيدلية إبويين","OpenStreetMap",35.7711249,-5.764848],
        ["Pharmacie Dhar El Mers صيدلية ظهر المرس","OpenStreetMap",35.7667996,-5.7650737],
        ["Pharmacie Meftah El Khair صيدلية مفتاح الخير","Rue Plage Akwasse Briech",35.7679104,-5.7733356],
        ["صيدلية البحر الابيض المتوسط","Rue Plage Oualidia",35.7691537,-5.7674069],
        ["صيدلية الغندوري","OpenStreetMap",35.7823562,-5.7612436],
        ["Pharmacie Al Issrae صيدلية الإسراء","OpenStreetMap",35.7588341,-5.7864931],
        ["Pharmacie Hay Benkirane صيدلية حي بنكيران","OpenStreetMap",35.7601988,-5.78885],
        ["صيدلية مسجد الفتح","OpenStreetMap",35.7644754,-5.7832312],
        ["Pharmacie El Alia صيدلية العالية","Rue Ibn Al Kadi زنقة ابن القاضي 37",35.7636391,-5.794075],
        ["Pharmacie Palestine صيدلية فلسطين","OpenStreetMap",35.7640867,-5.7909213],
        ["Pharmacie Saada صيدلية السعادة","Route de Tétouan 3",35.7632332,-5.7958386],
        ["Pharmacie Charf صيدلية شرف","Avenue Yacoub El Mansour",35.7664721,-5.7940716],
        ["صيدلية محج محمد السادس","Avenue Mohammed VI شارع محمد السادس",35.7742203,-5.784187],
        ["Pharmacie Santé City Center صيدلية الصحة سيتي سنتر","OpenStreetMap",35.7706519,-5.7823642],
        ["Pharmacie de la Gare","OpenStreetMap",35.7713361,-5.7858704],
        ["Pharmacie Laaziza صيدلية العزيزة","Rue Moulay Hicham",35.772023,-5.7951018],
        ["Pharmacie Aida صيدلية عايدة","OpenStreetMap",35.775314,-5.7952144],
        ["Pharmacie Al Andalous صيدلية الأندلس","Boulevard Mohamed V شارع محمد الخامس 118",35.7757811,-5.8015618],
        ["Pharmacie 2000 صيدلية","OpenStreetMap",35.7689607,-5.8115506],
        ["Pharmacie Moulay Youssef صيدلية مولاي يوسف","Boulevard Moulay Youssef",35.7700159,-5.8057085],
        ["Pharmacie Phardet صيدلية فارضت","Boulevard de Fés 147",35.7705717,-5.8141986],
        ["Pharmacie Al Amal صيدلية الأمل","Avenue Moulay Abdelaziz 20",35.7622384,-5.8194224],
        ["Pharmacie Place du Maroc صيدلية ساحة المغرب","Avenue Moulay Abdelaziz",35.7657382,-5.8163376],
        ["Avenue Youssef Ibn Tachfine شارع يوسف بن تاشفين","Avenue Ibn Tachfine 96",35.7710518,-5.8031016],
        ["Pharmacie Jade صيدلية جاد","rue Ibn Ajroum",35.772407,-5.8053327],
        ["Pharmacie Al Farabi صيدلية الفرابي","Avenue Omar Bnou Khattab",35.7723097,-5.8076621],
        ["Pharmacie La Wilaya صيدلية الولاية","Avenue de la Marche Verte شارع المسيرة الخضراء 24",35.7725945,-5.8113934],
        ["Pharmacie Ariha صيدلية أريحا","Boulevard Moulay Youssef 31",35.771005,-5.8113856],
        ["Pharmacie Jamila صيدلية جميلة","Avenue de Fès",35.7729531,-5.8138968],
        ["Pharmacie Granada صيدلية غرناطة","Rue Tehran 18",35.7760393,-5.8080033],
        ["Grande Pharmacie Zeroual صيدلية زروال الكبرى","Avenue de Fès 69",35.7760357,-5.8140097],
        ["Pharmacie du Lycée صيدلية الليسي","Rue Allal Ben Abdallah 15",35.7781229,-5.8096733],
        ["Grande Pharmacie Pasteur الصيدلية الكبرى باستور","Place de France",35.7810778,-5.8123201],
        ["Pharmacie Centrale الصيدلية المركزية","Boulevard Pasteur 48",35.780116,-5.8100992],
        ["Pharmacie Ibn Rochd صيدلية بن رشد","Rue d'Angleterre",35.778412,-5.8191224],
        ["Pharmacie M'sallah صيدلية المصلى","Avenue Sidi Mohamed Ben Abdellah 45",35.7743237,-5.8175644],
        ["Pharmacie Ibn khatib صيدلية ابن الخطيب","Avenue Docteur Faraj 24",35.7753514,-5.8201833],
        ["Pharmacie El Kindy صيدلية الكندي","Avenue Haroun Errachid 136",35.7730008,-5.8218784],
        ["Pharmacie Val Fleuri صيدلية فال فلوري","Boulevard Moulay Rachid شارع مولاي رشيد",35.7769023,-5.8283848],
        ["Pharmacie Bel Air صيدلية بيلير","OpenStreetMap",35.774169,-5.8261136],
        ["Pharmacie Chifae صيدلية الشفاء","Boulevard Moulay Rachid شارع مولاي رشيد",35.7789399,-5.825752],
        ["Pharmacie Souk El Bakar صيدلية سوق البقر","Avenue Sidi Amar 46",35.7790739,-5.8308461],
        ["Pharmacie Mister Khouch صيدلية مستر خوش","Avenue d'Anfa 36",35.7738241,-5.8327767],
        ["Pharmacie Camelia صيدلية كاميليا","Boulevard Moulay Rachid شارع مولاي رشيد 8",35.7730293,-5.8296408],
        ["Pharmacie Al Imam Malik صيدلية إمام مالك","Avenue Abou El Kacem Chrif Sebti",35.7621172,-5.8222234],
        ["Pharmacie Rabea El Adaouia صيدلية رابعة العدوية","OpenStreetMap",35.7652763,-5.824776],
        ["Pharmacie Casabarata صيدلية كازاباراتا","Avenue Moulay Hafid Ibn Abdelhafid 58",35.767018,-5.8213004],
        ["Pharmacie Anfa صيدلية أنفا","Avenue Haroun Errachid 23",35.7689049,-5.8171629],
        ["Pharmacie Al Ghazali صيدلية الغزالي","Avenue Haroun Errachid 73",35.7697558,-5.8211379],
        ["Grande Pharmacie Souani صيدلية السواني الكبرى","Avenue d'Anfa 43",35.7701548,-5.8242214],
        ["Pharmacie Populaire الصيدلية الشعبية","OpenStreetMap",35.7682205,-5.8249103],
        ["Grande Pharmacie Branes صيدلية برانص الكبرى","Boulevard Faisal Ibn Abdelaziz 21",35.7628519,-5.8249922],
        ["Pharmacie Abi Abass Sebti صيدلية العباس السبتي","OpenStreetMap",35.7675312,-5.828763],
        ["Pharmacie Inas صيدلية إيناس","Avenue Ben Abi Zarae 30",35.7599922,-5.830995],
        ["Pharmacie Ibn Batouta صيدلية ابن بطوطة","Rue Ibn Ardoune 134",35.7628179,-5.8320191],
        ["Pharmacie Ibn Barrajan صيدلية ابن برجان","Rue des Cedres 41",35.7577169,-5.8329304],
        ["Pharmacie Atlas صيدلية أطلس","Rue Ibn Ardoune 16",35.7650926,-5.8279345],
        ["Pharmacie Sanawbar صيدلية الصنوبر","Rue des Pins 79",35.7574911,-5.8369439],
        ["Pharmacie Al Yasmine صيدلية الياسمين","Avenue de Genévriers",35.7571792,-5.8404784],
        ["Pharmacie Narjiss صيدلية نرجيس","Avenue de Genévriers 55",35.7556071,-5.8344612],
        ["Pharmacie Salaheddine صيدلية صلاح الدين","Rue Fkih Ben Mekki",35.7544787,-5.8376607],
        ["Pharmacie Fayna صيدلية فاينة","Rue Forêt Eucalyptus",35.7607275,-5.8396831],
        ["Pharmacie Abbes صيدلية عباس","OpenStreetMap",35.7562288,-5.8440432],
        ["Pharmacie Arrabie صيدلية الربيع","OpenStreetMap",35.7537398,-5.8454633],
        ["Pharmacie Principale الصيدلية الرئيسية","OpenStreetMap",35.7539306,-5.8416408],
        ["Pharmacie Al Masjid صيدلية المسجد","OpenStreetMap",35.7520833,-5.8368547],
        ["Pharmacie Moncef صيدلية منصف","Avenue des Forces Armées Royales شارع الجيش الملكي",35.7505782,-5.8389402],
        ["Pharmacie Al Balsam صيدلية البلسم","OpenStreetMap",35.7509305,-5.842056],
        ["Pharmacie Ibrahim Al Khalil صيدلية إبراهيم الخليل","OpenStreetMap",35.7461654,-5.8509652],
        ["Pharmacie 6 Novembre صيدلية 6 نونبر","OpenStreetMap",35.7453486,-5.8476183],
        ["Pharmacie Marjane Tanger صيدلية مرجان طنجة","Avenue des Forces Armées Royales شارع الجيش الملكي",35.7464496,-5.8440326],
        ["Pharmacie Jnan Marjane صيدلية جنان مرجان","OpenStreetMap",35.7478223,-5.8459313],
        ["Pharmacie Fleming صيدلية فلمينغ","OpenStreetMap",35.7445151,-5.8549137],
        ["Pharmacie Chorafa صيدلية الشرفاء","Boulevard Moulay Rachid شارع مولاي رشيد",35.7475556,-5.8589924],
        ["Pharmacie Al Bayrouni صيدلية البيروني","OpenStreetMap",35.7514966,-5.8479752],
        ["Pharmacie Tanja Al Koubra صيدلية طنجة الكبرى","Boulevard Moulay Rachid شارع مولاي رشيد",35.7525128,-5.8522603],
        ["Pharmacie San Francisco صيدلية سان فرانسيسكو","Avenue Habib Bourguiba",35.7807498,-5.8240771],
        ["Pharmacie Aïn Hayani صيدلية عين الحياني","Rue Imam Kastalani",35.7828892,-5.8282247],
        ["Pharmacie Imam Mouslim صيدلية إمام مسلم","Rue Imam Mouslim زنقة الإمام مسلم 87",35.7854093,-5.8293717],
        ["Pharmacie Arrazi صيدلية الرازي","Boulevard Moulay Rachid شارع مولاي رشيد",35.7637104,-5.8378925],
        ["Pharmacie Annajat صيدلية النجاة","Boulevard Moulay Rachid شارع مولاي رشيد 114",35.7699613,-5.831943],
        ["Pharmacie Sat Filage صيدلية سات فيلاج","OpenStreetMap",35.7597607,-5.8432866],
        ["Pharmacie Tarik El Moujahidin صيدلية طريق المجاهدين","Rue Al-Moujahidine المجاهدين",35.7699893,-5.8437546],
        ["Pharmacie la Raison صيدلية النهى","OpenStreetMap",35.7671804,-5.8448185],
        ["Pharmacie Al Ihssane صيدلية الإحسان","Rue Boutrika",35.7577533,-5.8527663],
        ["Pharmacie Imam Chadili صيدلية إمام الشاذلي","OpenStreetMap",35.7558529,-5.8503253],
        ["Pharmacie les Parents صيدلية الأبوين","OpenStreetMap",35.7578878,-5.8468026],
        ["Pharmacie Hay Al Manar صيدلية حي المنار","OpenStreetMap",35.75959,-5.8495551],
        ["Pharmacie Al Madina صيدلية المدينة","OpenStreetMap",35.7673499,-5.8528705],
        ["Pharmacie Mehdia Golf صيدلية مهدية كولف","OpenStreetMap",35.7640801,-5.8518522],
        ["Pharmacie Soussia صيدلية سوسية","OpenStreetMap",35.7618138,-5.8535855],
        ["Pharmacie Al Kawacim صيدلية القواسم","OpenStreetMap",35.7651065,-5.8554297],
        ["Pharmacie Chair صيدلية الشاعر","OpenStreetMap",35.7626331,-5.8448568],
        ["Pharmacie Masjid Al Mouhit صيدلية مسجد المحيط","OpenStreetMap",35.7621074,-5.8485761],
        ["Pharmacie Bouarraquia صيدلية بوعراقية","Avenue Hassan II شارع الحسن الثاني 34",35.7825789,-5.8179886],
        ["Pharmacie Khosafat صيدلية خوصافات","Avenue Hassan I 53",35.7857958,-5.8161579],
        ["Pharmacie Ibn Sina صيدلية ابن سينا","Avenue Hassan II شارع الحسن الثاني 124",35.7866173,-5.820818],
        ["Pharmacie Brooks صيدلية بروكس","Rue de Grenade زنقة غرناطة 28",35.7839198,-5.8214788],
        ["Pharmacie Tingis صيدلية طنجيس","Rue Imam Mouslim زنقة الإمام مسلم",35.7855828,-5.8255958],
        ["Pharmacie Dina صيدلية دينا","Rue Imam Mouslim زنقة الإمام مسلم",35.7860886,-5.833369],
        ["Pharmacie Masjid Marchan صيدلية مسجد مرشان","Avenue des U.S.A 81",35.7899845,-5.8267794],
        ["Pharmacie Lamtafi صيدلية لمطافي","OpenStreetMap",35.78827,-5.824861],
        ["Pharmacie Sabila Jmaa صيدلية سبيلة الجماعة","OpenStreetMap",35.7884394,-5.8293661],
        ["Pharmacie du Golf صيدلية الكولف","OpenStreetMap",35.775918,-5.8548297],
        ["Pharmacie Biladi صيدلية بلادي","OpenStreetMap",35.7672315,-5.8480077],
        ["Pharmacie Al Moujahidine صيدلية المجاهدين","OpenStreetMap",35.777783,-5.836847],
        ["Pharmacie Al Amana صيدلية الأمانة","OpenStreetMap",35.7340065,-5.8765255],
        ["Pharmacie Laaouini Ziaten صيدلية لعويني زياتن","OpenStreetMap",35.7445149,-5.8753381],
        ["Pharmacie Moustaghfir صيدلية مستغفر","OpenStreetMap",35.7449201,-5.8668848],
        ["Pharmacie Hay Al Inara صيدلية حي الإنارة","OpenStreetMap",35.7511089,-5.862102],
        ["Pharmacie Branes Kedima صيدلية البرانص القديمة","OpenStreetMap",35.7451901,-5.8698033],
        ["Pharmacie Safae صيدلية صفاء","OpenStreetMap",35.7463176,-5.8685989],
        ["Pharmacie Jebari صيدلية جباري","OpenStreetMap",35.7521693,-5.8662906],
        ["Pharmacie Al Fajr صيدلية الفجر","OpenStreetMap",35.7521548,-5.8593719],
        ["Pharmacie Massira صيدلية المسيرة","OpenStreetMap",35.7538793,-5.8623402],
        ["Pharmacie Omar Ibn Khattab صيدلية عمر بن الخطاب","OpenStreetMap",35.7586635,-5.8592846],
        ["Pharmacie Riad صيدلية رياض","OpenStreetMap",35.7585043,-5.8562332],
        ["Pharmacie Sofia صيدلية صوفيا","OpenStreetMap",35.7611902,-5.8579653],
        ["Pharmacie Assafwa صيدلية الصفوة","OpenStreetMap",35.7658498,-5.8587418],
        ["Pharmacie Ataallah صيدلية عطاء الله","OpenStreetMap",35.7684604,-5.8626016],
        ["Pharmacie Ouahid صيدلية وحيد","OpenStreetMap",35.75654,-5.8558273],
        ["Pharmacie Hadia صيدلية هادية","OpenStreetMap",35.7628826,-5.8607103],
        ["Pharmacie Mesnana صيدلية مسنانة","OpenStreetMap",35.7547239,-5.854767],
        ["Pharmacie Al Boustane صيدلية البستان","OpenStreetMap",35.7765719,-5.8611405],
        ["Pharmacie Boubana صيدلية بوبانة","OpenStreetMap",35.7716019,-5.8606245],
        ["Pharmacie Arrahman صيدلية الرحمان","OpenStreetMap",35.7740954,-5.8638288],
        ["Pharmacie Banafsaj صيدلية البنفسج","Rue Banafsaj",35.7875254,-5.8352893],
        ["Pharmacie Jamaâ Mekraa صيدلية جامع مقراع","OpenStreetMap",35.7864143,-5.8433979],
        ["Pharmacie Al Boughaz صيدلية البوغاز","Rue du Mexique 78",35.7799508,-5.81575],
        ["Pharmacie Al Azhar صيدلية الأزهر","OpenStreetMap",35.7550766,-5.8244489],
        ["Pharmacie Bismillah صيدلية بسم الله","Avenue Idriss Premier 12",35.7717161,-5.7993335],
        ["Pharmacie California صيدلية كليفورنيا","Rue Banafsaj",35.7816672,-5.8423394],
        ["Pharmacie El Houda صيدلية الهدى","Rue Hassan Dakhil",35.7711507,-5.8232056],
        ["Pharmacie Tarik Ben Ziad صيدلية طارق بن زياد","Boulevard Mohamed V شارع محمد الخامس 51",35.7772935,-5.8049326],
        ["Pharmacie Imam Nafie صيدلية الإمام نافع","Rue 12 زنقة",35.7489299,-5.8055346],
        ["Pharmacie les Palmiers صيدلية النخيل","Rue Antaki 7",35.780345,-5.8055711],
        ["Pharmacie Khalil صيدلية خليل","OpenStreetMap",35.7500235,-5.8337293],
        ["Pharmacie Lalla Chafia صيدلية لالة شافية","Rue Goutbourg",35.7714855,-5.8172455],
        ["Pharmacie Mabrouki صيدلية مبروكي","Avenue Moulay Ali Cherif",35.7538772,-5.813321],
        ["Pharmacie Marché de Gros Aouama صيدلية سوق الجملة","OpenStreetMap",35.749872,-5.7943847],
        ["Pharmacie Ouahabi صيدلية الوهابي","OpenStreetMap",35.7813974,-5.8465746],
        ["Pharmacie Souk M'Sallah صيدلية سوق المصلى","OpenStreetMap",35.7578434,-5.8120675],
        ["Grande Pharmacie Malabata صيدلية ملاباطا الكبرى","OpenStreetMap",35.7757341,-5.7770016],
        ["Pharmacie Al Khair صيدلية الخير","OpenStreetMap",35.7498628,-5.82063],
        ["Pharmacie Tufarma","boukhalf",35.7348371,-5.8897012],
        ["صيدلية قلب طنجة","OpenStreetMap",35.7599924,-5.7518517],
        ["Moun Para","OpenStreetMap",35.7725077,-5.7704981],
        ["صيدلية نوران","OpenStreetMap",35.760232,-5.7579693],
        ["صيدلية أريماس","Tanja Balia",35.7643529,-5.7599345],
        ["صيدلية الشجيرات","Tanja Balia",35.7655849,-5.7491404],
        ["صيدلية بوتور","Tanja Balia",35.7636627,-5.7697656],
        ["Pharmacie Kasbah","OpenStreetMap",35.788309,-5.8153101],
        ["صيدلية جبل طارق","OpenStreetMap",35.7796978,-5.7568098],
        ["صيدلية التفاؤل طنجة البالية","OpenStreetMap",35.7539344,-5.7563645],
        ["صيدلية البراق","OpenStreetMap",35.7666211,-5.7865371],
        ["صيدلية المنهج","OpenStreetMap",35.7565884,-5.7551073],
        ["صيدلية اليموني","OpenStreetMap",35.7671018,-5.7696924],
        ["صيدلية طنجة البالية","OpenStreetMap",35.7716386,-5.7691127],
        ["صيدلية أنفاس","hôtel ibis, Route malabata. El Afif Tower",35.7730348,-5.7813702],
        ["Parapharmacie Iberia","OpenStreetMap",35.7820087,-5.8207054],
        ["Parapharmacie Bassatine","OpenStreetMap",35.7702649,-5.8264522],
        ["Pharmacie Ben Taieb","OpenStreetMap",35.767448,-5.81792],
        ["Pharmacie delivre07","OpenStreetMap",35.777206,-5.798989],
        ["صيدلية ماما سناء","331",35.7474489,-5.7681119],
        ["صيدلية 911","OpenStreetMap",35.7225855,-5.7529355],
        ["صيدلية سانية مالاباطا","OpenStreetMap",35.7781098,-5.7542182],
        ["Pharmacie Maha صيدلية مها","OpenStreetMap",35.7363161,-5.8218884],
        ["Pharmacie Najid","OpenStreetMap",35.70349,-5.9007274],
        ["Pharmacie Badriouene","OpenStreetMap",35.7091808,-5.8782868]
      ]
    }
  };

  const DEFAULT_CITY = 'kenitra';
  const DEDUP_RADIUS_M = 50;
  const OVERPASS_MIRRORS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
  ];
  const NOMINATIM = 'https://nominatim.openstreetmap.org';

  // ============================================================
  // State
  // ============================================================
  let currentCityKey = DEFAULT_CITY;
  let pharmacies = [];
  let radiusM = 300;
  let addMode = false;
  let pendingLatLng = null;

  const storageKey = () => 'pharmacy-finder-v5-' + currentCityKey;
  const cityConfig = () => CITIES[currentCityKey];
  const bbox = () => cityConfig().bbox;

  // ============================================================
  // Map setup
  // ============================================================
  const map = L.map('map', { zoomControl: true })
    .setView(cityConfig().center, cityConfig().zoom);

  const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const satTiles = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: 'Tiles &copy; Esri' }
  );
  L.control.layers({ Streets: osmTiles, Satellite: satTiles }, {}, { position: 'topright' }).addTo(map);

  const markerLayer = L.layerGroup().addTo(map);
  const circleLayer = L.layerGroup().addTo(map);
  const candidateLayer = L.layerGroup().addTo(map);

  // ============================================================
  // Geometry helpers
  // ============================================================
  const M_PER_DEG_LAT = 110574;
  function mPerDegLng() {
    return 111320 * Math.cos(cityConfig().center[0] * Math.PI / 180);
  }

  function haversine(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ============================================================
  // Overpass with mirror fallback + retry
  // ============================================================
  async function runOverpass(query) {
    let lastErr = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      for (const mirror of OVERPASS_MIRRORS) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 30000);
          const res = await fetch(mirror, {
            method: 'POST',
            body: 'data=' + encodeURIComponent(query),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            signal: controller.signal
          });
          clearTimeout(timer);
          if (res.ok) return await res.json();
          lastErr = new Error('HTTP ' + res.status + ' from ' + mirror);
        } catch (e) {
          lastErr = e;
        }
      }
      if (attempt === 0) await new Promise(r => setTimeout(r, 2500));
    }
    throw lastErr || new Error('All Overpass mirrors failed');
  }

  // ============================================================
  // Rendering
  // ============================================================
  function pharmIcon(color) {
    return L.divIcon({
      className: '',
      html: `<div style="width:16px;height:16px;border-radius:50% 50% 50% 0;background:${color};transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);"></div>`,
      iconSize: [16, 16], iconAnchor: [8, 16]
    });
  }

  function renderAll() {
    markerLayer.clearLayers();
    circleLayer.clearLayers();

    pharmacies.forEach(p => {
      const isAdded = p.source === 'added';
      const color = isAdded ? '#6E5AA8' : '#D98C2B';
      const circleColor = isAdded ? '#6E5AA8' : '#C1483A';

      const marker = L.marker([p.lat, p.lng], { icon: pharmIcon(color) });
      let popup = `<b>${escapeHtml(p.name)}</b>` +
                  `<div class="popup-coords">${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}</div>`;
      if (p.addr) popup += `<div style="font-size:.75rem;color:#666;margin-top:2px;">${escapeHtml(p.addr)}</div>`;
      popup += `<button class="popup-del" data-id="${p.id}" type="button">Remove this pin</button>`;
      marker.bindPopup(popup);
      marker.on('popupopen', () => {
        const el = document.querySelector(`.popup-del[data-id="${p.id}"]`);
        if (el) el.addEventListener('click', () => { removePharmacy(p.id); map.closePopup(); });
      });
      markerLayer.addLayer(marker);

      const circle = L.circle([p.lat, p.lng], {
        radius: radiusM, color: circleColor, weight: 1.6,
        fillColor: circleColor, fillOpacity: 0.09, dashArray: '5,5'
      });
      circleLayer.addLayer(circle);
    });

    updateStats();
    renderList();
    persistState();
  }

  function updateStats() {
    document.getElementById('statTotal').textContent = pharmacies.length;
    document.getElementById('statAdded').textContent =
      pharmacies.filter(p => p.source === 'added').length;
    document.getElementById('listCount').textContent = pharmacies.length;
  }

  function renderList() {
    const list = document.getElementById('pharmList');
    list.innerHTML = '';
    const sorted = pharmacies.slice().sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(p => {
      const div = document.createElement('div');
      div.className = 'pharm-item';
      div.innerHTML =
        `<button class="jump" type="button" aria-label="Show ${escapeHtml(p.name)} on map">` +
          `<div class="pname">${escapeHtml(p.name)}</div>` +
          `<div class="paddr">${escapeHtml(p.addr || '')}</div>` +
        `</button>` +
        `<div class="tag ${p.source === 'added' ? 'added' : 'existing'}">${p.source === 'added' ? 'added' : 'listed'}</div>` +
        `<button class="del-btn" type="button" aria-label="Delete ${escapeHtml(p.name)}" title="Delete">&times;</button>`;
      div.querySelector('.jump').addEventListener('click', () => {
        map.setView([p.lat, p.lng], 16, { animate: true });
      });
      div.querySelector('.del-btn').addEventListener('click', () => removePharmacy(p.id));
      list.appendChild(div);
    });
  }

  function removePharmacy(id) {
    const target = pharmacies.find(p => p.id === id);
    if (!target) return;
    if (!confirm(`Remove "${target.name}" from the map?`)) return;
    pharmacies = pharmacies.filter(p => p.id !== id);
    renderAll();
  }

  // ============================================================
  // City switcher
  // ============================================================
  function setCity(cityKey) {
    if (!CITIES[cityKey]) return;
    currentCityKey = cityKey;
    candidateLayer.clearLayers();
    document.getElementById('candidateList').innerHTML = '';
    document.getElementById('statCandidates').textContent = '0';
    document.getElementById('osmStatus').textContent = '';
    document.getElementById('linkStatus').textContent = '';

    const cfg = cityConfig();
    map.setView(cfg.center, cfg.zoom);
    loadState();
    renderAll();
  }

  const citySelect = document.getElementById('citySelect');
  if (citySelect) {
    citySelect.value = currentCityKey;
    citySelect.addEventListener('change', e => setCity(e.target.value));
  }

  // ============================================================
  // Add pharmacy by click
  // ============================================================
  const addModeBtn = document.getElementById('addModeBtn');
  addModeBtn.addEventListener('click', () => {
    addMode = !addMode;
    addModeBtn.classList.toggle('active-mode', addMode);
    addModeBtn.textContent = addMode ? 'Tap the map to place pin…' : '+ Add pharmacy on map';
    map.getContainer().style.cursor = addMode ? 'crosshair' : '';
  });

  map.on('click', e => {
    if (!addMode) return;
    pendingLatLng = e.latlng;
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalCoords').textContent =
      `${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`;
    document.getElementById('modalNameInput').value = '';
    const status = document.getElementById('modalLookupStatus');
    status.className = 'lookup-status busy';
    status.textContent = 'Searching OpenStreetMap…';
    overlay.classList.remove('hidden');
    document.getElementById('modalNameInput').focus();
    lookupNearbyPharmacy(e.latlng.lat, e.latlng.lng);
  });

  async function lookupNearbyPharmacy(lat, lng) {
    const status = document.getElementById('modalLookupStatus');
    const nameInput = document.getElementById('modalNameInput');
    const myLatLng = pendingLatLng;

    try {
      const query = `[out:json][timeout:15];
        (
          node["amenity"="pharmacy"](around:100,${lat},${lng});
          way["amenity"="pharmacy"](around:100,${lat},${lng});
        );
        out center tags;`;
      const data = await runOverpass(query);
      if (pendingLatLng !== myLatLng) return;

      const elements = data.elements || [];
      if (elements.length > 0) {
        const withName = elements.filter(el => el.tags && el.tags.name);
        const pick = (withName.length ? withName : elements)
          .map(el => {
            const elLat = el.lat != null ? el.lat : el.center && el.center.lat;
            const elLng = el.lon != null ? el.lon : el.center && el.center.lon;
            return { el, d: (elLat != null) ? haversine(lat, lng, elLat, elLng) : Infinity };
          })
          .sort((a, b) => a.d - b.d)[0];

        const t = pick.el.tags || {};
        const name = t.name || t['name:fr'] || t['name:ar'] || '';
        if (name) {
          nameInput.value = name;
          const addr = t['addr:street'] ? `, ${t['addr:street']}` : '';
          status.className = 'lookup-status found';
          status.textContent = `Found "${name}"${addr} (${Math.round(pick.d)} m away). Edit if needed.`;
          return;
        }
      }

      const rev = await fetch(
        `${NOMINATIM}/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16&addressdetails=1`
      );
      if (pendingLatLng !== myLatLng) return;
      const revData = await rev.json();
      const a = revData.address || {};
      const hood = a.neighbourhood || a.suburb || a.city_district || a.village || a.town;
      status.className = 'lookup-status none';
      status.textContent = hood
        ? `No pharmacy found at this exact point. Nearest area: ${hood}. Enter the name manually.`
        : 'No pharmacy found nearby in OpenStreetMap. Enter the name manually.';
    } catch (err) {
      if (pendingLatLng !== myLatLng) return;
      status.className = 'lookup-status err';
      status.textContent = 'All Overpass mirrors are busy. Enter the name manually.';
    }
  }

  // ============================================================
  // Modal
  // ============================================================
  const overlay = document.getElementById('modalOverlay');
  const modalNameInput = document.getElementById('modalNameInput');
  let lastFocused = null;

  function closeModal() {
    overlay.classList.add('hidden');
    pendingLatLng = null;
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.getElementById('modalCancel').addEventListener('click', () => {
    closeModal();
    if (addMode) {
      addMode = false;
      addModeBtn.classList.remove('active-mode');
      addModeBtn.textContent = '+ Add pharmacy on map';
      map.getContainer().style.cursor = '';
    }
  });

  document.getElementById('modalConfirm').addEventListener('click', () => {
    const name = modalNameInput.value.trim() || 'Unnamed pharmacy';
    if (pendingLatLng) {
      pharmacies.push({
        id: 'added-' + Date.now(),
        name,
        addr: 'Added manually',
        lat: pendingLatLng.lat,
        lng: pendingLatLng.lng,
        source: 'added'
      });
      renderAll();
    }
    closeModal();
    if (addMode) {
      addMode = false;
      addModeBtn.classList.remove('active-mode');
      addModeBtn.textContent = '+ Add pharmacy on map';
      map.getContainer().style.cursor = '';
    }
  });

  overlay.addEventListener('keydown', e => {
    if (e.key === 'Escape') { document.getElementById('modalCancel').click(); return; }
    if (e.key !== 'Tab') return;
    const focusables = overlay.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ============================================================
  // Add by link
  // ============================================================
  function parseCoords(text) {
    text = (text || '').trim();
    const patterns = [
      /!3d(-?\d{1,3}\.\d+)!4d(-?\d{1,3}\.\d+)/,
      /[?&]q=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]query=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]ll=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]mlat=(-?\d{1,3}\.\d+).*?mlon=(-?\d{1,3}\.\d+)/,
      /@(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /^(-?\d{1,3}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)$/
    ];
    for (const re of patterns) {
      const m = text.match(re);
      if (m) {
        const lat = parseFloat(m[1]), lng = parseFloat(m[2]);
        if (Math.abs(lat) <= 90 && Math.abs(lng) <= 180) return { lat, lng };
      }
    }
    return null;
  }

  document.getElementById('addFromLinkBtn').addEventListener('click', () => {
    const statusEl = document.getElementById('linkStatus');
    const raw = document.getElementById('linkInput').value.trim();
    const name = document.getElementById('linkNameInput').value.trim();

    if (!raw) { statusEl.className = 'lookup-status none'; statusEl.textContent = 'Paste a link or coordinates first.'; return; }
    if (!name) { statusEl.className = 'lookup-status none'; statusEl.textContent = 'Give the pharmacy a name too.'; return; }
    if (/goo\.gl|maps\.app/.test(raw) && !/[@?]|!3d/.test(raw)) {
      statusEl.className = 'lookup-status none';
      statusEl.textContent = 'Short link. Open it in a tab first, then paste the full URL (or just the coordinates).';
      return;
    }

    const coords = parseCoords(raw);
    if (!coords) {
      statusEl.className = 'lookup-status none';
      statusEl.textContent = "Couldn't find coordinates. Try the full URL or 'lat, lng'.";
      return;
    }

    pharmacies.push({
      id: 'added-' + Date.now(),
      name, addr: 'Added via link',
      lat: coords.lat, lng: coords.lng, source: 'added'
    });
    renderAll();
    map.setView([coords.lat, coords.lng], 16, { animate: true });
    document.getElementById('linkInput').value = '';
    document.getElementById('linkNameInput').value = '';
    statusEl.className = 'lookup-status found';
    statusEl.textContent = `Added "${name}" at ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}.`;
  });

  // ============================================================
  // Radius
  // ============================================================
  document.getElementById('redrawBtn').addEventListener('click', () => {
    const v = parseInt(document.getElementById('radiusInput').value, 10);
    if (!isNaN(v) && v > 0) { radiusM = v; renderAll(); }
  });

  // ============================================================
  // Candidate finder
  // ============================================================
  document.getElementById('findBtn').addEventListener('click', findCandidates);

  async function findCandidates() {
    const btn = document.getElementById('findBtn');
    const listEl = document.getElementById('candidateList');
    candidateLayer.clearLayers();
    btn.disabled = true;
    btn.textContent = 'Scanning grid…';

    const box = bbox();
    const stepM = 150;
    const latStep = stepM / M_PER_DEG_LAT;
    const lngStep = stepM / mPerDegLng();
    const valid = [];
    for (let lat = box.latMin; lat <= box.latMax; lat += latStep) {
      for (let lng = box.lngMin; lng <= box.lngMax; lng += lngStep) {
        let minDist = Infinity;
        for (let i = 0; i < pharmacies.length; i++) {
          const d = haversine(lat, lng, pharmacies[i].lat, pharmacies[i].lng);
          if (d < minDist) minDist = d;
          if (minDist < radiusM) break;
        }
        if (minDist >= radiusM) valid.push({ lat, lng, minDist });
      }
    }

    if (valid.length === 0) {
      listEl.innerHTML = '<div class="empty-note">No open spots found. Try a smaller radius or fetch more pharmacies first.</div>';
      document.getElementById('statCandidates').textContent = '0';
      btn.disabled = false;
      btn.textContent = 'Find valid locations';
      return;
    }

    const contextR = Math.max(radiusM * 3, radiusM + 600);
    valid.forEach(c => {
      c.contextR = contextR;
      c.nearbyCount = pharmacies.reduce((n, p) =>
        n + (haversine(c.lat, c.lng, p.lat, p.lng) <= contextR ? 1 : 0), 0);
    });

    const between = valid.filter(c => c.nearbyCount >= 2);
    const pool = between.length > 0 ? between : valid;

    pool.sort((a, b) => a.minDist - b.minDist);
    const clusterR = Math.max(radiusM, 350);
    const chosen = [];
    for (const cand of pool) {
      if (chosen.some(c => haversine(cand.lat, cand.lng, c.lat, c.lng) < clusterR)) continue;
      chosen.push(cand);
      if (chosen.length >= 18) break;
    }

    btn.textContent = 'Measuring building density…';
    try {
      await measureDensity(chosen);
    } catch (err) {
      chosen.forEach(c => { c.buildings = null; c.density = 'unknown'; });
    }

    chosen.sort((a, b) => {
      const ab = a.buildings == null ? -1 : a.buildings;
      const bb = b.buildings == null ? -1 : b.buildings;
      if (bb !== ab) return bb - ab;
      return b.minDist - a.minDist;
    });

    renderCandidates(chosen);
    document.getElementById('statCandidates').textContent = chosen.length;
    btn.disabled = false;
    btn.textContent = 'Find valid locations';
  }

  async function measureDensity(candidates) {
    if (candidates.length === 0) return;
    const DENSITY_R = 250;
    const clauses = candidates.map(c =>
      `node["building"](around:${DENSITY_R},${c.lat},${c.lng});` +
      `way["building"](around:${DENSITY_R},${c.lat},${c.lng});`
    ).join('\n');
    const query = `[out:json][timeout:25];\n(\n${clauses}\n);\nout center;`;

    const data = await runOverpass(query);
    const els = data.elements || [];

    candidates.forEach(c => { c.buildings = 0; });

    els.forEach(el => {
      const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
      const lng = el.lon != null ? el.lon : (el.center && el.center.lon);
      if (lat == null) return;
      candidates.forEach(c => {
        if (haversine(c.lat, c.lng, lat, lng) <= DENSITY_R) c.buildings++;
      });
    });

    candidates.forEach(c => {
      if (c.buildings >= 120) c.density = 'high';
      else if (c.buildings >= 50) c.density = 'medium';
      else c.density = 'low';
    });
  }

  function densityLabel(d) {
    if (d === 'high') return 'high building density';
    if (d === 'medium') return 'moderate building density';
    if (d === 'low') return 'low building density';
    return 'density unknown';
  }

  function renderCandidates(chosen) {
    const listEl = document.getElementById('candidateList');
    if (chosen.length === 0) {
      listEl.innerHTML = '<div class="empty-note">No candidates after filtering.</div>';
      return;
    }
    listEl.innerHTML = '';
    chosen.forEach((c, i) => {
      const marker = L.circleMarker([c.lat, c.lng], {
        radius: 8, color: '#2F8F5B', weight: 2, fillColor: '#5BC98A', fillOpacity: 0.85
      });
      const bldgTxt = c.buildings == null ? 'building data unavailable' : `${c.buildings} buildings within 250 m`;
      marker.bindPopup(
        `<b>Candidate site ${i + 1}</b>` +
        `<div class="popup-coords">${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}</div>` +
        `<div style="font-size:.75rem;margin-top:2px;">${Math.round(c.minDist)} m clear of nearest pharmacy</div>` +
        `<div style="font-size:.75rem;color:#666;">${c.nearbyCount} pharmacies within ~${Math.round(c.contextR)} m</div>` +
        `<div style="font-size:.75rem;color:#666;">${bldgTxt} — ${densityLabel(c.density)}</div>`
      );
      candidateLayer.addLayer(marker);

      const row = document.createElement('div');
      row.className = 'candidate-item';
      row.innerHTML =
        `<button class="jump" type="button" aria-label="Show candidate ${i + 1} on map">` +
          `<div class="cname">#${i + 1} — ${Math.round(c.minDist)} m clear</div>` +
          `<div class="cmeta">${bldgTxt} — ${densityLabel(c.density)}<br>` +
          `boxed by ${c.nearbyCount} nearby pharmacies<br>` +
          `${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}</div>` +
        `</button>` +
        `<a href="https://www.google.com/maps?q=${c.lat},${c.lng}" target="_blank" rel="noopener">Open in Google Maps</a>`;
      row.querySelector('.jump').addEventListener('mouseenter', () => marker.setStyle({ radius: 11 }));
      row.querySelector('.jump').addEventListener('mouseleave', () => marker.setStyle({ radius: 8 }));
      row.querySelector('.jump').addEventListener('click', () => {
        map.setView([c.lat, c.lng], 16, { animate: true });
        marker.openPopup();
      });
      listEl.appendChild(row);
    });
  }

  // ============================================================
  // Merge from OSM (mirror-backed) — still useful for adding new pins
  // ============================================================
  document.getElementById('fetchOsmBtn').addEventListener('click', async () => {
    const status = document.getElementById('osmStatus');
    const btn = document.getElementById('fetchOsmBtn');
    btn.disabled = true;
    status.className = 'lookup-status busy';
    status.textContent = 'Querying OpenStreetMap (trying mirrors)…';

    try {
      const box = bbox();
      const query = `[out:json][timeout:25];
        (
          node["amenity"="pharmacy"](${box.latMin},${box.lngMin},${box.latMax},${box.lngMax});
          way["amenity"="pharmacy"](${box.latMin},${box.lngMin},${box.latMax},${box.lngMax});
        );
        out center tags;`;
      const data = await runOverpass(query);
      const elements = data.elements || [];

      if (elements.length === 0) {
        status.className = 'lookup-status none';
        status.textContent = 'OpenStreetMap returned no pharmacies in this area.';
        return;
      }

      const seen = new Set();
      const osmCandidates = [];
      elements.forEach(el => {
        const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
        const lng = el.lon != null ? el.lon : (el.center && el.center.lon);
        if (lat == null || lng == null) return;
        const key = lat.toFixed(5) + ',' + lng.toFixed(5);
        if (seen.has(key)) return;
        seen.add(key);
        const t = el.tags || {};
        const name = t.name || t['name:fr'] || t['name:ar'] || 'Unnamed pharmacy';
        const addr = [t['addr:street'], t['addr:housenumber']].filter(Boolean).join(' ');
        osmCandidates.push({
          id: 'osm-' + el.type + '-' + el.id,
          name,
          addr: addr || 'OpenStreetMap',
          lat, lng,
          source: 'existing'
        });
      });

      let added = 0, skipped = 0;
      osmCandidates.forEach(cand => {
        const dup = pharmacies.some(p => haversine(p.lat, p.lng, cand.lat, cand.lng) < DEDUP_RADIUS_M);
        if (dup) { skipped++; return; }
        pharmacies.push(cand);
        added++;
      });

      renderAll();
      status.className = 'lookup-status found';
      status.textContent = added > 0
        ? `Merged ${added} new pharmac${added === 1 ? 'y' : 'ies'} from OpenStreetMap. ${skipped} skipped as duplicates.`
        : `No new pharmacies found — all ${skipped} OSM results were already on your map.`;
    } catch (err) {
      status.className = 'lookup-status err';
      status.textContent = 'All Overpass mirrors are busy. Please try again in a minute.';
    } finally {
      btn.disabled = false;
    }
  });

  // ============================================================
  // Restore built-in seed
  // ============================================================
  document.getElementById('restoreSeedBtn').addEventListener('click', () => {
    const seed = cityConfig().seed;
    if (seed.length === 0) {
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status none';
      status.textContent = 'No built-in list for this city — use "Merge pharmacies from OpenStreetMap" instead.';
      return;
    }
    if (!confirm('Replace the current pharmacy list with the built-in seed list? Your added pins will be kept.')) return;
    const added = pharmacies.filter(p => p.source === 'added');
    pharmacies = seed.map((p, i) => ({
      id: 'seed-' + i, name: p[0], addr: p[1], lat: p[2], lng: p[3], source: 'existing'
    })).concat(added);
    renderAll();
    const status = document.getElementById('osmStatus');
    status.className = 'lookup-status found';
    status.textContent = `Restored ${seed.length} built-in pharmacies.`;
  });

  // ============================================================
  // Persistence
  // ============================================================
  function setSyncStatus(state, text) {
    const dot = document.getElementById('syncDot');
    const label = document.getElementById('syncText');
    if (!dot || !label) return;
    dot.className = 'sync-dot ' + state;
    label.textContent = text;
  }

  function seedList() {
    return cityConfig().seed.map((p, i) => ({
      id: 'seed-' + i, name: p[0], addr: p[1], lat: p[2], lng: p[3], source: 'existing'
    }));
  }

  function loadState() {
    pharmacies = seedList();
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) {
        setSyncStatus('ok', 'Ready. Your changes are saved in this browser.');
        return;
      }
      const data = JSON.parse(raw);
      const added = Array.isArray(data.addedPharmacies) ? data.addedPharmacies : [];
      added.forEach(p => {
        const dup = pharmacies.some(existing =>
          haversine(existing.lat, existing.lng, p.lat, p.lng) < DEDUP_RADIUS_M);
        if (!dup) pharmacies.push({ ...p, source: 'added' });
      });
      if (data.radiusM) radiusM = data.radiusM;
      setSyncStatus('ok', 'Restored your saved pins.');
    } catch (err) {
      setSyncStatus('err', "Couldn't read saved data. Starting fresh.");
    }
  }

  let persistTimer = null;
  function persistState() {
    if (persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      try {
        const added = pharmacies
          .filter(p => p.source === 'added')
          .map(p => ({ id: p.id, name: p.name, addr: p.addr, lat: p.lat, lng: p.lng }));
        localStorage.setItem(storageKey(), JSON.stringify({
          addedPharmacies: added,
          radiusM
        }));
        setSyncStatus('ok', 'Saved.');
      } catch (err) {
        setSyncStatus('err', "Couldn't save (storage full or blocked).");
      }
    }, 300);
  }

  // ============================================================
  // Export / Import
  // ============================================================
  document.getElementById('exportBtn').addEventListener('click', () => {
    const payload = {
      version: 5,
      city: currentCityKey,
      exportedAt: new Date().toISOString(),
      pharmacies: pharmacies.map(p => ({
        id: p.id, name: p.name, addr: p.addr, lat: p.lat, lng: p.lng, source: p.source
      })),
      radiusM
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentCityKey}-pharmacies-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });

  document.getElementById('importFile').addEventListener('change', async e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data.pharmacies)) throw new Error('Bad format');
      pharmacies = data.pharmacies.map((p, i) => ({
        id: p.id || ('imported-' + i + '-' + Date.now()),
        name: p.name || 'Unnamed pharmacy',
        addr: p.addr || 'Imported',
        lat: +p.lat, lng: +p.lng,
        source: p.source === 'added' ? 'added' : 'existing'
      })).filter(p => isFinite(p.lat) && isFinite(p.lng));
      if (data.radiusM) {
        radiusM = data.radiusM;
        document.getElementById('radiusInput').value = radiusM;
      }
      renderAll();
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status found';
      status.textContent = `Imported ${pharmacies.length} pharmacies.`;
    } catch (err) {
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status err';
      status.textContent = 'Import failed: not a valid export file.';
    } finally {
      e.target.value = '';
    }
  });

  // ============================================================
  // Reset
  // ============================================================
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (!confirm('Reset everything — radius, added pins, candidates, saved data for this city?')) return;
    localStorage.removeItem(storageKey());
    radiusM = 300;
    document.getElementById('radiusInput').value = 300;
    pharmacies = seedList();
    candidateLayer.clearLayers();
    document.getElementById('candidateList').innerHTML = '';
    document.getElementById('statCandidates').textContent = '0';
    document.getElementById('osmStatus').textContent = '';
    renderAll();
    setSyncStatus('ok', 'Reset complete.');
  });

  // ============================================================
  // Boot
  // ============================================================
  loadState();
  renderAll();
})();
