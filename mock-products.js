const products = [

    // CAT COFFEES : 8 REF
    {
        id : 1,
        cat : "coffee",
        name: "Le petit bordelais",
        description: "Le fameux mélande des bordelais 100% Arabica, extra !",
        price: "25,6 €/kg",
        imgItem : "",
        imgPreview: "" ,
        rate: "10/10",
    },
    {
        id : 2,
        cat : "coffee",
        name: "Mélange sexy",
        description: "Alléchant, désirable, sensuel, tentant, affriolant...",
        price: "25,6 €/kg",
        imgItem : "",
        imgPreview: "" ,
        rate: "10/10",
    },
    {
        id : 3,
        cat : "coffee",
        name: "San Raphael",
        description: "Un BIJOU de café, rond, équilibré, soutenu.",
        price: "24,8 €/kg",
        imgItem : "",
        imgPreview: "" ,
        rate: "10/10",
    },
    {
        id : 4,
        cat : "coffee",
        name: "Caracoli Yellow",
        description: "Caramel, Chocolat, Noix, Nougat, une claque !",
        price: "25,6 €/kg",
        imgItem : "",
        imgPreview: "" ,
        rate: "10/10",
    }]
//     ,{
//         id : 5,
//         cat : "coffee",
//         name: "Marco en Puissance",
//         description: "Le café de bar par excellence force et caractère.",
//         price: "22,8 €/kg",
//         imgItem : "",
//         imgPreview: lePetitBordelais ,
//         rate: "10/10",
//     },
//     {
//         id : 6,
//         cat : "coffee",
//         name: "Malabar Moussoné",
//         description: "Puissant et onctueux, un petit trésor de café",
//         price: "27,2 €/kg",
//         imgItem : "",
//         imgPreview: lePetitBordelais ,
//         rate: "10/10",
//     },
//     {
//         id : 7,
//         cat : "coffee",
//         name: "Colombie",
//         description: "Souple et équilibré, une BOMBE.",
//         price: "27,2 €/kg",
//         imgItem : "",
//         imgPreview: lePetitBordelais ,
//         rate: "10/10",
//     },

//     {
//         id : 8,
//         cat : "coffee",
//         name: "Chocaman",
//         description: "Un délice agrémenté de notes de chocolat noir, un vrai coup de coeur",
//         price: "28 €/kg",
//         imgItem : "",
//         imgPreview: lePetitBordelais ,
//         rate: "11/10",
//     },

//     // CAT TEES : 33 REF 

//     // THÉS NOIRS - 17 AU TOTAL

//     {
//         id : 9,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Paul et Virginie",
//         description : "Bouquet de saveurs résolument fruitées et gourmandes pour ce mélange aux délicieux arômes  framboise, groseille, fraise des bois, cerise, vanille et toffee. Un désormais «classique» parmi les mélanges signés Dammann Frères.",
//         price : "7€ / 100Gr ",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea1 ,
//         imgPreview : "tea1pvw.jpg"
//     },

//     {
//         id : 10,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Pêche de Vignes",
//         description : "Mélange de thés noirs au délicieux arôme pêche de vigne. Une parfaite harmonie entre les notes subtilement parfumées des thés sélectionnés à celle si fruitée d'un fruit merveilleux.",
//         price : "6,5€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea2 ,
//         imgPreview : "tea2pvw.jpg"
//     },

//     {
//         id : 11,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Jardin Bleu",
//         description : "Apprécié pour son bel équilibre et son savoureux parfum, il délivre une liqueur veloutée à la saveur de fruits du jardin mêlant avec gourmandise, rhubarbe, fraise et fraise des bois. Dégusté chaud ou encore glacé à la belle saison, on ne sait quelle préparation préférer pour ce thé tout simplement délicieux !",
//         price : "6,5€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea3 ,
//         imgPreview : "tea3pvw.jpg"
//     },

//     {
//         id : 12,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Douchka",
//         description : "Délicieusement parfumé, ce mélange de thés noirs mêlent dans une joyeuse harmonie, citron doux, citron vert, pamplemousse, orange douce, orange sanguine, mandarine, clémentine, bergamote pour offrir un thé aux agréables notes d'agrumes. ",
//         price : "7,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea4 ,
//         imgPreview : "tea4pvw.jpg"
//     },

//     {
//         id : 13,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Chaï",
//         description : "Si les paysages rwandais, verts et ondoyants, inspirent la douceur, le thé là-bas se boit corsé. Il allie la force d'un thé noir et le parfum de fines épices: gingembre, cannelle, cardamome, baies roses et girofle. Il pourra être consommé nature, avec un nuage de lait ou encore infusé directement dans du lait.",
//         price : "7€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea5 ,
//         imgPreview : "tea5pvw.jpg"
//     },

//     {
//         id : 14,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Coquelicot Gourmand",
//         description : "Thés noirs mêlés de pétales de fleur, aux arômes coquelicot, biscuit et pâte d'amande. Tantôt bonbon de sucre cuit, tantôt gâteaux de nos grand-mères, difficile de choisir parmi ses saveurs, peu importe ce thé est un délice !",
//         price : "6,6€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea6 ,
//         imgPreview : "tea6pvw.jpg"
//     },

//     {
//         id : 15,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Keemum F.O.P.",
//         description : "On décrit souvent les thés noirs de la province d’Anhui comme des thés à petites feuilles torsadées. Elles délivrent à l’infusion une liqueur puissante mais ronde et chaleureuse. On y retrouve des notes de cacao, cuir et certains d’entre nous y perçoivent même le parfum subtil de la rose.",
//         price : "6,7€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea7 , 
//         imgPreview : "tea7pvw.jpg"
//     },

//     {
//         id : 16,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Ceylan O.P. Supérieur",
//         description : "Mélange effectué par notre tea blender qui associe les meilleurs lots de différents jardins pour offrir un thé aromatique, aux notes boisées mais remarquablement doux et rond. Un thé à la belle liqueur ambrée pouvant être apprécié à tout moment de la journée.",
//         price : "7,2€ / 100Gr",
//         infusionTime : "3-5 minutes",
//         imgItem : imgItemTea8 ,
//         imgPreview : "tea8pvw.jpg"
//     },

//     {
//         id : 17,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "4,5,6, Cueillir des Cerises",
//         description : "La saveur douce et sucrée de la cerise associée à un bouquet de baies rouges et noires enveloppe délicieusement un thé noir. Notes boisées délicates et notes fruitées se répondent offrant une liqueur douce et savoureusement parfumée.",
//         price : "7€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea9 , 
//         imgPreview : "tea9pvw.jpg"
//     },

//     {
//         id : 18,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Mélange Anglais",
//         description : "De grandes origines du thé se mêlent en une belle harmonie. Les thés de Chine apportent de la douceur et de la structure et le thé de Ceylan un côté boisé. Ce mélange offre une douceur qui en fait un thé à consommer volontiers à toute heure de la journée.",
//         price : "6,9€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem : imgItemTea10,
//         imgPreview : "tea10pvw.jpg"
//     },

//     {
//         id : 19,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Assam Supérieur G.F.O.P.",
//         description : "Thé aux belles feuilles entières, riches en pointes dorées, cet assemblage de lots sélectionnés par notre tea-blender pour un thé à la belle infusion cuivrée développant des notes boisées et épicées à l’agréable rémanence miellée. A consommer à tout moment de la journée avec ou sans lait !",
//         price : "7,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea11,
//         imgPreview : "tea11pvw.jpg"
//     },

//     {
//         id : 20,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "4 Fruits Rouges",
//         description : "Mélange de thés noirs aux délicieux parfums de fruits rouges, mêlant les arômes cerise, fraise, framboise et groseille dans une composition irrésistiblement fruitée.",
//         price : "6,5€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea12,
//         imgPreview : "tea12pvw.jpg"
//     },

//     {
//         id : 21,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Noël à Paris",
//         description : "« Paris est une fête », et pour la plus belle d’entre toutes, il existe un thé savoureux et parfumé qui mêle avec gourmandise à un mélange de thés noirs, les saveurs fruitées de la cerise et de l’amande et celles délicieusement épicées du pain d’épices et du gingembre. ",
//         price : "7,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea13, 
//         imgPreview : "tea13pvw.jpg"
//     },

//     {
//         id : 22,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Darjeeling G.F.O.P",
//         description : "Thé d'été de Darjeeling, il mêle des feuilles en provenance de différents jardins. Son infusion libère une liqueur bien équilibrée à la saveur délicate d’amande et de pêche mûre.",
//         price : "9,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea14,
//         imgPreview : "tea14pvw.jpg"
//     },

//     // TEA 15 : VERIFIER LA BONNE VARIETE - 4 POSSIBILTES SUR DAMMANN 

//     {
//         id : 23,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Lapsang Souchong",
//         description : "Le parfum de fumée affirmé qu’exhale ce thé se révèle à l’infusion plus doux, plus subtil, presque délicat et restitue la palette aromatique du traditionnel Lapsang Souchong dans une tasse à la belle couleur cuivrée. ",
//         price : "6,5€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea15,
//         imgPreview : "tea15pvw.jpg"
//     },

//     {
//         id : 24,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Earl Grey Supérieur",
//         description : "Le plus réputé des thés aromatisés mêle avec bonheur des thés noirs à la finesse de la bergamote de Calabre. Un grand classique, toujours apprécié des amateurs.",
//         price : "8€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea16,
//         imgPreview : "tea16pvw.jpg"
//     },

//     {
//         id : 25,
//         cat : 'tea',
//         catTea : "Thé noir",
//         name : "Grand Yunnan G.F.O.P. Supérieur",
//         description : "Ce thé, aux feuilles très régulières et comportant de nombreux tips, donne une tasse à la saveur très développée, au caractère affirmé et aux notes animales, de feuille de cigare, légèrement fleurie. Le grand thé de Chine des connaisseurs.",
//         price : "8,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea17,
//         imgPreview : "tea17pvw.jpg"
//     },

// // THÉS VERTS - 12 AU TOTAL

//     {
//         id : 26,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Yunnan Vert",
//         description : "La province de Yunnan est mondialement reconnue pour ses thés sombres. Néanmoins, on y récolte également ce thé vert. Ses feuilles au vert sombre offrent une liqueur jaune clair, corsée et aux notes vertes et fleuries, longues en bouche. Parfait en accompagnement de mets légèrement salés, risotto aux légumes, fromages & fruits frais.",
//         price : "9,4€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem : imgItemTea18,
//         imgPreview : "tea18pvw.jpg"
//     },

//     {
//         id : 27,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Gunpowder",
//         description : "Poudre à canon pour les Occidentaux, « perles de thé » pour les chinois, ce thé évoque la préparation du thé à la menthe du Maghreb. 1 cuillerée à soupe de thé pour 50 cl d’eau, un petit bouquet de menthe fraîche et quelques morceaux de sucre. Parfait en accompagnement de poisson, citron, menthe, viande fumée ou cuite au barbecue.",
//         price : "6,2€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem : imgItemTea19,
//         imgPreview : "tea19pvw.jpg"
//     },

//     {
//         id : 28,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "1,2,3, Je m'en vais au bois",
//         description : "Délicieuse balade gourmande que cette association d'arômes cerise, Groseille, framboise, fraise des bois, cassis Myrtille et menthe poivrée à un thé vert. Quelques Groseilles, des morceaux de fraises viennent parfaire un thé irrésistiblement fruité.",
//         price : "7€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem : imgItemTea20,
//         imgPreview : "tea20pvw.jpg"
//     },

//     {
//         id : 29,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Genmaïcha bio",
//         description : "Mélange de thé vert Sencha, de riz torréfié et de riz soufflé donnant une liqueur aux notes vertes, iodées et de céréales grillées. Il accompagnera à merveille un brunch à base de bacon et d’œufs.",
//         price : "12,5€ / 100Gr",
//         infusionTime : "2-3 minutes",
//         imgItem :  imgItemTea21,
//         imgPreview : "tea21pvw.jpg"
//     },

//     {
//         id : 30,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : " Mandarin Jasmin",
//         description : "Thé vert corsé au doux parfum de jasmin. C’est le thé par excellence qui convient à la cuisine chinoise. En chine, pays d’origine des thés au jasmin, la manufacture des thés enfleurés aux fleurs fraîches de jasmin veut que les fleurs soient retirées une fois l’étape de l’enfleurage achevée. Les fleurs sèches qui ornent certains thés au jasmin sont ajoutées en en fin de préparation ; elles ne participent en rien à la puissance aromatique de ces thés. ",
//         price : "6,6€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea22,
//         imgPreview : "tea22pvw.jpg"
//     },

//     {
//         id : 31,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Dune d'épices",
//         description : "Un brin d'exotisme pour ce mélange où, des arômes pain d'épices et orange amère, des écorces d'orange et des pétales de fleurs composent, avec les notes fraîches et fruitées d'un thé vert, un thé aromatisé à la saveur étonnante et généreuse.",
//         price : "6,6€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea23,
//         imgPreview : "tea23pvw.jpg"
//     },

//     {
//         id : 32,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Fidji",
//         description : "Fraîcheur délicieusement épicée pour une alliance de thé vert, de citronnelle et de gingembre. Des écorces et un arôme de citron vert en plus, la recette se révèle irrésistible et multiple. Un thé qu’on aimera servi chaud, ou infusé à froid quelques heures et servi sur glace, on le trouvera irrésistible !",
//         price : "7,2€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem : imgItemTea24,
//         imgPreview : "tea24pvw.jpg"
//     },

//     {
//         id : 33,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Calabria",
//         description : "Déclinaison d'un thé Earl Grey sur un thé vert aromatisé à l'huile essentielle de bergamote. Fraîcheur, vivacité et saveur caractéristique de la bergamote sont les trois atouts de ce mélange savoureux.",
//         price : "7,1€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea25,
//         imgPreview : "tea25pvw.jpg"
//     },

//     {
//         id : 34,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Miss Dammann",
//         description : "Sémillante et piquante comme la parisienne, 'Miss Dammann' est une création mêlant thé vert et gingembre aux arômes fruités et acidulés du citron et du fruit de la passion. Un mélange tout en fraîcheur et en vivacité.",
//         price : "7,2€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea26,
//         imgPreview : "tea26pvw.jpg"
//     },

//     {
//         id : 35,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "L'Ôriental",
//         description : "Un thé mêlant la fraîcheur toute végétale d'un thé vert aux arômes fruités du fruit de la passion, de la pêche de vigne et de la fraise des bois. Il offre une infusion aux nuances fraîches et veloutées. ",
//         price : "6,9€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea27,
//         imgPreview : "tea27pvw.jpg"
//     },

//     // /! / ANICHAI REFERENCE COMME THE NOIR ET NON THE VERT : A VERIFIER 
//     {
//         id : 36,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Anichaï",
//         description : "Thé noir aromatisé selon une recette indienne. Épices indiennes rehaussées de morceaux de gingembre, clous de girofle, baies rouges et cardamome. Faire bouillir du lait, incorporer le thé Anichaï, infuser 5 minutes, filtrer et ajouter au besoin du sucre. ",
//         price : "7,2€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea28,
//         imgPreview : "tea28pvw.jpg"
//     },

//     // VERIFIER QUEL SENSHA, PLUSIEURS A DISPO SUR DAMMANN 

//     {
//         id : 37,
//         cat : 'tea',
//         catTea : "Thé vert",
//         name : "Sensha Japonais",
//         description : "Les Sencha (thés façonnés en aiguilles aplaties après un étuvage à la vapeur) sont très appréciés au Japon pour leur saveur rafraîchissante. Cette récolte d’été offre une tasse aux notes végétales puissantes et à l’arôme iodé avec une légère astringence. Parfait en accompagnement de fruits de mer et crustacés, poisson cru et fromage de chèvre frais.",
//         price : "8,7€ / 100Gr",
//         infusionTime : "3-4 minutes",
//         imgItem :  imgItemTea29,
//         imgPreview : "tea29pvw.jpg"
//     },

// // MATÉ - 1 AU TOTAL

//     {
//         id : 38,
//         cat : 'tea',
//         catTea : "Maté",
//         name : "Maté - Cacao Amande",
//         description : "La saveur herbacée et le caractère tonique caractéristiques du maté vert se combinent aux notes gourmandes de l’amande et du cacao pour offrir une infusion à la belle rondeur au fini sucré long en bouche. Infusion contenant de la caféine.",
//         price : "8,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem :  imgItemTea30, 
//         imgPreview : "tea30pvw.jpg"
//     },

// // MATÉ VERT - 1 AU TOTAL

//     {
//         id : 39,
//         cat : 'tea',
//         catTea : "Maté",
//         name : "Maté Vert - Nature du Brésil",
//         description : "Infusion d’une espèce botanique proche du houx appelée yerba maté, le maté se consomme depuis des siècles en Amérique du Sud. Servi chaude ou glacée, avec du miel pour plus de gourmandise, découvrez une infusion naturellement énergisante aux notes végétales intenses. Infusion contenant de la caféine.",
//         price : "5,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea31,
//         imgPreview : "tea31pvw.jpg"
//     },

// // ROOIBOS - 2 AU TOTAL

//     {
//         id : 40,
//         cat : 'tea',
//         catTea : "Rooibos",
//         name : "Rooibos - Fruits Rouges",
//         description : "A la fois, doux, rond et fruité, ce mélange allie avec gourmandise, les saveurs de la fraise et de la framboise à celle gourmande d’un biscuit moelleux. Les enfants l’adorent, les grands ne s’en privent jamais!",
//         price : "7€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea32,
//         imgPreview : "tea32pvw.jpg"
//     },

//     {
//         id : 41, 
//         cat : 'tea',
//         catTea : "Rooibos",
//         name : "Rooibos - Earl Grey",
//         description : "La délicieuse saveur fruitée de la bergamote est ici mêlée aux notes naturellement douces, boisées et presque miellées du rooibos d’Afrique du Sud. Une autre façon de savourer un grand classique jusqu’aux heures les plus tardives de la journée. ",
//         price : "8,2€ / 100Gr",
//         infusionTime : "4-5 minutes",
//         imgItem : imgItemTea33, 
//         imgPreview : "tea33pvw.jpg"
//     }
// ];

module.exports = products;