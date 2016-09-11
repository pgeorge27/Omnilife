import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/product-list/product-list.html'
})
export class ProductListPage {
  selectedItem: any;
  mensaje: any;
  activeMenu: string;
  productos: any;
  menu: any;
  productosArgentina: any;
  productosBolivia: any;
  productosBrasil: any;
  productosChile: any;
  productosColombia: any;
  productosCostaRica: any;
  productosEcuador: any;
  productosElSalvador: any;
  productosEspania: any;
  productosGuatemala: any;
  productosItalia: any;
  productosMexico: any;
  productosNicaragua: any;
  productosPanama: any;
  productosParaguay: any;
  productosPeru: any;
  productosRepublicaDominicana: any;
  productosEstadosUnidos: any;
  productosUruguay: any;

  constructor(private nav: NavController, navParams: NavParams, menu: MenuController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.mensaje = navParams.get('item');
    this.menu = menu;

    // ***** PRODUCTOS ARGENTINA ***** //
    this.productosArgentina = [
        {
            nombre:'Agua Blu Supreme, 600 ml.',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/arg/4160400.png'
        },{
            nombre:'Aloe Beta Limón Supreme, Bote 960 ml.',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (contiene estevia).',
            imagen:'build/image/productos/arg/4260205.png'
        },{
            nombre:'Aloe Beta Piña Supreme, Bote 960 ml.',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (contiene estevia).',
            imagen:'build/image/productos/arg/4260204.png'
        },{
            nombre:'Aloe Beta Piña, 200 ml.',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (contiene estevia).',
            imagen:'build/image/productos/arg/4210604.png'
        },{
            nombre:'Aqtua Mandarina Supreme, Caja C/30 Sachets',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Contiene estevia.',
            imagen:'build/image/productos/arg/3924734.png'
        },{
            nombre:'Biocros, Bote 567 grs.',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina.',
            imagen:'build/image/productos/arg/2021000.png'
        },{
            nombre:'Biocros, Caja C/30 Sobres',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina',
            imagen:'build/image/productos/arg/2023500.png'
        },{
            nombre:'Cafezzino Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Contiene: Mezclas de café y café verde. Sabor tradicional. Contiene estevia.',
            imagen:'build/image/productos/arg/5124732.png'
        },{
            nombre:'Dolce Vita Supreme Toronja, Caja C/30 Sachets',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (Fibra de goma acacia, fibra de arroz, fibra de manzana y salvado de avena). Con Polidextrosa. Sabor toronja. Contiene estevia',
            imagen:'build/image/productos/arg/4475910.png'
        },{
            nombre:'Dual C Mix, Bote 600 grs.',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/arg/4520900.png'
        },{
            nombre:'Ego life, Bote 517 grs.',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/arg/4921704.png'
        },{
            nombre:'Ego mint, Bote 480 grs.',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/arg/1121800.png'
        },{
            nombre:'Ego Sabor Herbal, Botella 200 ml.',
            descripcion:'Contiene: Vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/arg/1210600.png'
        },{
            nombre:'FiberN Plus Supreme, Doypack 450 grs.',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / contiene estevia. Sabor durazno.',
            imagen:'build/image/productos/arg/1571908.png'
        },{
            nombre:'Focus, Bote 555 grs.',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/arg/2521300.png'
        },{
            nombre:'Ohlala, Caja C/30 Sobres',
            descripcion:'Contiene: Extracto de cera de caña, vitamina E.',
            imagen:'build/image/productos/arg/2222200.png'
        },{
            nombre:'OML H (Homo) Manzana, Bote 540 grs.',
            descripcion:'Contiene: Vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/arg/1721528.png'
        },{
            nombre:'Omnikol, Botella 200 ml.',
            descripcion:'Contiene: Con Vitamina C. Sabor toronja.',
            imagen:'build/image/productos/arg/1810600.png'
        },{
            nombre:'Omnilife VKids, Doypack 400 grs.',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya, vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/arg/5025516.png'
        },{
            nombre:'Omniplus, Botella 940 ml',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chlorella, Manzanilla, Gotu Cola, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabor Frutas.',
            imagen:'build/image/productos/arg/2310300.png'
        },{
            nombre:'Omniplus, Caja C/30 Sobres',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chlorella, Manzanilla, Gotu Cola, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabor Frutas.',
            imagen:'build/image/productos/arg/2313800.png'
        },{
            nombre:'One Per Meal Mango, Bote 540 grs.',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/arg/2421529.png'
        },{
            nombre:'Power Maker Supreme, Caja C/30 Sachets 300 grs.',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja. Power maker supreme contiene estevia.',
            imagen:'build/image/productos/arg/2675600.png'
        },{
            nombre:'Power Maker, Bote 524 grs.',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja. Power maker supreme contiene estevia.',
            imagen:'build/image/productos/arg/2621600.png'
        },{
            nombre:'Starbien, Bote 615 grs.',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/arg/3020700.png'
        },{
            nombre:'Starbien, Caja C/30 Sobres 615 grs.',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/arg/3020730.png'
        },{
            nombre:'Super Mix Chocolate, 600 grs.',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate y vainilla.',
            imagen:'build/image/productos/arg/3120918.png'
        },{
            nombre:'Super Mix Vainilla, 600 grs.',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate y vainilla.',
            imagen:'build/image/productos/arg/3120916.png'
        },{
            nombre:'Thermogen Coffee, Bote 420 grs.',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/arg/3322032.png'
        },{
            nombre:'Thermogen Coffee, Caja C/30 Sobres 360 grs.',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/arg/3322232.png'
        },{
            nombre:'Thermogen Tea Maracuyá Supreme, Caja C/30 Sachets 225 grs.',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Contiene estevia.',
            imagen:'build/image/productos/arg/3575609.png'
        },{
            nombre:'Thermogen Tea Naranja Limón, Bote 555 grs.',
            descripcion:'Contiene: Cromo, vitamina C y E y extracto de zarzaparrilla.',
            imagen:'build/image/productos/arg/3521907.png'
        },{
            nombre:'Uzo Supreme, Caja C/30 Sachets 240 grs.',
            descripcion:'Contiene: Salvado de arroz modificado. Sabor vainilla francesa. Uzo supreme /contiene estevia.',
            imagen:'build/image/productos/arg/3875700.png'
        },{
            nombre:'Ego 10 Botella 200 ml.',
            descripcion:'Contiene Taurina Ribosa Vitaminas del complejo B',
            imagen:'build/image/productos/arg/4610609.png'
        },{
            nombre:'Ego Frutas, 6 latas',
            descripcion:'Rico en vitaminas del complejo B y C. La combinación perfecta para sentirse bien con delicioso sabor de Frutas del Bosque.',
            imagen:'build/image/productos/arg/4812300.png'
        },{
            nombre:'Omniplus Gel',
            descripcion:'Contiene: Extracto de hoja de olivo Árnica Aceite de jojoba Aloe vera Caléndula Frutas silvestres',
            imagen:'build/image/productos/arg/9501047.png'
        },{
            nombre:'OMNIVIU SUPREME CAJA C/30 SACHETS 150 GR',
            descripcion:'Suplemento alimenticio con luteina, zeaxantina, DHA (omega 3) y antioxidantes.',
            imagen:'build/image/productos/arg/5827415.png'
        },{
            nombre:'SHAKE SUPREME COOKIES & CREAM C/ 12 SOBRES',
            descripcion:'Polvo para preparar bebida con vitaminas y minerales.',
            imagen:'build/image/productos/arg/7170943.png'
        },{
            nombre:'Thermogen Tea Limón Supreme, Caja c/30 Sachets',
            descripcion:'Té negro y cromo Sabor limón Endulzado con estevia',
            imagen:'build/image/productos/arg/3575605.png'
        }
    ];

    // ***** PRODUCTOS BOLIVIA ***** //
    this.productosBolivia = [
        {
            nombre:'Cafezzino Olla Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/bol/5174727.png'
        },{
            nombre:'Cafezzino Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/bol/5124732.png'
        },{
            nombre:'Dolce Vita Supreme Toronja, Caja C/30 Sachets',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/bol/4475910.png'
        },{
            nombre:'Ego Thermogen Cola, 6 Latas',
            descripcion:'Contiene: Extracto de Tamarindo y cromo Sabor cola',
            imagen:'build/image/productos/bol/4710506.png'
        },{
            nombre:'Fiber\'N Plus Supreme, Doypack 450 grs.',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave estevia. Sabor durazno.',
            imagen:'build/image/productos/bol/1571908.png'
        },{
            nombre:'Magic Siluet, Paquete 24 piezas',
            descripcion:'Contiene: Galleta con cereal y fibra, cubierta de chocolate. Adicionada con vitaminas.',
            imagen:'build/image/productos/bol/1942418.png'
        },{
            nombre:'Thermogen Coffee, Caja C/30 Sobres',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/bol/3322232.png'
        },{
            nombre:'Thermogen Tea Durazno, Bote 540 grs.',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/bol/3521508.png'
        },{
            nombre:'Thermogen Tea Durazno, Caja C/30 Sobres',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/bol/3522208.png'
        },{
            nombre:'Thermogen Tea Limón, Bote 540 grs.',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/bol/3521505.png'
        },{
            nombre:'Thermogen Tea Limón, Caja C/30 Sobres',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/bol/3522205.png'
        },{
            nombre:'Thermogen Tea Maracuyá Supreme, Caja C/30 Sachets',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Endulzado con estevia.',
            imagen:'build/image/productos/bol/3575609.png'
        },{
            nombre:'OMNILIFE AQTUA SUPREME, C/30 SACHETS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/bol/3924734.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK 400 GRS',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya , vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/bol/5025516.png'
        },{
            nombre:'OMNIPLUS BOTELLA, 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/bol/2310300.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/bol/2310301.png'
        },{
            nombre:'OMNIPLUS NARANJA, CAJA C/30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/bol/2313801.png'
        },{
            nombre:'OMNIPLUS, CAJA CON 30 SOBRES 900 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/bol/2313800.png'
        },{
            nombre:'ONE PER MEAL MANGO, CAJA 30 SOBRES',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/bol/2422229.png'
        },{
            nombre:'OPTIMUS, 30 SOBRES, 438 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/bol/2523600.png'
        },{
            nombre:'POWER MAKER, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/bol/2621200.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/bol/3020700.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/bol/2521300.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/bol/2621600.png'
        },{
            nombre:'STARBIEN, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/bol/3020730.png'
        },{
            nombre:'SUPERMIX CHOCOLATE, LATA 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate y vainilla.',
            imagen:'build/image/productos/bol/3120918.png'
        },{
            nombre:'TEQUILIFE TORONJA, 6 LATAS',
            descripcion:'Refresco sabor toronja y agave.',
            imagen:'build/image/productos/bol/3210510.png'
        },{
            nombre:'THERMOGEN COFFEE, BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/bol/3322032.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES 561 GRS',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/bol/3721200.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme /estevia.',
            imagen:'build/image/productos/bol/3875700.png'
        },{
            nombre:'AGUA BLU, SUPREME 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/bol/4160400.png'
        },{
            nombre:'ALOE BETA LIMON SUPREME BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/bol/4260205.png'
        },{
            nombre:'ALOE BETA PIÑA, SUPREME BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/bol/4260204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/bol/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/bol/4210604.png'
        },{
            nombre:'DUAL C-MIX, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/bol/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/bol/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, 6 LATAS',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/bol/4812300.png'
        },{
            nombre:'EGO LIFE, CAJA 30 SOBRES',
            descripcion:'(Español) Contiene:  Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B.  Sabor piña.',
            imagen:'build/image/productos/bol/4923304.png'
        },{
            nombre:'EGO MINT, BOTE 480 GRS',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva.  Sabor menta.',
            imagen:'build/image/productos/bol/1121800.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/bol/1210600.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/bol/1422221.png'
        },{
            nombre:'FIBER\'N PLUS, 30 SOBRES, 450 GRS',
            descripcion:'(Español) Contiene:  Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/bol/1521900.png'
        },{
            nombre:'HOMO MANZANA, CAJA 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/bol/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/bol/1810600.png'
        },{
            nombre:'MAGNUS MAZANA BOTELLA 200 ML',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/bol/2010613.png'
        },{
            nombre:'MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/bol/2021000.png'
        },{
            nombre:'MAGNUS, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/bol/2023500.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES 300 GRS',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/bol/4023213.png'
        },{
            nombre:'NEWGURTH PIÑA C. SOYA, DOYPACK 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor piña colada.',
            imagen:'build/image/productos/bol/2125426.png'
        },{
            nombre:'NEWGHURT PIÑA COLADA, LATA 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor piña colada.',
            imagen:'build/image/productos/bol/2121926.png'
        },{
            nombre:'OHLALA, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E.  Sabor vainilla francesa.',
            imagen:'build/image/productos/bol/2222200.png'
        }
    ];

    // ***** PRODUCTOS BRASIL ***** //
    this.productosBrasil = [
        {
            nombre: 'Misturador Omnilife 750ml',
            descripcion: 'Misturador com pega emborrachada, esfera misturadora de aço inoxidável e tampa com clique de proteção. A melhor qualidade na hora de preparar seu produto em parceria com a Blender Bottle.',
            imagen: 'build/image/productos/bra/9704249.png'
        }, {
            nombre: 'Coqueteleira Omnilife 500ml',
            descripcion: 'Prática e fácil de carregar, este misturador conta com esfera de aço inoxidável que não enferruja. Aproveite o formato 500ml que é mais fácil de limpar e mais fácil de carregar.',
            imagen: 'build/image/productos/bra/909704248.png'
        }, {
            nombre: 'Teatino Supreme 225g - 30 sachês',
            descripcion: 'Delicioso chá sabor limão enriquecido com cromo, um nutriente essencial para o metabolismo dos carboidratos e gorduras. Baixo valor energético e não contém glúten.',
            imagen: 'build/image/productos/bra/3578705.png'
        }, {
            nombre: 'Fiber N Plus Supreme 450g - 30 sachês',
            descripcion: 'Rico em fibras dietéticas do farelo de aveia, milho e soja, que favorecem o bom funcionamento do aparelho digestivo. Contém inulina. Tomar antes das refeições. Sabor Pêssego.',
            imagen: 'build/image/productos/bra/1578500.png'
        }, {
            nombre: 'Dolce Vita Supreme 150g - 30 sachês',
            descripcion: 'Delicioso sabor Chá Branco e Canela, formulado com cromo e farelo de aveia. Pode contribuir com a manutenção do nível de glicose no sangue.',
            imagen: 'build/image/productos/bra/4475910.png'
        }, {
            nombre: 'Egolife Supreme 480 grs.',
            descripcion: 'Repositor de sais minerais perdidos durante a atividade física. Contém eletrólitos - sódio e potássio - carboidratos e vitaminas do complexo B. Sabor abacaxi. Consumir após atividades físicas.',
            imagen: 'build/image/productos/bra/4971804.png'
        }, {
            nombre: 'Teatino Supreme Pacote 337g',
            descripcion: 'Delicioso chá sabor limão enriquecido com cromo, um nutriente essencial para o metabolismo dos carboidratos e gorduras. Baixo valor energético e não contém glúten.',
            imagen: 'build/image/productos/bra/3577505.png'
        }, {
            nombre: 'Cafelife Supreme 150g - 30 sachês',
            descripcion: 'Café Solúvel rico em Cromo, um nutriente essencial para o metabolismo dos carboidratos e gorduras. Aqueça água, dissolva o produto e desfrute! Não contém glúten.',
            imagen: 'build/image/productos/bra/5124732.png'
        }, {
            nombre: 'Cafelife Pote 420 grs.',
            descripcion: 'Café Solúvel rico em Cromo, um nutriente essencial para o metabolismo dos carboidratos e gorduras. Aqueça água, dissolva o produto e desfrute! Não contém glúten.',
            imagen: 'build/image/productos/bra/3322032.png'
        }, {
            nombre: 'Fiber N Plus Supreme Pacote 450g',
            descripcion: 'Rico em fibras dietéticas do farelo de aveia, milho e soja, que favorecem o bom funcionamento do aparelho digestivo. Contém inulina. Tomar antes das refeições. Sabor Pêssego.',
            imagen: 'build/image/productos/bra/1571908.png'
        }, {
            nombre: 'Shake Supreme 600g - 12 sachês',
            descripcion: 'Bebida nutritiva a base de proteína, carboidratos, fibras, vitaminas e minerais para uma alimentação completa com nutrientes que permitem substituir até 2 refeições, em formato prático sachê e diluído apenas em água. Sabor Cookies&Cream',
            imagen: 'build/image/productos/bra/7170943.png'
        }, {
            nombre: 'Power Maker 360 grs.',
            descripcion: 'Produto alimentar com proteína de Soja, rico em Vitaminas (A, C, E e Ácido Pantotênico). Sabor Maça e Canela.',
            imagen: 'build/image/productos/bra/2625819.png'
        }, {
            nombre: 'Pump 560 grs.',
            descripcion: 'Suplemento rico em proteína de soja somado a carboidratos, vitaminas e minerais ideais para nutrição muscular. Sabor Cookies&Cream.',
            imagen: 'build/image/productos/bra/5426243.png'
        }, {
            nombre: 'Magnus Supreme 240g - 30 sachês',
            descripcion: 'Disposição com nutrição! Magnus é o energético que te dá energia somado a vitaminas do complexo B, E e outros minerais. Sabor Laranja, Limão e Cereja.',
            imagen: 'build/image/productos/bra/2075701.png'
        }, {
            nombre: 'Ego 10 200 ml.',
            descripcion: 'Contém taurina, cafeína e vitaminas do complexo B. Versão pronta para beber. Sabor Frutas Tropicais!',
            imagen: 'build/image/productos/bra/4610609.png'
        }, {
            nombre: 'Novakid Pacote 560g',
            descripcion: 'Nutrição especial indicada para mulheres no estado de gravidez devido a sua quantidade de ácido fólico assim como outras vitaminas e minerais como ferro, cálcio, proteínas e fibras. Sabor chocolate.',
            imagen: 'build/image/productos/bra/5426218.png'
        }, {
            nombre: 'Fem Pote 540g',
            descripcion: 'Nutrição especial para a mulher. Contém nutrientes Cromo e Niacina que contribui para o bom funcionamento do metabolismo. Sabor morango.',
            imagen: 'build/image/productos/bra/1421521.png'
        }, {
            nombre: 'Homo Pote 540g',
            descripcion: 'Nutrição especial para o homem. Contém nutrientes antioxidantes como vitaminas C, E e zinco. Não contém glúten. Sabor maça verde.',
            imagen: 'build/image/productos/bra/1721528.png'
        }, {
            nombre: 'Kenyan Pote 555 grs.',
            descripcion: 'Rico em colina, vitaminas do complexo B e zinco, que favorecem os processos de memória e aprendizagem. Não contém glúten. Sabor lima-limão.',
            imagen: 'build/image/productos/bra/2521300.png'
        }, {
            nombre: 'Starbien Pote 615g',
            descripcion: 'Hora de relaxar! Composto de vitaminas do complexo B, que favorecem o bom funcionamento do sistema nervoso, zinco, Vitamina E e C, e ácido fólico. Sabor Laranja Limão.',
            imagen: 'build/image/productos/bra/3020700.png'
        }, {
            nombre: 'Dual C Mix Pote 600g',
            descripcion: 'Rico em vitamina C, essencial para o bom funcionamento do sistema imune bem como para formação de colágeno ? necessário para estruturas como pele e ossos. Sabor Lima.',
            imagen: 'build/image/productos/bra/4520900.png'
        }, {
            nombre: 'One per Meal 360g - 30 sachês',
            descripcion: 'Fonte de vitaminas (A, D, B1, B2, Niacina, Ácido Pantotênico, B6, B12, C, E, Biotina, Ácido Fólico, Vitamina K) com função antioxidante e rico em minerais (selênio, cobre, iodo, cromo, manganês e zinco). Não contém glúten. Sabor Manga.',
            imagen: 'build/image/productos/bra/2422229.png'
        }, {
            nombre: 'Omnimix Supreme Sabor Chocolate 510g',
            descripcion: 'Alimento com soja, carboidratos, vitaminas e minerais. Ideal para complementar a alimentação de toda sua família.',
            imagen: 'build/image/productos/bra/3176318.png'
        }, {
            nombre: 'Omnimix Sabor Baunilha 600g',
            descripcion: 'Alimento com soja, carboidratos, vitaminas e minerais. Ideal para complementar a alimentação de toda sua família.',
            imagen: 'build/image/productos/bra/3125317.png'
        }, {
            nombre: 'UZO Pote 360g',
            descripcion: 'Produto formulado com farelo de arroz em pó e vitamina E que contribuiu para proteção das células pela sua função antioxidante. Pode contribuir para elevar a imunidade. Sabor baunilha.',
            imagen: 'build/image/productos/bra/3822298.png'
        }, {
            nombre: 'Aoé Supreme Sabor Abacaxi 200ml',
            descripcion: 'Contém sabor Abacaxi e Aloe vera. Produto rico em vitamina E com função antioxidante e polidextrose. Verão 200ml pronta para beber. Não contém glúten.',
            imagen: 'build/image/productos/bra/4260604.png'
        }, {
            nombre: 'Aoé Supreme Sabor Limão 960ml',
            descripcion: 'Contém sabor Limão e aloe vera. Produto rico em vitamina E com função antioxidante e polidextrose. Não contém glúten.',
            imagen: 'build/image/productos/bra/4260205.png'
        }, {
            nombre: 'Aoé Supreme Sabor Manga & Maracujá 960ml',
            descripcion: 'Contém sabor Manga&Maracujá e aloe vera. Produto rico em vitamina E com função antioxidante e polidextrose. Não contém glúten.',
            imagen: 'build/image/productos/bra/4260244.png'
        }, {
            nombre: 'Omniplus Supreme 150g - 30 sachês',
            descripcion: 'Líder de vendas da Omnilife, é a melhor alternativa para complementar a dieta do homem moderno por fornecer vitaminas e minerais já que é rico em zinco e selênio, fone de cobre e rico em vitaminas hidrossolúveis (complexo B e vitamina C) e lipossolúveis (A, D e E), as quais estão contidas na forma micelizada.',
            imagen: 'build/image/productos/bra/2374741.png'
        }
    ];

    // ***** PRODUCTOS CHILE ***** //
    this.productosChile = [
        {
            nombre:'AGUA BLU, SUPREME 600 ML',
            descripcion:'Agua mineral natural de manantial.',
            imagen:'build/image/productos/chi/4160400.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE 960 ML',
            descripcion:'Contiene: Sábila. Sabores piña y limón.',
            imagen:'build/image/productos/chi/4210205.png'
        },{
            nombre:'Aloe Beta Piña Supreme, BOTE 960 ML',
            descripcion:'Contiene: Sábila. Sabores piña y limón.',
            imagen:'build/image/productos/chi/4260204.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y extracto de café verde. Sabor tradicional. Contiene estevia.',
            imagen:'build/image/productos/chi/5124732.png'
        },{
            nombre:'DOLCE VITA SUPREME TORONJA, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/chi/4475910.png'
        },{
            nombre:'EGO LIFE PIÑA, BOTE 517 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos, vitamina B12 y Ácido Pantoténico. Sabor piña.',
            imagen:'build/image/productos/chi/4921704.png'
        },{
            nombre:'EGO MINT, BOTE 480 GRS',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/chi/1121800.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina B12, vitamina E y D.  Sabor herbal.',
            imagen:'build/image/productos/chi/1210600.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / contiene estevia. Sabor durazno.',
            imagen:'build/image/productos/chi/1571908.png'
        },{
            nombre:'MAGNUS, CAJA C/30 SOBRES 405 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/chi/2023500.png'
        },{
            nombre:'OMNILIFE DUAL-C MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/chi/4520900.png'
        },{
            nombre:'OMNILIFE MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/chi/2021000.png'
        },{
            nombre:'OMNILIFE STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitamina B2 (Riboflavina), Vitamina B6 (Piridoxina), Vitamina B12 y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/chi/3020700.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales saborizantes (Espirulina, Manzanilla, Gotu Cola, Schizandra). Vitaminas, Minerales y Extractos Herbales saborizantes. Sabor Frutas.',
            imagen:'build/image/productos/chi/2310300.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Contiene:      Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/chi/2521300.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/chi/2621600.png'
        },{
            nombre:'POWER MAKER, CAJA C/30 SOBRES 561 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/chi/2621200.png'
        },{
            nombre:'SUPER MIX VAINILLA S/LECHE, LATA 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen:'build/image/productos/chi/3120917.png'
        },{
            nombre:'THERMOGEN COFFEE, BOTE 420 GRS',
            descripcion:'Contiene: Café solluble y cromo Sabor tradicional.',
            imagen:'build/image/productos/chi/3322032.png'
        },{
            nombre:'THERMOGEN TEA LIMÓN, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/chi/3521505.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme contiene estevia.',
            imagen:'build/image/productos/chi/3875700.png'
        }
    ];

    // ***** PRODUCTOS COLOMBIA ***** //
    this.productosColombia = [
        {
            nombre:'AGUA BLU SUPREME, DE 1.5 LTS',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/col/4160100.png'
        },{
            nombre:'AGUA BLU, SUPREME 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/col/4160400.png'
        },{
            nombre:'ALOE BETA LIMÓN SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/col/4260205.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE 960 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/col/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/col/4260204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/col/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/col/4210604.png'
        },{
            nombre:'AQTUA, CAJA 30 SOBRES',
            descripcion:'Contiene: Coenzima Q10, magnesio y L-Carnitina. Sabor mandarina.',
            imagen:'build/image/productos/col/3923234.png'
        },{
            nombre:'BIOCROS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/col/2021000.png'
        },{
            nombre:'CAFEZZINO DE OLLA SUPREME, CAJA 30 SACHETS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/col/5174727.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/col/5124732.png'
        },{
            nombre:'COOKIES SUPREME, CAJA C/16 GALLETAS 120 GRS',
            descripcion:'Contiene: Fibra de salvado de trigo, polidextrosa e inulina. Endulzadas con estevia.',
            imagen:'build/image/productos/col/3492800.png'
        },{
            nombre:'DOLCE VITA SUPREME, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/col/4475910.png'
        },{
            nombre:'DUAL C MIX, 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/col/4522200.png'
        },{
            nombre:'DUAL C MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/col/4520900.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/col/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, 6 LATAS',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/col/4812300.png'
        },{
            nombre:'EGO MANDARIN, BOTELLA 200 ML',
            descripcion:'Contiene: Guaraná, Cromo.  Sabor mandarina.',
            imagen:'build/image/productos/col/1010634.png'
        },{
            nombre:'EGO MINT, CAJA 30 SOBRES',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva.  Sabor menta.',
            imagen:'build/image/productos/col/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/col/1210600.png'
        },{
            nombre:'EGOLIFE PIÑA, 30 SOBRES',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/col/4923304.png'
        },{
            nombre:'EGOLIFE PIÑA, BOTE 517 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/col/4921704.png'
        },{
            nombre:'ESTOP, CAJA 20 SOBRES, 400 GRS',
            descripcion:'Contiene: Inulina y almendra en polvo (fitoesteroles). Sabor almendra.',
            imagen:'build/image/productos/col/1320900.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/col/1422221.png'
        },{
            nombre:'FIBER N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/col/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, 30 SOBRES 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/col/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, CAJA 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/col/1722228.png'
        },{
            nombre:'MAGIC SILUET, PAQ 24 GALLETAS',
            descripcion:'Contiene: Galleta con cereal y fibra, cubierta de chocolate.  Adicionada con vitaminas.',
            imagen:'build/image/productos/col/1942418.png'
        },{
            nombre:'NEWGHURTH PIÑA C. SOYA, DOYPACK 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor piña colada.',
            imagen:'build/image/productos/col/2125426.png'
        },{
            nombre:'OMNIFIT CHOCOLATE, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/col/3125318.png'
        },{
            nombre:'OMNIFIT FRESA, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/col/3125321.png'
        },{
            nombre:'OMNIFIT VAINILLA DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/col/3125316.png'
        },{
            nombre:'OMNIFIT VAINILLA S/LECHE, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/col/3125317.png'
        },{
            nombre:'OMNILIFE FEM FRESA, BOTE 540 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/col/1421521.png'
        },{
            nombre:'OMNILIFE KOLINA BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/col/1810600.png'
        },{
            nombre:'OMNILIFE NOVAKID CHOCOLATE, DOYPACK 560 GRS',
            descripcion:'Contiene: Alto contenido de ácido fólico, hierro, calcio.  DHA (Omega-3).  Vitaminas y minerales.  Alto aporte de proteínas y fibra.  Bajo en grasa.  Sabor Chocolate.',
            imagen:'build/image/productos/col/5426218.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES&CREAM, DOYPACK',
            descripcion:'Contiene: Alto contenido de proteínas (20 grs). Alto contenido de Calcio y Hierro.  Vitaminas y minerales. Alto contenido de fibra.  Sin grasa. Sabor Cookies & Cream.',
            imagen:'build/image/productos/col/5426243.png'
        },{
            nombre:'OMNILIFE SHAKE SUPREME, CAJA 12 SOBRES',
            descripcion:'Contiene: Proteínas de soya (14 grs). Inulina (fibra dietética). Vitaminas y Minerales. Sabor Cookies & Cream.',
            imagen:'build/image/productos/col/7170943.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK 400 GRS',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya , vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/col/5025516.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/col/2310301.png'
        },{
            nombre:'OMNIPLUS NARANJA, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/col/2313801.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/col/2310300.png'
        },{
            nombre:'OMNIPLUS, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/col/2313800.png'
        },{
            nombre:'OMNIVIU SUPREME, CAJA C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Vitamina A, luteína, zeaxantina, vitamina C, grosella, arándano, Jamaica y uva. Sabor Moras. Endulzado con estevia.',
            imagen:'build/image/productos/col/5827415.png'
        },{
            nombre:'ONE PER MEAL, 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/col/2422229.png'
        },{
            nombre:'ONE PER MEAL, BOTE 540 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/col/2421529.png'
        },{
            nombre:'OPTIMUS, 30 SOBRES 438 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/col/2523600.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/col/2521300.png'
        },{
            nombre:'POWER MAKER, 30 SOBRES 561 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/col/2621200.png'
        },{
            nombre:'POWER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/col/2621600.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/col/3020700.png'
        },{
            nombre:'STARBIEN, CAJA 30 SOBRES 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/col/3020730.png'
        },{
            nombre:'THERMOGEN COFFE DE OLLA, 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/col/2923227.png'
        },{
            nombre:'THERMOGEN COFFEE, BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/col/3322032.png'
        },{
            nombre:'THERMOGEN COFFEE, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/col/3322232.png'
        },{
            nombre:'THERMOGEN TE DURAZNO, BOTE 540 GRS',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/col/3521508.png'
        },{
            nombre:'THERMOGEN TE LIMÓN, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/col/3521505.png'
        },{
            nombre:'THERMOGEN TEA DURAZNO, 30 SOBRES',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/col/3522208.png'
        },{
            nombre:'THERMOGEN TEA LIMÓN, 30 SOBRES',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/col/3522205.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ, 30 SOBRES',
            descripcion:'Contiene: L-Carnitina y L-Tirosina. Sabor maracuyá.',
            imagen:'build/image/productos/col/3524009.png'
        },{
            nombre:'THERMOGEN TEA NARANJA-LIMÓN 555 GRS',
            descripcion:'Contiene: Cromo , vitamina C y E y extracto de cocolmeca.',
            imagen:'build/image/productos/col/3521907.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme /estevia.',
            imagen:'build/image/productos/col/3875700.png'
        }
    ];

    // ***** PRODUCTOS COSTA RICA ***** //
    this.productosCostaRica = [
        {
            nombre:'AGUA BLU, SUPREME 600 ML',
            descripcion:'Contiene: Agua baja en sales.',
            imagen:'build/image/productos/cos/4160400.png'
        },{
            nombre:'ALOE BETA LIMON, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón.',
            imagen:'build/image/productos/cos/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón.',
            imagen:'build/image/productos/cos/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón.',
            imagen:'build/image/productos/cos/4210604.png'
        },{
            nombre:'DOLCE VITA TORONJA, BOTE 550 GRS',
            descripcion:'Contiene: Gymnema sylvestre y Mezclas de fibra. Sabor toronja.',
            imagen:'build/image/productos/cos/4421410.png'
        },{
            nombre:'DUAL C-MIX, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/cos/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/cos/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, CANASTA C/6 LATAS',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/cos/4812300.png'
        },{
            nombre:'EGO LIFE, 30 SOBRES 621 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/cos/4923304.png'
        },{
            nombre:'EGO LIFE, BOTE 517 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/cos/4921704.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/cos/1210600.png'
        },{
            nombre:'EGO THERMOGEN COLA CANASTILLA C/6 LATAS',
            descripcion:'Contiene: Extracto de Tamarindo y cromo. Sabor cola',
            imagen:'build/image/productos/cos/4710506.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/cos/1422221.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA C/30 SOBRES',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Sabor durazno.',
            imagen:'build/image/productos/cos/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/cos/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/cos/1810600.png'
        },{
            nombre:'MAGNUS MANZANA VERDE, BOTELLA 200 ML',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/cos/2010613.png'
        },{
            nombre:'MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/cos/2021000.png'
        },{
            nombre:'MAGNUS, CAJA CON 30 SOBRES 405 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/cos/2023500.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/cos/4023213.png'
        },{
            nombre:'OHLALA, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/cos/2222200.png'
        },{
            nombre:'OMNIPLUS NARANJA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/cos/2313801.png'
        },{
            nombre:'OMNIPLUS TRADICIONAL, 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/cos/2313800.png'
        },{
            nombre:'ONE PER MEAL MANGO, 30 SOBRES',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/cos/2422229.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/cos/2521300.png'
        },{
            nombre:'OPTIMUS, CAJA C/30 SOBRES',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/cos/2523600.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/cos/3020700.png'
        },{
            nombre:'STARBIEN, CAJA C/30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/cos/3020730.png'
        },{
            nombre:'THERMOGEN COFFEE BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo. Sabores tradicional y de olla.',
            imagen:'build/image/productos/cos/3322032.png'
        },{
            nombre:'THERMOGEN TEA LIMON, 30 SOBRES 360 GRS',
            descripcion:'Contiene:  Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/cos/3522205.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ, CAJA 30 SOBRES',
            descripcion:'Contiene: L-Carnitina y L-Tirosina. Sabor maracuyá.',
            imagen:'build/image/productos/cos/3524009.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/cos/3721200.png'
        },{
            nombre:'UZO, CAJA 30 SOBRES',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa.',
            imagen:'build/image/productos/cos/3822200.png'
        }
    ];

    // ***** PRODUCTOS ECUADOR ***** //
    this.productosEcuador = [
        {
            nombre:'OPTIMUS BOTE 555 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/ecu/2521300.png'
        },{
            nombre:'TEATINO LIMÓN, CAJA 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/ecu/3522205.png'
        },{
            nombre:'AGUA BLU, SUPREME 600 ML',
            descripcion:'Contiene: Agua baja en sales.',
            imagen:'build/image/productos/ecu/4160400.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón.',
            imagen:'build/image/productos/ecu/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón.',
            imagen:'build/image/productos/ecu/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón.',
            imagen:'build/image/productos/ecu/4210604.png'
        },{
            nombre:'BIOCROS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/ecu/2021000.png'
        },{
            nombre:'BIOCROS, CAJA 30 SOBRES 405 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/ecu/2023500.png'
        },{
            nombre:'CAFETINO, CAJA 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/ecu/3322232.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            "Contiene: Mezclas de café y café verde. Sabor tradicional. Endulzado con estevia.descripcion":'',
            imagen:'build/image/productos/ecu/5124732.png'
        },{
            nombre:'DOLCE VITA SUPREME TORONJA, C/30 SACHETS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/ecu/4475910.png'
        },{
            nombre:'DUAL C MIX, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/ecu/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/ecu/4610609.png'
        },{
            nombre:'EGO FRUTAS, 6 LATAS 355 ML C.U.',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/ecu/4812300.png'
        },{
            nombre:'EGO LIFE PIÑA, CAJA 30 SOBRES',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/ecu/4923304.png'
        },{
            nombre:'EGO MANDARIN, BOTELLA 200 ML',
            descripcion:'Contiene: Guaraná, Cromo.  Sabor mandarina.',
            imagen:'build/image/productos/ecu/1010634.png'
        },{
            nombre:'EGO MINT, CAJA 30 SOBRES',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva.  Sabor menta.',
            imagen:'build/image/productos/ecu/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/ecu/1210600.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/ecu/1422221.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/ecu/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA 30 SOBRES, 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/ecu/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, CAJA 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/ecu/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/ecu/1810600.png'
        },{
            nombre:'NEWGHURT PINA COLADA SOYA, LATA 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor piña colada.',
            imagen:'build/image/productos/ecu/2121926.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E.  Sabor vainilla francesa.',
            imagen:'build/image/productos/ecu/2222200.png'
        },{
            nombre:'OMNILIFE AQTUA SUPREME, CAJA C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/ecu/3924734.png'
        },{
            nombre:'OMNIPLUS BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/ecu/2310300.png'
        },{
            nombre:'OMNIPLUS NARANJA, 30 SOBRES 900 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/ecu/2313801.png'
        },{
            nombre:'OMNIPLUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra).  Vitaminas, Minerales y Extractos Herbales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/ecu/2313800.png'
        },{
            nombre:'ONE PER MEAL GLUTATION, BOTE 540 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/ecu/2421529.png'
        },{
            nombre:'ONE PER MEAL, CAJA 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/ecu/2422229.png'
        },{
            nombre:'OPTIMUS, CAJA 30 SOBRES, 438 GRS',
            descripcion:'Contiene:  Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/ecu/2523600.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina.  Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/ecu/2621600.png'
        },{
            nombre:'POWER MAKER, CAJA 30 SOBRES 561 GRS',
            descripcion:'Contiene: Arginina.  Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/ecu/2621200.png'
        },{
            nombre:'STARBIEN, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/ecu/3020730.png'
        },{
            nombre:'SUPER MIX VAINILLA S/LECHE, LATA 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen:'build/image/productos/ecu/3120917.png'
        },{
            nombre:'TEATINO DURAZNO, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/ecu/3522208.png'
        },{
            nombre:'TEATINO LIMÓN, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/ecu/3521505.png'
        },{
            nombre:'TEATINO MARACUYÁ, CAJA 30 SOBRES',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá.',
            imagen:'build/image/productos/ecu/3524009.png'
        },{
            nombre:'UZO SUPREME, CAJA C/30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme /estevia.',
            imagen:'build/image/productos/ecu/3875700.png'
        }
    ];

    // ***** PRODUCTOS EL SALVADOR ***** //
    this.productosElSalvador = [
        {
            nombre:'AGUA BLU SUPREME, 600 ML',
            descripcion:'Contiene: Agua baja en sales.',
            imagen:'build/image/productos/els/4160400.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE (960 ML)',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/els/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/els/4260204.png'
        },{
            nombre:'AQTUA SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/els/3924734.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabor tradicional. Endulzado con estevia.',
            imagen:'build/image/productos/els/5124732.png'
        },{
            nombre:'DOLCE VITA SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/els/4475910.png'
        },{
            nombre:'DOLCE VITA TORONJA, BOTE 550 GRS',
            descripcion:'Contiene: Gymnema sylvestre y Mezclas de fibra. Sabor toronja.',
            imagen:'build/image/productos/els/4421410.png'
        },{
            nombre:'DOLCE VITA, 90 TABLETAS',
            descripcion:'Contiene: Gymnema sylvestre y Mezclas de fibra. Sabor toronja.',
            imagen:'build/image/productos/els/4432900.png'
        },{
            nombre:'DUAL C MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/els/4520900.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/els/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, 6 LATAS',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/els/4812300.png'
        },{
            nombre:'EGO LIFE, BOTE 517 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/els/4921704.png'
        },{
            nombre:'EGO LIFE, 30 SOBRES 621 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/els/4923304.png'
        },{
            nombre:'EGO MINT, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/els/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/els/1210600.png'
        },{
            nombre:'FEM FRESA, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/els/1422221.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/els/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/els/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, CAJA 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/els/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/els/1810600.png'
        },{
            nombre:'MAGIC SILUET, PAQUETE 24 PIEZAS',
            descripcion:'Contiene: Galleta con cereal y fibra, cubierta de chocolate. Adicionada con vitaminas.',
            imagen:'build/image/productos/els/1942418.png'
        },{
            nombre:'MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas',
            imagen:'build/image/productos/els/2021000.png'
        },{
            nombre:'MAGNUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas',
            imagen:'build/image/productos/els/2023500.png'
        },{
            nombre:'MIMIS CAJA, 30 SOBRES',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/els/4023213.png'
        },{
            nombre:'NEWGHURT PIÑA COLADA, DOYPACK 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor piña colada.',
            imagen:'build/image/productos/els/2125426.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/els/2222200.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, 6 LATAS 355 ML C/U',
            descripcion:'Contiene: Refresco vitaminado. Vitaminas C y E. Sabor naranja. Endulzado con estevia/libre de calorías.',
            imagen:'build/image/productos/els/5310501.png'
        },{
            nombre:'OMNIPLUS FRUTAS SUPREME 30 SACH 600 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/els/2360400.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTELLA 940 ML.',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/els/2310301.png'
        },{
            nombre:'OMNIPLUS NARANJA, CAJA C/30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/els/2313801.png'
        },{
            nombre:'OMNIPLUS BOTELLA (940 ML)',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/els/2310300.png'
        },{
            nombre:'OMNIPLUS, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/els/2313800.png'
        },{
            nombre:'ONE PER MEAL MANGO, BOTE 540 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/els/2421529.png'
        },{
            nombre:'OPTIMUS, BOTE 555 MGRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/els/2521300.png'
        },{
            nombre:'OPTIMUS, CAJA 30 SOBRES 438 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/els/2523600.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja',
            imagen:'build/image/productos/els/2621600.png'
        },{
            nombre:'POWER MAKER, CAJA 30 SOBRES',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja',
            imagen:'build/image/productos/els/2621200.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/els/3020700.png'
        },{
            nombre:'STARBIEN, CAJA CON 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/els/3020730.png'
        },{
            nombre:'STOP, CAJA 20 SOBRES 400 GRS',
            descripcion:'Contiene: Inulina y almendra en polvo (fitoesteroles). Sabor almendra.',
            imagen:'build/image/productos/els/1320900.png'
        },{
            nombre:'SUPER MIX CHOCOLATE, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor chocolate y vainilla.',
            imagen:'build/image/productos/els/3125318.png'
        },{
            nombre:'SUPER MIX VAINILLA S/L, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor chocolate y vainilla.',
            imagen:'build/image/productos/els/3125317.png'
        },{
            nombre:'SUPER MIX VAINILLA, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor chocolate y vainilla.',
            imagen:'build/image/productos/els/3125316.png'
        },{
            nombre:'TEQUILIFE TORONJA, 6 LATAS',
            descripcion:'Refresco sabor toronja y agave.',
            imagen:'build/image/productos/els/3210510.png'
        },{
            nombre:'THERMOGEN COFFEE DE OLLA, BOTE 400',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/els/2922127.png'
        },{
            nombre:'THERMOGEN COFFEE OLLA, 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/els/2923227.png'
        },{
            nombre:'THERMOGEN COFFEE, BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/els/3322032.png'
        },{
            nombre:'THERMOGEN COFFEE, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/els/3322232.png'
        },{
            nombre:'THERMOGEN TEA DURAZNO, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Te negro y Cromo.',
            imagen:'build/image/productos/els/3522208.png'
        },{
            nombre:'THERMOGEN TEA LIMÓN, CAJA 30 SOBRES',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/els/3522205.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ, SUPREME',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Endulzado con estevia.',
            imagen:'build/image/productos/els/3575609.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES 561 GRS',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/els/3721200.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme /estevia.',
            imagen:'build/image/productos/els/3875700.png'
        }
    ];

    // ***** PRODUCTOS ESPANIA ***** //
    this.productosEspania = [
        {
            nombre:'OMNILIFE SUPERMIX CHOCOLATE, LATA 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate y vainilla.',
            imagen:'build/image/productos/esp/3120918.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ SUPREME, 30 SACHETS 225 GRS',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Endulzado con estevia.',
            imagen:'build/image/productos/esp/3575609.png'
        },{
            nombre:'ALOE BETA LIMÓN SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y endulzado con estevia.',
            imagen:'build/image/productos/esp/4260205.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y endulzado con estevia.',
            imagen:'build/image/productos/esp/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y endulzado con estevia.',
            imagen:'build/image/productos/esp/4210604.png'
        },{
            nombre:'DUAL C-MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/esp/4520900.png'
        },{
            nombre:'EGO LIFE PIÑA, CAJA 30 SOBRES',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/esp/4923304.png'
        },{
            nombre:'EGO MINT, BOTE 480 GRS',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva.  Sabor menta.',
            imagen:'build/image/productos/esp/1121800.png'
        },{
            nombre:'FEM FRESA, BOTE 540 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/esp/1421521.png'
        },{
            nombre:'FIBER\'N MOR, LATA 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de avena y de maíz.  Sabor durazno y papaya.',
            imagen:'build/image/productos/esp/1521908.png'
        },{
            nombre:'HOMO MANZANA VERDE, BOTE 540 GRS',
            descripcion:'Contiene: Vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/esp/1721528.png'
        },{
            nombre:'MAGNUS, BOTE 550 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y taurina. Sabor frutas.',
            imagen:'build/image/productos/esp/2022600.png'
        },{
            nombre:'NEWGHURT, BOTE 400 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabor durazno.',
            imagen:'build/image/productos/esp/2122108.png'
        },{
            nombre:'OMNILIFE MAGNUS, CAJA 30 SOBRES 450 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y taurina. Sabor frutas.',
            imagen:'build/image/productos/esp/2021900.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES & CREAM, DOYPACK',
            descripcion:'Contiene: Alto contenido de proteínas (20 grs). Calcio y Hierro. Vitaminas y minerales. Fibra. Sin grasa. Sabor Cookies & Cream.',
            imagen:'build/image/productos/esp/5426243.png'
        },{
            nombre:'OMNILIFE SUPERMIX VAINILLA, LATA 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate y vainilla.',
            imagen:'build/image/productos/esp/3120916.png'
        },{
            nombre:'OMNIPLUS FRUTAS, BOTE 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Aromas Herbales. Vitaminas y Minerales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/esp/2310300.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTE 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Aromas Herbales. Vitaminas y Minerales. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/esp/2310301.png'
        },{
            nombre:'OPTIMUS, BOTE 550 GRS',
            descripcion:'Contiene: Colina y vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/esp/2521300.png'
        },{
            nombre:'POWER MAKER, BOTE 500 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/esp/2622600.png'
        },{
            nombre:'STARB FRUTAS, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/esp/3020700.png'
        },{
            nombre:'SWEET SUCCESS SUPREME, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/esp/4475910.png'
        },{
            nombre:'THERMOGEN CAFE, 400 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/esp/3322132.png'
        },{
            nombre:'THERMOGEN COOKIES, CAJA 16 GALLETAS',
            descripcion:'Contiene: Fibra de salvado de trigo.',
            imagen:'build/image/productos/esp/3442800.png'
        },{
            nombre:'THERMOGEN TE LIMON, BOTE 500 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/esp/3521505.png'
        },{
            nombre:'THERMOGEN TE LIMÓN, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/esp/3522205.png'
        }
    ];

    // ***** PRODUCTOS GUATEMALA *****//
    this.productosGuatemala = [
        {
            nombre:'Dual C Mix, Bote 600 grs.',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/gua/4520900.png'
        },{
            nombre:'Dual C Mix, Caja C/30 Sobres 360 grs.',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/gua/4522200.png'
        },{
            nombre:'Kenyan, Bote 555 grs.',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/gua/2521300.png'
        },{
            nombre:'Kenyan, Caja C/30 Sobres',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/gua/2523600.png'
        },{
            nombre:'Ohlala, Caja C/30 Sobres 360 grs.',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/gua/2222200.png'
        },{
            nombre:'One Per Meal Mango, Caja C/30 Sobres 360 grs.',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/gua/2422229.png'
        },{
            nombre:'Root Food, 60 Cápsulas',
            descripcion:'Contiene: Vitaminas C y E, selenio y zinc, entre otras. Capsulas.',
            imagen:'build/image/productos/gua/2853000.png'
        },{
            nombre:'Starbien, Bote 615 grs.',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/gua/3020700.png'
        },{
            nombre:'Starbien, Caja C/30 Sobres',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/gua/3020730.png'
        },{
            nombre:'AGUA BLU, SUPREME 600 ML',
            imagen:'build/image/productos/gua/4160400.png'
        },{
            nombre:'ALOE BETA LIMÓN, BOTE 960 ML',
            imagen:'build/image/productos/gua/4210205.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            imagen:'build/image/productos/gua/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            imagen:'build/image/productos/gua/4210604.png'
        },{
            nombre:'AQTUA MANDARINA SUPREME, CAJA 30 SACHETS',
            imagen:'build/image/productos/gua/3924734.png'
        },{
            nombre:'BIOCROS MANZANA VERDE, BOTELLA 200 ML',
            imagen:'build/image/productos/gua/2010613.png'
        },{
            nombre:'BIOCROS, BOTE 567 GRS',
            imagen:'build/image/productos/gua/2021000.png'
        },{
            nombre:'BIOCROS, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/2023500.png'
        },{
            nombre:'CAFETINO DE OLLA, 30 SOBRES',
            imagen:'build/image/productos/gua/2923227.png'
        },{
            nombre:'CAFETINO DE OLLA, BOTE 400 GRS',
            imagen:'build/image/productos/gua/2922127.png'
        },{
            nombre:'CAFETINO, BOTE 420 GRS',
            imagen:'build/image/productos/gua/3322032.png'
        },{
            nombre:'CAFETINO, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/3322232.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS',
            imagen:'build/image/productos/gua/5124732.png'
        },{
            nombre:'COOKIES SUPREME, CAJA 16 GALLETAS 120 GRS',
            imagen:'build/image/productos/gua/3492800.png'
        },{
            nombre:'DOLCE VITA SUPREME, CAJA 30 SACHET 150 GRS',
            imagen:'build/image/productos/gua/4475910.png'
        },{
            nombre:'DOLCE VITA TORONJA, 30 SOBRES',
            imagen:'build/image/productos/gua/4420910.png'
        },{
            nombre:'DOLCE VITA TORONJA, BOTE 550 GRS',
            imagen:'build/image/productos/gua/4421410.png'
        },{
            nombre:'DOLCE VITA, 90 TABLETAS',
            imagen:'build/image/productos/gua/4432900.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            imagen:'build/image/productos/gua/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, 6 LATAS',
            imagen:'build/image/productos/gua/4812300.png'
        },{
            nombre:'EGO LIFE, 30 SOBRES 621 GRS',
            imagen:'build/image/productos/gua/4923304.png'
        },{
            nombre:'EGO MINT, 30 SOBRES 360 GRS',
            imagen:'build/image/productos/gua/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            imagen:'build/image/productos/gua/1210600.png'
        },{
            nombre:'EGO THERMOGEN COLA, 6 LATAS',
            imagen:'build/image/productos/gua/4710506.png'
        },{
            nombre:'ESTOP, CAJA 20 SOBRES 400 GRS',
            imagen:'build/image/productos/gua/1320900.png'
        },{
            nombre:'FEM FRESA, 30 SOBRES 360 GRS',
            imagen:'build/image/productos/gua/1422221.png'
        },{
            nombre:'FEM FRESA, BOTE 540 GRS',
            imagen:'build/image/productos/gua/1421521.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            imagen:'build/image/productos/gua/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, 30 SOBRES 360 GRS',
            imagen:'build/image/productos/gua/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            imagen:'build/image/productos/gua/1810600.png'
        },{
            nombre:'MAGIC SILUET, PAQUETES 24 PIEZAS',
            imagen:'build/image/productos/gua/1942418.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/4023213.png'
        },{
            nombre:'NEWGHURT DURAZNO, DOYPACK',
            imagen:'build/image/productos/gua/2125408.png'
        },{
            nombre:'NEWGHURT PIÑA COLADA, DOYPACK 450 GRS',
            imagen:'build/image/productos/gua/2125426.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, 6 LATAS 355 ML C/U',
            imagen:'build/image/productos/gua/5310501.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK',
            imagen:'build/image/productos/gua/5025516.png'
        },{
            nombre:'OMNIPLUS NARANJA, 30 SOBRES 900 ML',
            imagen:'build/image/productos/gua/2313801.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTELLA 940 ML',
            imagen:'build/image/productos/gua/2310301.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            imagen:'build/image/productos/gua/2310300.png'
        },{
            nombre:'OMNIPLUS, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/2313800.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            imagen:'build/image/productos/gua/2621600.png'
        },{
            nombre:'POWER MAKER, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/2621200.png'
        },{
            nombre:'SUPER MIX CHOCOLATE, DOYPACK 600 GRS',
            imagen:'build/image/productos/gua/3125318.png'
        },{
            nombre:'SUPER MIX FRESA, DOYPACK 600 GRS',
            imagen:'build/image/productos/gua/3125321.png'
        },{
            nombre:'SUPER MIX VAINILLA, DOYPACK 600 GRS',
            imagen:'build/image/productos/gua/3125316.png'
        },{
            nombre:'SUPERMIX VAINILLA S/L, DOYPACK 600 GRS',
            imagen:'build/image/productos/gua/3125317.png'
        },{
            nombre:'TEATINO DURAZNO, 30 SOBRES',
            imagen:'build/image/productos/gua/3522208.png'
        },{
            nombre:'TEATINO LIMÓN, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/3522205.png'
        },{
            nombre:'TEATINO NARANJA - LIMÓN, BOTE 555 GRS',
            imagen:'build/image/productos/gua/3521907.png'
        },{
            nombre:'TEQUILIFE TORONJA, 6 LATAS',
            imagen:'build/image/productos/gua/3210510.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ SUPREME, CAJA 30 SACHETS',
            imagen:'build/image/productos/gua/3575609.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES',
            imagen:'build/image/productos/gua/3721200.png'
        },{
            nombre:'UZO SUPREME CAJA 30 SACHETS',
            imagen:'build/image/productos/gua/3875700.png'
        }
    ];

    // ***** PRODUCTOS ITALIA *****//
    this.productosItalia = [
        {
            nombre:'ALOE BETA LIMONE SUPREME, BOTTIGLIA 960 ML',
            descripcion:'Contiene: Vitamina E ed aloe. Sapori: ananas e limone. Aloe suprema fibra beta (polidestrosio) e dolcificato con stevia.',
            imagen:'build/image/productos/ita/4260205.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTTIGLIA 200 ML',
            descripcion:'Contiene: Vitamina E ed aloe. Sapori: ananas. Aloe suprema fibra beta (polidestrosio) e dolcificato con stevia.',
            imagen:'build/image/productos/ita/4210604.png'
        },{
            nombre:'DUAL C-MIX, CONTENITORE/BOTTIGLIA 600 GRS',
            descripcion:'Contiene: Vitamina C. Sapore di agrumi.',
            imagen:'build/image/productos/ita/4520900.png'
        },{
            nombre:'EGO LIFE ANANAS, BOX 30 BUSTINE',
            descripcion:'Contiene: Elettroliti (potassio, sodio) carboidrati e vitamine del gruppo B Sapore di ananas.',
            imagen:'build/image/productos/ita/4923304.png'
        },{
            nombre:'EGO MINT, CONTENITORE/BOTTIGLIA 480 GRS',
            descripcion:'Contiene: Estratto di Soia, riboflavina, ed estratto di semi d\'uva. Sapore di menta.',
            imagen:'build/image/productos/ita/1121800.png'
        },{
            nombre:'FEM FRAGOLA, CONTENITORE/BOTTIGLIA 540 GRS',
            descripcion:'Contiene: Vitamine C ed E, cromo e niacina gusto fragola.',
            imagen:'build/image/productos/ita/1421521.png'
        },{
            nombre:'FIBER\'N MOR, LATTA 450 GRS',
            descripcion:'Contiene: Fibra miscela di avena e mais Sapore pesca e papaia .',
            imagen:'build/image/productos/ita/1521908.png'
        },{
            nombre:'MAGNUS, CONTENITORE/BOTTIGLIA 550 GRS',
            descripcion:'Contiene: Vitamine del gruppo B e taurina Sapore: frutta.',
            imagen:'build/image/productos/ita/2022600.png'
        },{
            nombre:'NEWGHURT, CONTENITORE/BOTTIGLIA 400 GRS',
            descripcion:'Contiene: Calcio e vitamina D Sapore:pesca.',
            imagen:'build/image/productos/ita/2122108.png'
        },{
            nombre:'OMNILIFE MAGNUS, SCATOLA DI 30 BUSTINI 450 GRS',
            descripcion:'Contiene: Vitamine del gruppo B e taurina Sapore: frutta.',
            imagen:'build/image/productos/ita/2021900.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES & CREAM, DOYPACK',
            descripcion:'Contiene: Alta proteine (20 grammi) Calcio e ferro Vitamine e minerali Fibra. Grasso. Sapore Cookies & Cream.',
            imagen:'build/image/productos/ita/5426243.png'
        },{
            nombre:'OMNILIFE SUPERMIX CIOCCOLATO, LATTA 600 GRS',
            descripcion:'Contiene: Proteine, vitamine, minerali e carboidrati Sapore: Cioccolato e vaniglia.',
            imagen:'build/image/productos/ita/3120918.png'
        },{
            nombre:'OMNILIFE SUPERMIX VANIGLIA, LATTA 600 GRS',
            descripcion:'Contiene: Proteine, vitamine, minerali e carboidrati Sapore: Vaniglia',
            imagen:'build/image/productos/ita/3120916.png'
        },{
            nombre:'OMNIPLUS ARANCIA, BOTTIGLIA 940 ML',
            descripcion:'Contiene: Vitamine (A, B1, B2, B3, B5, B6, B12, C, D, E, e biotina), minerali (calcio, magnesio, zinco, rame, cromo, manganese, selenio) e aromi di erbe. Vitamine e minerali. Sapori: Arancia.',
            imagen:'build/image/productos/ita/2310301.png'
        },{
            nombre:'OMNIPLUS FRUTAS, BOTTIGLIA 940 ML',
            descripcion:'Contiene: Vitamine (A, B1, B2, B3, B5, B6, B12, C, D, E, e biotina), minerali (calcio, magnesio, zinco, rame, cromo, manganese, selenio) e aromi di erbe. vitamine e minerali. Sapori: Frutta e Arancia.',
            imagen:'build/image/productos/ita/2310300.png'
        },{
            nombre:'OPTIMUS, CONTENITORE/BOTTIGLIA 550 GRS',
            descripcion:'Contiene: Colina e vitamine del gruppo B Gusto: frutti.',
            imagen:'build/image/productos/ita/2521300.png'
        },{
            nombre:'POWER MAKER, CONTENITORE/BOTTIGLIA 500 GRS',
            descripcion:'Contiene: Arginina Vitamine e minerali Sapore di arancia',
            imagen:'build/image/productos/ita/2622600.png'
        },{
            nombre:'STARB FRUTTI, CONTENITORE/BOTTIGLIA 615 GRS',
            descripcion:'Contiene: Vitamine del gruppo B e acido folico Sapore di frutta.',
            imagen:'build/image/productos/ita/3020700.png'
        },{
            nombre:'SWEET SUCCESS SUPREME, C/30 BUSTINE 150 GRS',
            descripcion:'Contiene: Caffè verde e miscele di fibre (crusca di riso, fibra di mela e crusca di avena) Sapore pompelmo  Dolcificato con stevia',
            imagen:'build/image/productos/ita/4475910.png'
        },{
            nombre:'THERMOGEN CAFE, 400 GRS',
            descripcion:'Contiene: Miscele di caffè e cromo Gusto tradizionale',
            imagen:'build/image/productos/ita/3322132.png'
        },{
            nombre:'THERMOGEN COOKIES, BISCOTTI BOX 16',
            descripcion:'Contiene: Fibra di crusca di frumento',
            imagen:'build/image/productos/ita/3442800.png'
        },{
            nombre:'THERMOGEN TE LIMÓN, 30 BUSTINE BOX 360 GRS',
            descripcion:'Contiene: Cromo tè nero e sapore di limone.',
            imagen:'build/image/productos/ita/3522205.png'
        },{
            nombre:'THERMOGEN TE LIMÓN, CONTENITORE/BOTTIGLIA 500 GRS',
            descripcion:'Contiene: Cromo tè nero e sapore di limone.',
            imagen:'build/image/productos/ita/3521505.png'
        },{
            nombre:'THERMOGEN TEA PASSION FRUIT SUPREME, 30 SACCHETTS 225 GRS',
            descripcion:'Contiene: Caffè verde, L-carnitina e L-tirosina Passione Dolcificato con stevia gusto.',
            imagen:'build/image/productos/ita/3575609.png'
        }
    ];

    // ***** PRODUCTOS MEXICO *****//
    this.productosMexico = [
        {
            nombre:'Cafezzino Olla Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Suplemento alimenticio a base de café con inulina sabor café de olla.',
            imagen:'build/image/productos/mex/5174727.png'
        },{
            nombre:'Cafezzino Supreme, Caja C/30 Sachets',
            descripcion:'Suplemento alimenticio a base de café con inulina.',
            imagen:'build/image/productos/mex/5124732.png'
        },{
            nombre:'Cookies Supreme, Caja C/16 galletas 120 grs.',
            descripcion:'Galletas de trigo con fibra reducidas en calorías.',
            imagen:'build/image/productos/mex/3492800.png'
        },{
            nombre:'Dolce Vita Supreme Toronja, Caja C/30 sachets 150 grs.',
            descripcion:'Suplemento alimenticio con fibra, extracto de café verde y estevia.',
            imagen:'build/image/productos/mex/4475910.png'
        },{
            nombre:'Dolce Vita Toronja, Caja C/30 sobres',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/4420910.png'
        },{
            nombre:'Dolce Vita, Frasco 90 tabletas',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/4432900.png'
        },{
            nombre:'Ego Cola, 6 latas 355 ml. c/u',
            descripcion:'Suplemento alimenticio thermogen cola sin cafeína.',
            imagen:'build/image/productos/mex/4710506.png'
        },{
            nombre:'Ego Mandarin, Botella 200 ml.',
            descripcion:'Suplemento alimenticio, sabor natural de mandarina.',
            imagen:'build/image/productos/mex/1010634.png'
        },{
            nombre:'ESTOP MEXICO, CAJA C/20 SOBRES',
            descripcion:'Suplemento alimenticio a base de almendras.',
            imagen:'build/image/productos/mex/1320900.png'
        },{
            nombre:'Fiber\'N Plus Supreme, Doypack 450 grs.',
            descripcion:'Suplemento alimenticio con inulina de agave.',
            imagen:'build/image/productos/mex/1571908.png'
        },{
            nombre:'Fiber\'N Plus Supreme, Sachets 450 grs.',
            descripcion:'Suplemento alimenticio con inulina de agave.',
            imagen:'build/image/productos/mex/1578400.png'
        },{
            nombre:'OMNILIFE SHAKE SUPREME COOKIES & CREAM',
            descripcion:'Polvo para preparar bebida con vitaminas y minerales.',
            imagen:'build/image/productos/mex/7170943.png'
        },{
            nombre:'OMNIMAN40+ SUPREME, 30 SACHETS 180 GRS',
            descripcion:'Suplemento alimenticio con licopeno, vitaminas, minerales y antioxidantes.',
            imagen:'build/image/productos/mex/5927434.png'
        },{
            nombre:'OMNIPLUS FRUTAS SUPREME, 30 SACHET 600 ML',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2360400.png'
        },{
            nombre:'Super Mix Supreme Vainilla, Caja C/30 sachets 510 grs.',
            descripcion:'Suplemento alimenticio con proteína de soya, calcio, prebióticos y DHA.',
            imagen:'build/image/productos/mex/3178516.png'
        },{
            nombre:'SUPER MIX VAINILLA S/LECHE, DOYPACK 600 GRS',
            descripcion:'Suplemento alimenticio sabor vainilla.',
            imagen:'build/image/productos/mex/3125317.png'
        },{
            nombre:'Thermogen Coffee de Olla Supreme, Bote 175 grs.',
            descripcion:'Suplemento alimenticio a base de café con cromo.',
            imagen:'build/image/productos/mex/2976500.png'
        },{
            nombre:'Thermogen Coffee Olla Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Suplemento alimenticio a base de café con cromo.',
            imagen:'build/image/productos/mex/2976500.png'
        },{
            nombre:'Thermogen Coffee Olla, Bote 400 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2922127.png'
        },{
            nombre:'Thermogen Coffee Olla, Caja C/30 Sobres',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2923227.png'
        },{
            nombre:'Thermogen Coffee Supreme, Bote 175 grs.',
            descripcion:'Suplemento alimenticio a base de café con cromo.',
            imagen:'build/image/productos/mex/3376532.png'
        },{
            nombre:'Thermogen Coffee Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Suplemento alimenticio a base de café con cromo.',
            imagen:'build/image/productos/mex/3375932.png'
        },{
            nombre:'Thermogen Coffee, Bote 420 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3322032.png'
        },{
            nombre:'Thermogen Coffee, Caja C/30 Sobres',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3322232.png'
        },{
            nombre:'Thermogen Tea Durazno, Bote 540 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3521508.png'
        },{
            nombre:'Thermogen Tea Durazno, Caja C/30 Sobres',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3522208.png'
        },{
            nombre:'Thermogen Tea Limón Supreme, Bote 300 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3576705.png'
        },{
            nombre:'Thermogen Tea Limón Supreme, Caja C/30 sachets 225 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3575605.png'
        },{
            nombre:'Thermogen Tea Limón, Caja C/30 Sobres 360 grs.',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/3522205.png'
        },{
            nombre:'Thermogen Tea Maracuyá Supreme, Caja C/30 Sachets 225 grs.',
            descripcion:'Suplemento alimenticio con aminoácidos, sabor maracuyá.',
            imagen:'build/image/productos/mex/3575609.png'
        },{
            nombre:'Thermogen Tea Naranja-Limón, 555 grs.',
            descripcion:'Suplemento alimenticio sabor naranja-limón.',
            imagen:'build/image/productos/mex/3521907.png'
        },{
            nombre:'AGUA BLU SUPREME, 1.5 LTS',
            descripcion:'Agua purificada.',
            imagen:'build/image/productos/mex/4160100.png'
        },{
            nombre:'AGUA BLU SUPREME, 600 ML',
            descripcion:'Agua purificada.',
            imagen:'build/image/productos/mex/4160400.png'
        },{
            nombre:'ALOE BETA LIMON SUPREME, BOTE 960 ML',
            descripcion:'Suplemento alimenticio micelizado con gel de sábila y vitamina E.',
            imagen:'build/image/productos/mex/4260205.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME, 200 ML',
            descripcion:'Suplemento alimenticio micelizado con gel de sábila y vitamina E.',
            imagen:'build/image/productos/mex/4260604.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME, BOTE 960 ML',
            descripcion:'Suplemento alimenticio micelizado con gel de sábila y vitamina E.',
            imagen:'build/image/productos/mex/4260204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Suplemento alimenticio micelizado con gel de sábila y vitamina E.',
            imagen:'build/image/productos/mex/4210204.png'
        },{
            nombre:'ALOE BETA PINA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/mex/4210604.png'
        },{
            nombre:'AQTUA SUPREME, CAJA 30 SACHETS',
            descripcion:'Suplemento alimenticio con coenzima Q10 y magnesio, sabor mandarina.',
            imagen:'build/image/productos/mex/3924734.png'
        },{
            nombre:'CHIVA COLA, 6 LATAS',
            descripcion:'Bebida gasificada sabor cola.',
            imagen:'build/image/productos/mex/4310506.png'
        },{
            nombre:'CHIVA COLA, BOTELLA 600 ML',
            descripcion:'Bebida gasificada sabor cola.',
            imagen:'build/image/productos/mex/4310406.png'
        },{
            nombre:'DUAL C-MIX, BOTE 600 GRS',
            descripcion:'Suplemento alimenticio sabor cítricos.',
            imagen:'build/image/productos/mex/4520900.png'
        },{
            nombre:'DUAL C-MIX, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio sabor cítricos.',
            imagen:'build/image/productos/mex/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Suplemento alimenticio sabor fruta de la pasión.',
            imagen:'build/image/productos/mex/4610609.png'
        },{
            nombre:'EGO FRUTAS, 6 LATAS 355 ML C/U',
            descripcion:'Suplemento alimenticio sabor frutas del bosque.',
            imagen:'build/image/productos/mex/4812300.png'
        },{
            nombre:'EGO LIFE PIÑA, BOTE 517 GRS',
            descripcion:'Bebida hipotónica sabor piña.',
            imagen:'build/image/productos/mex/4921704.png'
        },{
            nombre:'EGO LIFE PIÑA, BOTELLA 600 ML',
            descripcion:'Bebida hipotónica sabor piña.',
            imagen:'build/image/productos/mex/4910404.png'
        },{
            nombre:'EGO LIFE PIÑA, CAJA 30 SOBRES',
            descripcion:'Bebida hipotónica sabor piña.',
            imagen:'build/image/productos/mex/4923304.png'
        },{
            nombre:'EGO MINT, BOTE 480 GRS',
            descripcion:'Suplemento alimenticio con sabor natural a menta.',
            imagen:'build/image/productos/mex/1121800.png'
        },{
            nombre:'EGO MINT, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio con sabor natural a menta.',
            imagen:'build/image/productos/mex/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Suplemento alimenticio sabor herbal.',
            imagen:'build/image/productos/mex/1210600.png'
        },{
            nombre:'FEM FRESA, BOTE 540 GRS',
            descripcion:'Suplemento alimenticio, fresa.',
            imagen:'build/image/productos/mex/1421521.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio, fresa.',
            imagen:'build/image/productos/mex/1422221.png'
        },{
            nombre:'HOMO MANZANA VERDE, BOTE 540 GRS',
            descripcion:'Suplemento alimenticio, manzana verde.',
            imagen:'build/image/productos/mex/1721528.png'
        },{
            nombre:'HOMO MANZANA VERDE, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio, manzana verde.',
            imagen:'build/image/productos/mex/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/1810600.png'
        },{
            nombre:'Magic Siluet, Paquete C/24 galletas',
            descripcion:'Galleta cubierta de chocolate con fructosa con cereales y fibra.',
            imagen:'build/image/productos/mex/1942418.png'
        },{
            nombre:'MAGNUS MANZANA, BOTELLA 200 ML',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2010613.png'
        },{
            nombre:'MAGNUS SUPREME, BOTE 280 GRS',
            descripcion:'Suplemento alimenticio con vitaminas y minerales.',
            imagen:'build/image/productos/mex/2076600.png'
        },{
            nombre:'MAGNUS SUPREME, CAJA C/30 SACHETS 240 GRS',
            descripcion:'Suplemento alimenticio con vitaminas y minerales.',
            imagen:'build/image/productos/mex/2075722.png'
        },{
            nombre:'MAGNUS, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2023500.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES 300 GRS',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/mex/4023213.png'
        },{
            nombre:'NEWGHURT DURAZNO, DOYPACK 450 GRS',
            descripcion:'Suplemento alimenticio en polvo sabor durazno con calcio y fibra.',
            imagen:'build/image/productos/mex/2125408.png'
        },{
            nombre:'NEWGHURT PIÑA C.SOYA, DOYPACK 450 GRS',
            descripcion:'Suplemento alimenticio en polvo sabor piña colada con calcio y fibra.',
            imagen:'build/image/productos/mex/2125426.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/mex/2222200.png'
        },{
            nombre:'OMNILIFE FX SABOR MANZANA, 6 LATAS 355 ML C/U',
            descripcion:'Bebida carbonatada adicionada con vitaminas C y E sabor manzana.',
            imagen:'build/image/productos/mex/5310513.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, 6 LATAS 355 ML C/U',
            descripcion:'Bebida carbonatada adicionada con vitaminas C y E sabor naranja.',
            imagen:'build/image/productos/mex/5310501.png'
        },{
            nombre:'OMNILIFE NOVAKID CHOCOLATE, DOYPACK 560 GRS',
            descripcion:'Suplemento alimenticio para mujeres embarazadas a base de soya con vitaminas, minerales y DHA (omega 3).',
            imagen:'build/image/productos/mex/5426218.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES & CREAM DOYPACK',
            descripcion:'Suplemento alimenticio a base de proteína de soya con vitaminas y minerales.',
            imagen:'build/image/productos/mex/5426243.png'
        },{
            nombre:'OMNILIFE SHAKE SUPREME FRESA SILVESTRE',
            descripcion:'Polvo para preparar bebida con vitaminas y minerales.',
            imagen:'build/image/productos/mex/7170921.png'
        },{
            nombre:'OMNILIFE SHAKE SUPREME VAINILLA MAPLE',
            descripcion:'Polvo para preparar bebida con vitaminas y minerales.',
            imagen:'build/image/productos/mex/7170916.png'
        },{
            nombre:'OMNILIFE VKIDS DOYPACK 400G',
            descripcion:'Suplemento alimenticio en polvo sabor vainilla con vitaminas y DHA.',
            imagen:'build/image/productos/mex/5025516.png'
        },{
            nombre:'OMNIPLUS FRUTAS SUPREME, BOTE 600 ML',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2360430.png'
        },{
            nombre:'OMNIPLUS NARANJA SUPREME, BOTE 600 ML',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2366801.png'
        },{
            nombre:'OMNIPLUS NARANJA SUPREME, CAJA 30 SACHETS 600 ML',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2360401.png'
        },{
            nombre:'OMNIPLUS NARANJA, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2313801.png'
        },{
            nombre:'OMNIPLUS, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio micelizado concentrado nutritivo.',
            imagen:'build/image/productos/mex/2313800.png'
        },{
            nombre:'OMNIVIU MORAS SUPREME, BOTE 200 GRS',
            descripcion:'Suplemento alimenticio con luteina, zeaxantina, DHA (omega 3) y antioxidantes.',
            imagen:'build/image/productos/mex/5877615.png'
        },{
            nombre:'OMNIWOMAN40+ SUPREME, 30 SACHETS 195 GRS',
            descripcion:'Suplemento alimenticio con isoflavonas de soya, vitaminas, minerales y antioxidantes.',
            imagen:'build/image/productos/mex/6027408.png'
        },{
            nombre:'ONE PER MEAL MANGO, BOTE 540 GRS',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2421529.png'
        },{
            nombre:'ONE PER MEAL MANGO, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2422229.png'
        },{
            nombre:'OPTIMUS JAMAICA, 200 ML',
            descripcion:'Suplemento alimenticio sabor jamaica.',
            imagen:'build/image/productos/mex/2510614.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Suplemento alimenticio sabor a frutas.',
            imagen:'build/image/productos/mex/2521300.png'
        },{
            nombre:'OPTIMUS, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio sabor a frutas.',
            imagen:'build/image/productos/mex/2523600.png'
        },{
            nombre:'POWER MAKER SUPREME, BOTE 350 GRS',
            descripcion:'Suplemento alimenticio con aminoácidos, vitaminas y minerales.',
            imagen:'build/image/productos/mex/2676400.png'
        },{
            nombre:'POWER MAKER SUPREME, C/30 SACHETS 300 GRS',
            descripcion:'Suplemento alimenticio con aminoácidos, vitaminas y minerales.',
            imagen:'build/image/productos/mex/2675600.png'
        },{
            nombre:'POWER MAKER, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio sabor natural a frutas.',
            imagen:'build/image/productos/mex/2621200.png'
        },{
            nombre:'ROOT FOOD, 60 CAPSULAS',
            descripcion:'Suplemento alimenticio.',
            imagen:'build/image/productos/mex/2853000.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Suplemento alimenticio, sabor a frutas.',
            imagen:'build/image/productos/mex/3020700.png'
        },{
            nombre:'STARBIEN, CAJA 30 SOBRES',
            descripcion:'Suplemento alimenticio, sabor a frutas.',
            imagen:'build/image/productos/mex/3020730.png'
        },{
            nombre:'SUPER MIX CHOCOLATE, DOYPACK 600 GRS',
            descripcion:'Suplemento alimenticio sabor chocolate.',
            imagen:'build/image/productos/mex/3125318.png'
        },{
            nombre:'SUPER MIX FRESA, DOYPACK 600 GRS',
            descripcion:'Suplemento alimenticio sabor fresa.',
            imagen:'build/image/productos/mex/3125321.png'
        },{
            nombre:'SUPER MIX SUPREME CHOCOLATE, DOYPACK 510 GRS',
            descripcion:'Suplemento alimenticio sabor chocolate.',
            imagen:'build/image/productos/mex/3176318.png'
        },{
            nombre:'SUPER MIX SUPREME FRESA, DOYPACK 510 GRS',
            descripcion:'Suplemento alimenticio sabor fresa.',
            imagen:'build/image/productos/mex/3176321.png'
        },{
            nombre:'SUPER MIX SUPREME VAINILLA, DOYPACK 510 GRS',
            descripcion:'Suplemento alimenticio sabor vainilla.',
            imagen:'build/image/productos/mex/3176316.png'
        },{
            nombre:'TEQUILIFE TORONJA, 6 LATAS',
            descripcion:'Bebida carbonatada no alcohólica sabor toronja y agave.',
            imagen:'build/image/productos/mex/3210510.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES 561 GRS',
            descripcion:'Suplemento alimenticio con arginina y extracto en polvo de aceituna.',
            imagen:'build/image/productos/mex/3721200.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Suplemento alimenticio mezcla de fibras con salvado de arroz, sabor vainilla francesa.',
            imagen:'build/image/productos/mex/3875700.png'
        },{
            nombre:'CHIVA COLA 10 ZERO LATA 355 ml.',
            descripcion:'Bebida gasificada sabor cola.',
            imagen:'build/image/productos/mex/4310551.png'
        },{
            nombre:'MAGIC SILUET, PAQUETE CON 6 GALLETAS',
            descripcion:'Galleta cubierta de chocolate con fructosa con cereales y fibra.',
            imagen:'build/image/productos/mex/1940018.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES & CREAM CAJA 12 SOBRES',
            descripcion:'Suplemento alimenticio a base de proteína de soya con vitaminas y minerales.',
            imagen:'build/image/productos/mex/5479243.png'
        }
    ];

    // ***** PRODUCTOS NICARAGUAR *****//
    this.productosNicaragua = [
        {
            nombre:'DOLCE VITA SUPREME TORONJA, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/nic/4475910.png'
        },{
            nombre:'AGUA BLU SUPREME 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/nic/4160400.png'
        },{
            nombre:'ALOE BETA LIMON SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/nic/4260205.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/nic/4260204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/nic/4210604.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 960 ML',
            descripcion:'Contiene: Vitamina E y sábila.  Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/nic/4210204.png'
        },{
            nombre:'AQTUA MANDARINA SUPREME, CAJA 30 SACHETS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/nic/3924734.png'
        },{
            nombre:'CAFEZZINO SUPREME, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabor tradicional. Endulzado con estevia.',
            imagen:'build/image/productos/nic/5124732.png'
        },{
            nombre:'DOLCE VITA TORONJA, BOTE 550 GRS',
            descripcion:'Contiene: Gymnema sylvestre y Mezclas de fibra. Sabor toronja.',
            imagen:'build/image/productos/nic/4421410.png'
        },{
            nombre:'DUAL C-MIX SABOR CITRICOS, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/nic/4520900.png'
        },{
            nombre:'EGO 10 SABOR FRUTA DE LA PASION, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/nic/4610609.png'
        },{
            nombre:'EGO FRUTAS DEL BOSQUE, LATA 355 ML',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/nic/4812300.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/nic/1210600.png'
        },{
            nombre:'FEM FRESA, CAJA C/30 SOBRES 360 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/nic/1422221.png'
        },{
            nombre:'FIBER\'N PLUS SABOR DURAZNO, CAJA 50 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/nic/1521900.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/nic/1571908.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/nic/1810600.png'
        },{
            nombre:'OHLALA, CAJA C/30 SOBRES 360 GRS',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/nic/2222200.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, LATA 355 ML',
            descripcion:'Contiene: Refresco vitaminado. Vitaminas C y E. Sabor naranja. Endulzado con estevia/libre de calorías.',
            imagen:'build/image/productos/nic/5310501.png'
        },{
            nombre:'OMNILIFE MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/nic/2021000.png'
        },{
            nombre:'OMNILIFE MAGNUS, CAJA C/30 SOBRES 405 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/nic/2023500.png'
        },{
            nombre:'OMNILIFE MIMIS, CAJA 30 SOBRES 300 GRS',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/nic/4023213.png'
        },{
            nombre:'OMNILIFE UZO, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa.',
            imagen:'build/image/productos/nic/3822200.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK 400 GRS',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya , vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/nic/5025516.png'
        },{
            nombre:'OMNIPLUS FRUTAS SUPREME, 30 SACHETS 600 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/nic/2360400.png'
        },{
            nombre:'OMNIPLUS NARANJA, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/nic/2310301.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/nic/2310300.png'
        },{
            nombre:'ONE PER MEAL MANGO, CAJA C/30 SOBRES 360 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/nic/2422229.png'
        },{
            nombre:'OPTIMUS SABOR A FRUTAS NATURALES, BOTE',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/nic/2521300.png'
        },{
            nombre:'POWER MAKER SABOR NATURAL A FRUTAS, BOTE',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/nic/2621600.png'
        },{
            nombre:'STARBIEN SABOR NATURAL A FRUTAS, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/nic/3020700.png'
        },{
            nombre:'SUPER MIX SABOR VAINILLA S/LECHE, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen:'build/image/productos/nic/3125317.png'
        },{
            nombre:'THERMOGEN COFFEE, BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/nic/3322032.png'
        },{
            nombre:'THERMOGEN TEA LIMON, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/nic/3521505.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ, CAJA C/30 SOBRES',
            descripcion:'Contiene: L-Carnitina y L-Tirosina. Sabor maracuyá.',
            imagen:'build/image/productos/nic/3524009.png'
        },{
            nombre:'UNDU, CAJA C/30 SOBRES 561 GRS',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/nic/3721200.png'
        }
    ];

    // ***** PRODUCTOS PANAMA ***** //
    this.productosPanama = [
        {
            nombre:'OMNIPLUS FRUTAS SUPREME, 30 SACHETS 600 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/pan/2360400.png'
        },{
            nombre:'AGUA BLU SUPREME, 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/pan/4160400.png'
        },{
            nombre:'ALOE BETA PIÑA SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/pan/4260204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/pan/4210604.png'
        },{
            nombre:'AQTUA SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/pan/3924734.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabor tradicional. Endulzado con estevia.',
            imagen:'build/image/productos/pan/5124732.png'
        },{
            nombre:'DOLCE VITA SUPREME, CAJA 30 SACHET 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/pan/4475910.png'
        },{
            nombre:'DUAL C MIX, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/pan/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/pan/4610609.png'
        },{
            nombre:'EGO FRUTAS, 6 LATAS',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/pan/4812300.png'
        },{
            nombre:'EGO LIFE PIÑA, CAJA 30 SOBRES',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/pan/4923304.png'
        },{
            nombre:'EGO MINT, CAJA 30 SOBRES',
            descripcion:'Contiene: Extracto de Soya, Riboflavina, y extracto de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/pan/1122200.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/pan/1210600.png'
        },{
            nombre:'EGO THERMOGEN COLA, 6 LATAS',
            descripcion:'Contiene: Extracto de Tamarindo y cromo Sabor cola',
            imagen:'build/image/productos/pan/4710506.png'
        },{
            nombre:'FEM FRESA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/pan/1422221.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/pan/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya.  Fiber\'N Plus Supreme además contiene inulina de agave / estevia.  Sabor durazno.',
            imagen:'build/image/productos/pan/1521900.png'
        },{
            nombre:'HOMO MANZANA VERDE, CAJA 30 SOBRES',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/pan/1722228.png'
        },{
            nombre:'KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/pan/1810600.png'
        },{
            nombre:'MAGNUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/pan/2023500.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES',
            descripcion:'Contiene: L-teanina, L-Triptofano y ácido gamma amino butírico. Sabor manzana y canela.',
            imagen:'build/image/productos/pan/4023213.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E.  Sabor vainilla francesa.',
            imagen:'build/image/productos/pan/2222200.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, 6 LATAS 355 ML C/U',
            descripcion:'Contiene: Refresco vitaminado.  Vitaminas C y E. Sabor naranja. Endulzado con estevia/libre de calorías.',
            imagen:'build/image/productos/pan/5310501.png'
        },{
            nombre:'OMNILIFE SUPER MIX VAINILLA S/L, DOYPACK',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen:'build/image/productos/pan/3125317.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK 400 GRS',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya , vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/pan/5025516.png'
        },{
            nombre:'OMNIPLUS FRUTAS, 30 SOBRES 900 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/pan/2313800.png'
        },{
            nombre:'OMNIPLUS NARANJA, 30 SOBRES 900 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/pan/2313801.png'
        },{
            nombre:'ONE PER MEAL, CAJA 30 SOBRES',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/pan/2422229.png'
        },{
            nombre:'OPTIMUS, 30 SOBRES 438 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/pan/2523600.png'
        },{
            nombre:'POWER MAKER SUPREME, CAJA C/30',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja. Power maker supreme /estevia.',
            imagen:'build/image/productos/pan/2675600.png'
        },{
            nombre:'STARBIEN, 30 SOBRES 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/pan/3020730.png'
        },{
            nombre:'THERMOGEN COFFEE, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/pan/3322232.png'
        },{
            nombre:'THERMOGEN TEA LIMON, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/pan/3522205.png'
        },{
            nombre:'THERMOGEN TEA MARACUYÁ SUPREME, CAJA C/30 SACHETS 225 GRS',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Endulzado con estevia.',
            imagen:'build/image/productos/pan/3575609.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES 561 GRS',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/pan/3721200.png'
        },{
            nombre:'UZO, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa.',
            imagen:'build/image/productos/pan/3822200.png'
        }
    ];

    // ***** PRODUCTOS PARAGUAY *****//
    this.productosParaguay = [
        {
            nombre:'Agua Blu Supreme, 600 ml.',
            descripcion:'Agua de mesa.',
            imagen:'build/image/productos/par/4160400.png'
        },{
            nombre:'Aloe Beta Limón, Bote 960 ml.',
            descripcion:'Contiene: Vitamina E y sábila. Sabor limón.',
            imagen:'build/image/productos/par/4210205.png'
        },{
            nombre:'Biocros, Bote 567 grs.',
            descripcion:'Contiene: Vitaminas del complejo B, glicina, taurina y cafeína.  Sabor frutas.',
            imagen:'build/image/productos/par/2021000.png'
        },{
            nombre:'Cafetino, Bote 420 grs.',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/par/3322032.png'
        },{
            nombre:'Cafezzino Supreme, Caja C/30 Sachets 150 grs.',
            descripcion:'Contiene: Mezclas de café, café verde e Inulina. Sabor tradicional. Contiene estevia.',
            imagen:'build/image/productos/par/5124732.png'
        },{
            nombre:'Dual C Mix, Bote 600 grs.',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/par/4520900.png'
        },{
            nombre:'Ego Life Piña, Bote 517 grs.',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas B2 y B5 Sabor piña.',
            imagen:'build/image/productos/par/4921704.png'
        },{
            nombre:'Ego Plant, Botella 200 ml.',
            descripcion:'Contiene: Vitamina B12, Vitaminas E y D. Sabor herbal.',
            imagen:'build/image/productos/par/1210600.png'
        },{
            nombre:'FiberN Plus Supreme, Doypack 450 grs.',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/par/1571908.png'
        },{
            nombre:'Omniplus Tradicional, Botella 940 ml.',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B6, B12, C, D, E, niacina y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Manganeso, Selenio) y Concentrados Herbales (Chorella, Manzanilla, Gotu Cola, Schizandra). Vitaminas, Minerales y Concentrados Herbales. Sabor Frutas.',
            imagen:'build/image/productos/par/2310300.png'
        },{
            nombre:'One Per Meal Mango, Bote 540 grs.',
            descripcion:'Contiene: Glutatión, vitaminas y minerales. Sabor mango.',
            imagen:'build/image/productos/par/2421529.png'
        },{
            nombre:'Optimus, Bote 555 grs.',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/par/2521300.png'
        },{
            nombre:'Power Maker, Bote 524 grs.',
            descripcion:'Contiene: Arginina, Glicina y Taurina. Vitaminas y minerales.  Sabor naranja.',
            imagen:'build/image/productos/par/2621600.png'
        },{
            nombre:'Starbien, Bote 615 grs.',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/par/3020700.png'
        },{
            nombre:'Super Mix Vainilla S/Leche, Lata 600 grs.',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos.  Sabor vainilla.',
            imagen:'build/image/productos/par/3120917.png'
        },{
            nombre:'Sweet Success Supreme, Caja C/30 Sachets',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Contiene estevia.',
            imagen:'build/image/productos/par/4475910.png'
        },{
            nombre:'Teatino Limón, Bote 540 grs.',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/par/3521505.png'
        },{
            nombre:'Teatino Maracuyá Supreme, Caja C/30 Sachets 225 grs.',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Contiene estevia.',
            imagen:'build/image/productos/par/3575609.png'
        },{
            nombre:'Uzo, Caja C/30 Sobres 360 grs.',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa.',
            imagen:'build/image/productos/par/3822200.png'
        }
    ];

    // ***** PRODUCTOS PERU *****//
    this.productosPeru = [
        {
            nombre:'OMNIFIT CHOCOLATE DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/per/3125318.png'
        },{
            nombre:'TEATINO MARACUYÁ SUPREME, 30 SACHETS 225 GRS',
            descripcion:'Contiene: Café verde, L-Carnitina y L-Tirosina. Sabor maracuyá. Endulzado con estevia.',
            imagen:'build/image/productos/per/3575609.png'
        },{
            nombre:'AGUA BLU SUPREME, 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/per/4160400.png'
        },{
            nombre:'AGUA BLU SUPREME, DE 1.5 LTS',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/per/4160100.png'
        },{
            nombre:'ALOE BETA LIMON SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4260205.png'
        },{
            nombre:'ALOE BETA LIMON, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4210205.png'
        },{
            nombre:'ALOE BETA PINA SUPREME, 200 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4260604.png'
        },{
            nombre:'ALOE BETA PINA SUPREME, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4260204.png'
        },{
            nombre:'ALOE BETA PINA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4210204.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabores piña y limón. Aloe beta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen:'build/image/productos/per/4210604.png'
        },{
            nombre:'AQTUA MANDARINA SUPREME, CAJA 30 SACHETS',
            descripcion:'Contiene: Coenzima QH, magnesio y L-Carnitina. Sabor mandarina. Endulzado con estevia.',
            imagen:'build/image/productos/per/3924734.png'
        },{
            nombre:'BOTELLA CHIVA COLA, 600 ML',
            descripcion:'Bebida sabor cola endulzado con fructosa.',
            imagen:'build/image/productos/per/4310406.png'
        },{
            nombre:'CAFECINO 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/per/3322232.png'
        },{
            nombre:'CAFECINO DE OLLA, 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/per/2923227.png'
        },{
            nombre:'CAFECINO DE OLLA, BOTE 400 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/per/2922127.png'
        },{
            nombre:'CAFECINO, BOTE 420 GRS',
            descripcion:'Contiene: Mezclas de café y cromo Sabores tradicional y de olla.',
            imagen:'build/image/productos/per/3322032.png'
        },{
            nombre:'CAFEZZINO DE OLLA SUPREME, CAJA 30 SOBRES 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/per/5174727.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabores tradicional y de olla. Endulzado con estevia.',
            imagen:'build/image/productos/per/5124732.png'
        },{
            nombre:'CHIVA COLA, 6 LATAS 355 ML',
            descripcion:'Bebida sabor cola endulzado con fructosa.',
            imagen:'build/image/productos/per/4310506.png'
        },{
            nombre:'DOLCE VITA SUPREME TORONJA, C/30 SACHETS 150 GRS',
            descripcion:'Contiene: Café verde y Mezclas de Fibras (fibra de arroz, fibra de manzana y salvado de avena). Sabor toronja. Endulzado con estevia.',
            imagen:'build/image/productos/per/4475910.png'
        },{
            nombre:'DUAL C-MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/per/4520900.png'
        },{
            nombre:'DUAL C-MIX, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/per/4522200.png'
        },{
            nombre:'EGO 10, BOTELLA 200 ML',
            descripcion:'Contiene: Taurina, ribosa y vitaminas del complejo B. Sabor fruta de la pasión.',
            imagen:'build/image/productos/per/4610609.png'
        },{
            nombre:'EGO FRUTAS BOSQUE, 6 LATAS 355 ML',
            descripcion:'Contiene: Concentrado de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/per/4812300.png'
        },{
            nombre:'EGO LIFE PIÑA, 30 SOBRES 621 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/per/4923304.png'
        },{
            nombre:'EGO LIFE PIÑA, BOTELLA 600 ML',
            descripcion:'',
            imagen:'build/image/productos/per/4910404.png'
        },{
            nombre:'EGO LIFE, BOTE 517 GRS',
            descripcion:'Contiene: Electrolitos (potasio, sodio) carbohidratos y vitaminas del complejo B. Sabor piña.',
            imagen:'build/image/productos/per/4921704.png'
        },{
            nombre:'EGO MANDARIN, BOTELLA 200 ML',
            descripcion:'Contiene: Guaraná, Cromo. Sabor mandarina.',
            imagen:'build/image/productos/per/1010634.png'
        },{
            nombre:'EGO MINT, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Concentrado de Soya, Riboflavina, y polvo de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/per/1122200.png'
        },{
            nombre:'EGO MINT, BOTE 480 GRS',
            descripcion:'Contiene: Concentrado de Soya, Riboflavina, y polvo de semilla de uva. Sabor menta.',
            imagen:'build/image/productos/per/1121800.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/per/1210600.png'
        },{
            nombre:'EGO THERMOGEN COLA, 6 LATAS 355 ML',
            descripcion:'Contiene: Tamarindo y cromo Sabor cola',
            imagen:'build/image/productos/per/4710506.png'
        },{
            nombre:'ESTOP, CAJA 20 SOBRES 400 GRS',
            descripcion:'Contiene: Inulina y almendra en polvo (fitoesteroles). Sabor almendra.',
            imagen:'build/image/productos/per/1320900.png'
        },{
            nombre:'FIBER\'N PLUS SUPREME, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/per/1571908.png'
        },{
            nombre:'FIBER\'N PLUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Fiber\'N Plus Supreme además contiene inulina de agave / estevia. Sabor durazno.',
            imagen:'build/image/productos/per/1521900.png'
        },{
            nombre:'MAGIC SILUET, PAQ 24 PIEZAS',
            descripcion:'Contiene: Galleta con cereal y fibra, cubierta de chocolate. Adicionada con vitaminas.',
            imagen:'build/image/productos/per/1942418.png'
        },{
            nombre:'MAGNUS MANZANA, BOTELLA 200 ML',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/per/2010613.png'
        },{
            nombre:'MAGNUS, BOTE 567 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/per/2021000.png'
        },{
            nombre:'MAGNUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas o manzana.',
            imagen:'build/image/productos/per/2023500.png'
        },{
            nombre:'MIMIS, CAJA 30 SOBRES 300 GRS',
            descripcion:'Contiene: L-teanina, L-Triptofano. Sabor manzana y canela.',
            imagen:'build/image/productos/per/4023213.png'
        },{
            nombre:'NEWGHURT DURAZNO, DOYPACK 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabores durazno y piña colada.',
            imagen:'build/image/productos/per/2125408.png'
        },{
            nombre:'NEWGHURT PINA C. SOYA, DOYPACK 450 GRS',
            descripcion:'Contiene: Calcio y Vitamina D. Sabores durazno y piña colada.',
            imagen:'build/image/productos/per/2125426.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES',
            descripcion:'Contiene: Concentrado de cera de caña con policosanoles, vitamina E.  Sabor vainilla francesa.',
            imagen:'build/image/productos/per/2222200.png'
        },{
            nombre:'OMNIFIT FRESA, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/per/3125321.png'
        },{
            nombre:'OMNIFIT VAINILLA DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/per/3125316.png'
        },{
            nombre:'OMNIFIT VAINILLA S/L DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabores chocolate, vainilla y fresa.',
            imagen:'build/image/productos/per/3125317.png'
        },{
            nombre:'OMNILIFE FEM FRESA, BOTE 540 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/per/1421521.png'
        },{
            nombre:'OMNILIFE FEM, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Vitaminas C y E, cromo y niacina. Sabor fresa.',
            imagen:'build/image/productos/per/1422221.png'
        },{
            nombre:'OMNILIFE FX SABOR MANZANA, 6 LATAS 355 ML C/U',
            descripcion:'Contiene: Bebida vitaminada. Vitaminas C y E. Sabores manzana y naranja. Endulzado con estevia/libre de calorías.',
            imagen:'build/image/productos/per/5310513.png'
        },{
            nombre:'OMNILIFE FX SABOR NARANJA, 6 LATAS 355 ML C/U',
            descripcion:'Contiene: Bebida vitaminada. Vitaminas C y E. Sabores manzana y naranja. Endulzado con estevia/libre de calorías.',
            imagen:'build/image/productos/per/5310501.png'
        },{
            nombre:'OMNILIFE HOMO MANZANA VERDE, BOTE',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/per/1721528.png'
        },{
            nombre:'OMNILIFE HOMO, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Boro y vitaminas C y E. Sabor manzana verde.',
            imagen:'build/image/productos/per/1722228.png'
        },{
            nombre:'OMNILIFE KOLINA, BOTELLA 200 ML',
            descripcion:'Contiene: Concentrado de piña y coco. Sabor toronja.',
            imagen:'build/image/productos/per/1810600.png'
        },{
            nombre:'OMNILIFE NOVAKID CHOCOLATE, 560 GRS DOYPACK',
            descripcion:'Contiene: Alto contenido de ácido fólico, hierro, calcio. DHA (Omega-3). Vitaminas y minerales. Alto aporte de proteínas y fibra. Bajo en grasa. Sabor Chocolate.',
            imagen:'build/image/productos/per/5426218.png'
        },{
            nombre:'OMNILIFE PUMP SUPREME COOKIES&CREAM, DOYPACK',
            descripcion:'Contiene: Alto contenido de proteínas (20 grs). Alto contenido de Hierro, con calcio. Vitaminas y minerales. Alto contenido de fibra. Sin grasa. Sabor Cookies & Cream.',
            imagen:'build/image/productos/per/5426243.png'
        },{
            nombre:'OMNILIFE SHAKE SUPREME COOKIES & CREAM',
            descripcion:'Contiene: Proteínas de soya (14 grs). Inulina (fibra dietética). Vitaminas y Minerales. Sabor Cookies & Cream.',
            imagen:'build/image/productos/per/7170943.png'
        },{
            nombre:'OMNILIFE VKIDS, DOYPACK 400 GRS',
            descripcion:'Contiene: Betaglucanos, DHA (omega 3), proteínas de soya , vitaminas y minerales. Sabor vainilla.',
            imagen:'build/image/productos/per/5025516.png'
        },{
            nombre:'OMNIPLUS FRUTAS SUPREME, 30 SACHETS 600 ML',
            descripcion:'Contiene: Vitaminas (A, B, C, D y E), Minerales (Calcio, Magnesio, Zinc, entre otros) e ingredientes herbales Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/per/2360400.png'
        },{
            nombre:'OMNIPLUS SABOR NARANJA, BOTE 940 ML',
            descripcion:'Contiene: Vitaminas (A, B, C, D y E), Minerales (Calcio, Magnesio, Zinc, entre otros) e ingredientes herbales Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/per/2310301.png'
        },{
            nombre:'OMNIPLUS SABOR NARANJA, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B, C, D y E), Minerales (Calcio, Magnesio, Zinc, entre otros) e ingredientes herbales Omniplus Supreme está endulzado con estevia/ libre de calorías. Sabores Frutas y Naranja.',
            imagen:'build/image/productos/per/2313801.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B, C, D y E), Minerales (Calcio, Magnesio, Zinc, entre otros) e ingredientes herbales  Omniplus Supreme está endulzado con estevia/ libre de calorías.  Sabores Frutas y Naranja.',
            imagen:'build/image/productos/per/2310300.png'
        },{
            nombre:'OMNIPLUS, CAJA 30 SOBRES',
            descripcion:'Contiene: Vitaminas (A, B, C, D y E), Minerales (Calcio, Magnesio, Zinc, entre otros) e ingredientes herbales  Omniplus Supreme está endulzado con estevia/ libre de calorías.  Sabores Frutas y Naranja.',
            imagen:'build/image/productos/per/2313800.png'
        },{
            nombre:'ONE PER MEAL MANGO, 30 SOBRES 360 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/per/2422229.png'
        },{
            nombre:'ONE PER MEAL MANGO, BOTE 540 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/per/2421529.png'
        },{
            nombre:'OPTIMUS, BOTE 555 GRS',
            descripcion:'Contiene:  Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/per/2521300.png'
        },{
            nombre:'OPTIMUS, CAJA 30 SOBRES',
            descripcion:'Contiene:  Colina, glicina, vitaminas del complejo B.  Sabor frutas.',
            imagen:'build/image/productos/per/2523600.png'
        },{
            nombre:'POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina.  Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/per/2621600.png'
        },{
            nombre:'POWER MAKER, CAJA 30 SOBRES',
            descripcion:'Contiene: Arginina.  Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/per/2621200.png'
        },{
            nombre:'STARBIEN CAJA C/30 SOBRES',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/per/3020730.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/per/3020700.png'
        },{
            nombre:'TEATINO DURAZNO, 30 SOBRES',
            descripcion:'Contiene: Te negro y Cromo. Sabor durazno',
            imagen:'build/image/productos/per/3522208.png'
        },{
            nombre:'TEATINO DURAZNO, BOTE 540 GRS',
            descripcion:'Contiene: Te negro y Cromo. Sabor durazno',
            imagen:'build/image/productos/per/3521508.png'
        },{
            nombre:'TEATINO LIMON, 30 SOBRES, 360 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/per/3522205.png'
        },{
            nombre:'TEATINO LIMON, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/per/3521505.png'
        },{
            nombre:'TEATINO NARANJA LIMON, BOTE 555 GRS',
            descripcion:'Contiene: Cromo , vitamina C y E y extracto de cocolmeca. Sabor naranja - limón.',
            imagen:'build/image/productos/per/3521907.png'
        },{
            nombre:'TEQUILIFE TORONJA, 6 LATAS 355 ML',
            descripcion:'Bebida sabor toronja y agave.',
            imagen:'build/image/productos/per/3210510.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/per/3721200.png'
        },{
            nombre:'UZO SUPREME, CAJA 30 SACHETS 240 GRS',
            descripcion:'Contiene: Salvado de arroz modificado y selenio. Sabor vainilla francesa. Uzo supreme /endulzado con estevia.',
            imagen:'build/image/productos/per/3875700.png'
        },{
            nombre:'OMNILIFE SHAKE FRESA',
            descripcion:'Contiene: Proteínas de soya (14 grs). Inulina (fibra dietética). Vitaminas y Minerales. Sabor Fresa.',
            imagen:'build/image/productos/per/7170921.png'
        }
    ];

    // ***** PRODUCTOS REPUBLICA DOMINICANA *****//
    this.productosRepublicaDominicana = [
        {
            nombre:'AGUA BLU SUPREME, 600 ML',
            descripcion:'Agua baja en sales.',
            imagen:'build/image/productos/rep/4160400.png'
        },{
            nombre:'ALOE BETA PIÑA, BOTE 960 ML',
            descripcion:'Contiene: Vitamina E y sábila. Sabor piña.',
            imagen:'build/image/productos/rep/4210204.png'
        },{
            nombre:'CAFEZZINO SUPREME, CAJA 30 SACHETS 150 GRS',
            descripcion:'Contiene: Mezclas de café y café verde. Sabor tradicional. Endulzado con estevia.',
            imagen:'build/image/productos/rep/5124732.png'
        },{
            nombre:'EGO FRUTAS, 6 LATAS 355 ML C/U',
            descripcion:'Contiene: Extracto de regaliz Vitaminas del complejo B y C. Sabor frutas del bosque.',
            imagen:'build/image/productos/rep/4812300.png'
        },{
            nombre:'EGO PLANT, BOTELLA 200 ML',
            descripcion:'Contiene: Extractos vegetales, vitamina B12. Sabor herbal.',
            imagen:'build/image/productos/rep/1210600.png'
        },{
            nombre:'FIBER N PLUS, DOYPACK 450 GRS',
            descripcion:'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Sabor durazno.',
            imagen:'build/image/productos/rep/1525408.png'
        },{
            nombre:'KENYAN, BOTE 555 GRS',
            descripcion:'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen:'build/image/productos/rep/2521300.png'
        },{
            nombre:'MAGNUS CAJA C/30 SOBRES 405 GRS',
            descripcion:'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen:'build/image/productos/rep/2023500.png'
        },{
            nombre:'OHLALA, CAJA 30 SOBRES 360 GRS',
            descripcion:'Contiene: Extracto de cera de caña con policosanoles, vitamina E. Sabor vainilla francesa.',
            imagen:'build/image/productos/rep/2222200.png'
        },{
            nombre:'OMNIFIT VAINILLA S/L, DOYPACK 600 GRS',
            descripcion:'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen:'build/image/productos/rep/3125317.png'
        },{
            nombre:'OMNILIFE DUAL C-MIX, BOTE 600 GRS',
            descripcion:'Contiene: Vitamina C. Sabor cítrico.',
            imagen:'build/image/productos/rep/4520900.png'
        },{
            nombre:'OMNILIFE POWER MAKER, BOTE 524 GRS',
            descripcion:'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen:'build/image/productos/rep/2621600.png'
        },{
            nombre:'OMNIPLUS, BOTELLA 940 ML',
            descripcion:'Contiene: Vitaminas (A, B1, B2,B3, B5, B6, B12, C, D, E, y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Extractos Herbales (Espirulina, Chorella, Manzanilla, Gotu Cola, Echinacea, Schizandra). Vitaminas, Minerales y Extractos Herbales. Sabor Frutas.',
            imagen:'build/image/productos/rep/2310300.png'
        },{
            nombre:'ONE PER MEAL MANGO, BOTE 540 GRS',
            descripcion:'Contiene: Glutatión y vitaminas A, C y E. Sabor mango.',
            imagen:'build/image/productos/rep/2421529.png'
        },{
            nombre:'STARBIEN, BOTE 615 GRS',
            descripcion:'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen:'build/image/productos/rep/3020700.png'
        },{
            nombre:'SWEET SUCCESS, BOTE 550 GRS',
            descripcion:'Contiene: Gymnema sylvestre y Mezclas de fibra. Sabor toronja.',
            imagen:'build/image/productos/rep/4421410.png'
        },{
            nombre:'THERMOGEN COFFEE, CAJA 30 SOBRES',
            descripcion:'Contiene: Mezclas de café y cromo Sabor tradicional.',
            imagen:'build/image/productos/rep/3322232.png'
        },{
            nombre:'THERMOGEN TEA LIMON, BOTE 540 GRS',
            descripcion:'Contiene: Té negro y Cromo. Sabor limón.',
            imagen:'build/image/productos/rep/3521505.png'
        },{
            nombre:'UNDU, CAJA 30 SOBRES 561 GRS',
            descripcion:'Contiene: Glucosamina, condroitina, arginina y polvo de aceituna. Sabor cítrico.',
            imagen:'build/image/productos/rep/3721200.png'
        }
    ];

    // ***** PRODUCTOS ESTADOSUNIDOS *****//
    this.productosEstadosUnidos = [
        {
            nombre:'B.L.U. Life Supreme, Bottle 600 ml.',
            descripcion:'Low-salt water.',
            imagen:'build/image/productos/eua/4160400.png'
        },{
            nombre:'Ego Life Piña, box with 26 packs 650 g.',
            descripcion:'Contains: Electrolytes (Potassium and Sodium), Carbohydrates, and B-complex vitamins. Flavor: Pineapple.',
            imagen:'build/image/productos/eua/4923304.png'
        },{
            nombre:'Ego Life Piña, Container 517 g.',
            descripcion:'Contains: Electrolytes (Potassium and Sodium), Carbohydrates, and B-complex vitamins. Flavor: Pineapple.',
            imagen:'build/image/productos/eua/4921704.png'
        },{
            nombre:'Ego Life Piña, Bottle 600 ml.',
            descripcion:'Contains: Electrolytes (Potassium and Sodium), Carbohydrates, and B-complex vitamins. Flavor: Pineapple.',
            imagen:'build/image/productos/eua/4910404.png'
        },{
            nombre:'Soft Drink Cola, Bottle 600 ml.',
            descripcion:'Soft Drink. Flavor: Cola sweetened with fructose.',
            imagen:'build/image/productos/eua/4310406.png'
        },{
            nombre:'A-OXI Mango, Container 540 g.',
            descripcion:'Contains: Glutathione and Vitamins A, C, and E. Flavor: Mango.',
            imagen:'build/image/productos/eua/2421529.png'
        },{
            nombre: 'C-MAS Mix Citrus Fruit, Container 600 g.',
            descripcion: 'Contains: Vitamin C. Flavor: Citrus.',
            imagen: 'build/image/productos/eua/4520900.png'
        },{
            nombre: 'Ego Mint, Container 480 g.',
            descripcion: 'Contains: Soy extract, Riboflavin, and grape seed extract. Flavor: Mint.',
            imagen: 'build/image/productos/eua/1121800.png'
        },{
            nombre: 'Ego plant, Bottle 200 ml.',
            descripcion: 'Contains: Vegetable extracts and Vitamin B12. Flavor: Herbal.',
            imagen: 'build/image/productos/eua/1210600.png'
        },{
            nombre: 'Estop, Box with 20 Packs 400 g.',
            descripcion: 'Contains: Inulin and almond powder (phytosterols). Flavor: Almond.',
            imagen: 'build/image/productos/eua/1320900.png'
        },{
            nombre: 'FEM Strawberry, Box with 30 Packs 360 g.',
            descripcion: 'Contains: Vitamins C and E, Chromium, and Niacin. Flavor: Strawberry.',
            imagen: 'build/image/productos/eua/1422221.png'
        },{
            nombre: 'FEM-OML Strawberry, Container 540 g.',
            descripcion: 'Contains: Vitamins C and E, Chromium, and Niacin. Flavor: Strawberry.',
            imagen: 'build/image/productos/eua/1421521.png'
        },{
            nombre: 'HOM-OML Green Apple, Container 540 g.',
            descripcion: 'Contains: Boron and Vitamins C and E. Flavor: Green apple.',
            imagen: 'build/image/productos/eua/1721528.png'
        },{
            nombre: 'Kenyan Jamaica, Bottle 200 ml.',
            descripcion: 'Contains: Choline, Glycine, and B-complex vitamins. Flavors: Fruit and Jamaica.',
            imagen: 'build/image/productos/eua/2510614.png'
        },{
            nombre: 'Kenyan, Container 555 g.',
            descripcion: 'Contains: Choline, Glycine, and B-complex vitamins. Flavors: Fruit and Jamaica.',
            imagen: 'build/image/productos/eua/2521300.png'
        },{
            nombre: 'Kenyan, Box with 30 packs 438 g.',
            descripcion: 'Contains: Choline, Glycine, and B-complex vitamins. Flavors: Fruit and Jamaica.',
            imagen: 'build/image/productos/eua/2523600.png'
        },{
            nombre: 'Kolina, Bottle 200 ml.',
            descripcion: 'Contains: Pineapple and coconut extracts. Flavor: Grapefruit.',
            imagen: 'build/image/productos/eua/1810600.png'
        },{
            nombre: 'Malteada OML Chocolate, Doypack 600 g.',
            descripcion: 'Contains: Protein, Vitamins, Minerals, and carbohydrates. Flavors: Chocolate, vanilla, and strawberry.',
            imagen: 'build/image/productos/eua/3125318.png'
        },{
            nombre: 'Malteada OML Strawberry, Doypack 600 g.',
            descripcion: 'Contains: Protein, Vitamins, Minerals, and carbohydrates. Flavors: Chocolate, vanilla, and strawberry.',
            imagen: 'build/image/productos/eua/3125321.png'
        },{
            nombre: 'Malteada OML Vanilla, Doypack 600 g.',
            descripcion: 'Contains: Protein, Vitamins, Minerals, and carbohydrates. Flavors: Chocolate, vanilla, and strawberry.',
            imagen: 'build/image/productos/eua/3125316.png'
        },{
            nombre: 'Mimis, Box with 30 Packs 300 g.',
            descripcion: 'Contains: L-Theanine, L-Tryptophan, and y gamma-aminobutyric acid. Flavor: Apple cinnamon.',
            imagen: 'build/image/productos/eua/4023213.png'
        },{
            nombre: 'OML Novakid Chocolate, Doypack 560 g.',
            descripcion: 'Contains: High content of Folic acid, Iron, and Calcium. DHA (Omega-3). Vitamins and Minerals. High dose of Protein and Fiber. Low in fat. Flavor: Chocolate.',
            imagen: 'build/image/productos/eua/5426218.png'
        },{
            nombre:'OML Plus Orange Supreme, Bottle 600 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2366801.png'
        },{
            nombre:'OML Plus Orange Flavor, Bottle 940 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2310301.png'
        },{
            nombre:'OML Plus, Bottle 940 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2310300.png'
        },{
            nombre:'OML Plus, Box with 30 Packs 900 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2313800.png'
        },{
            nombre:'OML Viu Supreme, Container 200 g.',
            descripcion:'Contains: Vitamin A, Lutein, Zeaxanthin, Vitamin C, redcurrant, blueberry, Jamaica, and grape. Favor: Blackberry Sweetened with stevia.',
            imagen:'build/image/productos/eua/5877615.png'
        },{
            nombre:'Omnilife VKids, Doypack 400 g.',
            descripcion:'Contains: Beta glucans, DHA (omega 3), Soy Protein, Vitamins, and Minerals. Flavor: Vanilla.',
            imagen:'build/image/productos/eua/5025516.png'
        },{
            nombre:'Starbien, Container 615 g.',
            descripcion:'Contains: B-complex vitamins and Folic acid. Flavor: Fruit.',
            imagen:'build/image/productos/eua/3020700.png'
        },{
            nombre:'Starbien, Box with 30 Packs 615 g.',
            descripcion:'Contains: B-complex vitamins and Folic acid. Flavor: Fruit.',
            imagen:'build/image/productos/eua/3020730.png'
        },{
            nombre:'Uzo Supreme, Box with 30 packs 240 g.',
            descripcion:'Contains: Modified rice bran and Selenium. Flavor: French Vanilla. Uzo Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/3875700.png'
        },{
            nombre:'A-OXI Mango, Box with 30 Packs 360 g.',
            descripcion:'Contains: Glutathione and Vitamins A, C, and E. Flavor: Mango.',
            imagen:'build/image/productos/eua/2422229.png'
        },{
            nombre:'Aloe, Bottle 200 ml.',
            descripcion:'Contains: Vitamin E and Aloe Vera. Flavors: Pineapple and Lemon.',
            imagen:'build/image/productos/eua/4210604.png'
        },{
            nombre:'Aloe, Bottle 960 ml.',
            descripcion:'Contains: Vitamin E and Aloe Vera. Flavors: Pineapple and Lemon.',
            imagen:'build/image/productos/eua/4210205.png'
        },{
            nombre:'Aloe, Bottle 960 ml.',
            descripcion:'Contains: Vitamin E and Aloe Vera. Flavors: Pineapple and Lemon.',
            imagen:'build/image/productos/eua/4210204.png'
        },{
            nombre:'Aqtua Mandarin Supreme, Box with 30 Packs 150 g.',
            descripcion:'Contains: Coenzyme QH, Magnesium, and L-Carnitine. Flavor: Mandarin. Sweetened with stevia.',
            imagen:'build/image/productos/eua/3924734.png'
        },{
            nombre:'C-MAS Mix Citrus Fruit, Box with 30 Packs 360 g.',
            descripcion:'Contains: Vitamin C. Flavor: Citrus.',
            imagen:'build/image/productos/eua/4522200.png'
        },{
            nombre:'Ego Mint, Box with 30 Packs 360 g.',
            descripcion:'Contains: Soy extract, Riboflavin, and grape seed extract. Flavor: Mint.',
            imagen:'build/image/productos/eua/1122200.png'
        },{
            nombre:'Ego, 6 Aluminum Cans 2130 ml.',
            descripcion:'Contains: Licorice extract. B-complex vitamins and Vitamin C. Flavor: Wild berries.',
            imagen:'build/image/productos/eua/4812300.png'
        },{
            nombre:'Malteada OML Vanilla (no dairy), Doypack 600 g.',
            descripcion:'Contains: Protein, Vitamins, Minerals, and carbohydrates. Flavors: Chocolate, vanilla, and strawberry.',
            imagen:'build/image/productos/eua/3125317.png'
        },{
            nombre:'Newghurt Peach, Doypack 450 g.',
            descripcion:'Contains: Calcium and Vitamin D. Flavors: Peach and Piña Colada.',
            imagen:'build/image/productos/eua/2125408.png'
        },{
            nombre:'Newghurt Piña Colada, Doypack 450 g.',
            descripcion:'Contains: Calcium and Vitamin D. Flavors: Peach and Piña Colada.',
            imagen:'build/image/productos/eua/2125426.png'
        },{
            nombre:'Ohlala, Box with 30 Packs 360 g.',
            descripcion:'Contains: Sugar cane wax extract with policosanols and Vitamin E. Flavor: French Vanilla.',
            imagen:'build/image/productos/eua/2222200.png'
        },{
            nombre:'OML Plus Fruit Supreme, Bottle 600 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2360430.png'
        },{
            nombre:'OML Plus Fruit Supreme, Box with 30 Packs 600 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2360400.png'
        },{
            nombre:'OML Plus Orange Supreme, Box with 30 Packs 600 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2360401.png'
        },{
            nombre:'OML Plus Orange, Box with 30 packs 600 ml.',
            descripcion:'Contains: Vitamins (A, B1, B2, B3, B5, B6, B12, C, D, E, and Biotin), Minerals (Calcium, Magnesium, Zinc, Copper, Chromium, Manganese, Selenium), and herbal extracts (Spirulina, Chlorella, Chamomile, Gotu Kola, Echinacea, Schizandra). Vitamins, Minerals, and herbal extracts. OML Plus Supreme is sweetened with stevia/ zero-calories. Flavors: Fruit and Orange.',
            imagen:'build/image/productos/eua/2313801.png'
        },{
            nombre:'Cafetino de Olla, Container 400 g.',
            descripcion:'Contains: Blend of coffee and Chromium Flavors: Regular and de olla.',
            imagen:'build/image/productos/eua/2922127.png'
        },{
            nombre:'Cafetino de Olla, Box with 30 packs',
            descripcion:'Contains: Blend of coffee and Chromium Flavors: Regular and de olla.',
            imagen:'build/image/productos/eua/2923227.png'
        },{
            nombre:'Cafetino, Container 420 g.',
            descripcion:'Contains: Blend of coffee and Chromium Flavors: Regular and de olla.',
            imagen:'build/image/productos/eua/3322032.png'
        },{
            nombre:'Cafetino, Box with 30 packs 360 g.',
            descripcion:'Contains: Blend of coffee and Chromium Flavors: Regular and de olla.',
            imagen:'build/image/productos/eua/3322232.png'
        },{
            nombre:'Cafezzino de Olla Supreme, Box with 30 packs',
            descripcion:'Contains: Blend of coffee and green coffee. Flavors: Regular and de olla. Sweetened with stevia.',
            imagen:'build/image/productos/eua/5174727.png'
        },{
            nombre:'Cafezzino Supreme, Box with 30 packs 150 g.',
            descripcion:'Contains: Blend of coffee and green coffee. Flavors: Regular and de olla. Sweetened with stevia.',
            imagen:'build/image/productos/eua/5124732.png'
        },{
            nombre:'Ego Cola, 6 Aluminum Cans',
            descripcion:'Contains: Tamarind extract and Chromium. Flavor: Cola.',
            imagen:'build/image/productos/eua/4710506.png'
        },{
            nombre:'Ego Mandarin, Bottle 200 ml.',
            descripcion:'Contains: Guarana and Chromium. Flavor: Mandarin.',
            imagen:'build/image/productos/eua/1010634.png'
        },{
            nombre:'Fiber\'N Durazno, Box with 30 packs',
            descripcion:'Contains: Mix of oat bran, corn bran, and soy fiber. Fiber\'N Durazno Supreme also contains agave inulin and is sweetened with stevia. Flavor: Peach.',
            imagen:'build/image/productos/eua/1521900.png'
        },{
            nombre:'FiberN´Plus Durazno Supreme, Doypack 450 g.',
            descripcion:'Contains: Mix of oat bran, corn bran, and soy fiber. Fiber\'N Durazno Supreme also contains agave inulin and is sweetened with stevia. Flavor: Peach.',
            imagen:'build/image/productos/eua/1571908.png'
        },{
            nombre:'Magic Siluet, Box with 24 cookies',
            descripcion:'Contains: Cereal and fiber cookie covered in chocolate. Enhanced with Vitamins.',
            imagen:'build/image/productos/eua/1942418.png'
        },{
            nombre:'OML Cookies Supreme US 120 g.',
            descripcion:'Contains: Wheat bran fiber, polydextrose, and Inulin. Sweetened with stevia.',
            imagen:'build/image/productos/eua/3492800.png'
        },{
            nombre:'OML Shake Supreme, Box with 12 600 g.',
            descripcion:'Contains: Soy Protein (14 grams). Inulin (Dietary fiber). Vitamins and Minerals. Flavor: Cookies & Cream.',
            imagen:'build/image/productos/eua/7170943.png'
        },{
            nombre:'Teatino Durazno, Box with 30 packs 360 g.',
            descripcion:'Contains: Black tea and Chromium.',
            imagen:'build/image/productos/eua/3521508.png'
        },{
            nombre:'Teatino Durazno, Box with 30 packs 360 g.',
            descripcion:'Contains: Black tea and Chromium.',
            imagen:'build/image/productos/eua/3522208.png'
        },{
            nombre:'Teatino Limón Supreme, Bottle 300 g.',
            descripcion:'Contains: Black tea and Chromium. Flavor: Lemon. Teatino Limón Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/3576705.png'
        },{
            nombre:'Teatino Maracuyá Supreme, Box with 30 packs 225 g.',
            descripcion:'Contains: Green coffee, L-Carnitine, and L-Tyrosine. Flavor: Maracuya Sweetened with stevia.',
            imagen:'build/image/productos/eua/3575609.png'
        },{
            nombre:'Teatino Naranja Limón, Container 555 g.',
            descripcion:'Contains: Chromium, Vitamins C and E, and Cocolmeca extract.',
            imagen:'build/image/productos/eua/3521907.png'
        },{
            nombre:'Via Dulce Supreme, Box with 30 packs 150 g.',
            descripcion:'Contains: Green coffee and a blend of fiber (rice, apple, and oat bran fiber). Flavor: Grapefruit. Sweetened with stevia.',
            imagen:'build/image/productos/eua/4475910.png'
        },{
            nombre:'Via Dulce Toronja, Container 550 g.',
            descripcion:'Contains: Gymnema sylvestre and a blend of fiber. Flavor: Grapefruit.',
            imagen:'build/image/productos/eua/4421410.png'
        },{
            nombre:'Via Dulce, Bottle with 90 tablets',
            descripcion:'Contains: Gymnema sylvestre and a blend of fiber. Flavor: Grapefruit.',
            imagen:'build/image/productos/eua/4432900.png'
        },{
            nombre:'OML Protein Bar, Box with 6 pieces',
            descripcion:'Contains: High content of Protein (8 grams) With peanuts, blueberries, and cereal. Dipped in chocolate',
            imagen:'build/image/productos/eua/7042346.png'
        },{
            nombre:'Teatino Limón, Box with 30 Packs 360 g.',
            descripcion:'Contains: Black tea and Chromium. Flavor: Lemon. Teatino Limón Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/3522205.png'
        },{
            nombre:'EGO 10, Bottle 200 ml.',
            descripcion:'Contains: Taurine, Ribose, and B-complex vitamins. Flavor: Passion fruit.',
            imagen:'build/image/productos/eua/4610609.png'
        },{
            nombre:'Magnus Apple, Bottle 200 ml.',
            descripcion:'Contains: B-complex vitamins, Glycine, and Taurine. Flavor: Fruit and Apple. Magnus Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/2010613.png'
        },{
            nombre:'Magnus Supreme, Container 280 grs.',
            descripcion:'Contains: B-complex vitamins, Glycine, and Taurine. Flavor: Fruit and Apple. Magnus Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/2076600.png'
        },{
            nombre:'Magnus, Box with 30 packs 450 g.',
            descripcion:'Contains: B-complex vitamins, Glycine, and Taurine. Flavor: Fruit and Apple. Magnus Supreme is sweetened with stevia.',
            imagen:'build/image/productos/eua/2023500.png'
        },{
            nombre:'OML Pump Supreme Cookies & Cream, Doypack 560 g.',
            descripcion:'Contains: High content of Protein (20 grams). High content of Calcium and Iron. Vitamins and Minerals. High content of Fiber. Fat-free. Flavor: Cookies & Cream.',
            imagen:'build/image/productos/eua/5426243.png'
        },{
            nombre:'Power Gain, Container 524 g.',
            descripcion:'Contains: Arginine. Vitamins and Minerals. Flavor: Orange.',
            imagen:'build/image/productos/eua/2621600.png'
        },{
            nombre:'Power Gain, Box with 30 packs 570 g.',
            descripcion:'Contains: Arginine. Vitamins and Minerals. Flavor: Orange.',
            imagen:'build/image/productos/eua/2624200.png'
        },{
            nombre:'Undu, Box with 30 packs 561 g.',
            descripcion:'Contains: Glucosamine, Chondroitin, Arginine, and olive powder. Flavor: Citrus.',
            imagen:'build/image/productos/eua/3721200.png'
        }
    ];

    // ***** PRODUCTOS URUGUAY *****//
    this.productosUruguay = [
        {
            nombre: 'Biocros, Bote 567 grs.',
            descripcion: 'Contiene: Vitaminas del complejo B, glicina y taurina. Sabor frutas.',
            imagen: 'build/image/productos/uru/2021000.png'
        }, {
            nombre: 'Cafezzino Supreme, Caja C/30 Sachets 150 grs.',
            descripcion: 'Contiene: Mezclas de café y café verde. Sabor tradicional. Contiene estevia.',
            imagen: 'build/image/productos/uru/5124732.png'
        }, {
            nombre: 'Dual C Mix, Bote 600 grs.',
            descripcion: 'Contiene: Vitamina C. Sabor cítrico.',
            imagen: 'build/image/productos/uru/4520900.png'
        }, {
            nombre: 'FiberN Plus, Doypack 450 grs.',
            descripcion: 'Contiene: Mezcla de fibras de salvado de avena, salvado de maíz y fibra de Soya. Sabor durazno.',
            imagen: 'build/image/productos/uru/1525408.png'
        }, {
            nombre: 'Omnibeta Limón, Botella 960 ml.',
            descripcion: 'Contiene: Vitamina E y sábila. Sabores piña y limón. Omnibeta supreme con fibra (polidextrosa) y libre de calorías (estevia).Contiene: Vitamina E y sábila.  Sabores piña y limón. Omnibeta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen: 'build/image/productos/uru/4210205.png'
        }, {
            nombre: 'Omnibeta Piña Supreme, 960 ml.',
            descripcion: 'Contiene: Vitamina E y sábila. Sabores piña y limón. Omnibeta supreme con fibra (polidextrosa) y libre de calorías (estevia).',
            imagen: 'build/image/productos/uru/4260204.png'
        }, {
            nombre: 'Omnilife Cafetino, Bote 420 grs.',
            descripcion: 'Contiene: Mezclas de café y cromo. Sabor tradicional.',
            imagen: 'build/image/productos/uru/3322032.png'
        }, {
            nombre: 'Omnilife Kenyan, Bote 555 grs.',
            descripcion: 'Contiene: Colina, glicina, vitaminas del complejo B. Sabor frutas.',
            imagen: 'build/image/productos/uru/2521300.png'
        }, {
            nombre: 'Omnilife Starb, Bote 615 grs.',
            descripcion: 'Contiene: Vitaminas del complejo B y ácido fólico. Sabor frutas.',
            imagen: 'build/image/productos/uru/3020700.png'
        }, {
            nombre: 'Omnilife Teatino Limón, Bote 540 grs.',
            descripcion: 'Contiene: Té negro y Cromo. Sabor limón.',
            imagen: 'build/image/productos/uru/3521505.png'
        }, {
            nombre: 'Omniplus Botella 940 ml.',
            descripcion: 'Contiene: Vitaminas (A, B1, B2, B5, B6, B12, C, D, E, niacina y biotina), Minerales (Calcio, Magnesio, Zinc, Cobre, Cromo, Manganeso, Selenio) y Concentrados Herbales (Chorella, Manzanilla, Gotu Cola).   Vitaminas, Minerales y Extractos Herbales.    Sabor Frutas.',
            imagen: 'build/image/productos/uru/2310300.png'
        }, {
            nombre: 'Power Maker, Bote 524 grs.',
            descripcion: 'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen: 'build/image/productos/uru/2621600.png'
        }, {
            nombre: 'Power Maker, Caja C/30 Sobres 561 grs.',
            descripcion: 'Contiene: Arginina. Vitaminas y minerales. Sabor naranja.',
            imagen: 'build/image/productos/uru/2621200.png'
        }, {
            nombre: 'Super Mix Vainilla Sin Leche, Lata 600 grs.',
            descripcion: 'Contiene: Proteínas, vitaminas, minerales y carbohidratos. Sabor vainilla.',
            imagen: 'build/image/productos/uru/3120917.png'
        }, {
            nombre: 'Sweet Success Toronja, Bote 550 grs.',
            descripcion: 'Contiene: Mezclas de fibra. Sabor toronja.',
            imagen: 'build/image/productos/uru/4421410.png'
        }
    ];

    this.asignarProductos(this.selectedItem.id)

    console.log(this.mensaje);
  }

  asignarProductos(id){
    if (id == 0) {
        this.productos = this.productosArgentina;
        this.menuEspanolActivo();
    }else if (id == 1) {
        this.productos = this.productosBolivia;
        this.menuEspanolActivo();
    }else if (id == 2) {
        this.productos = this.productosBrasil;
        this.menuPortuguesActivo();
    }else if (id == 3) {
        this.productos = this.productosChile;
        this.menuEspanolActivo();
    }else if (id == 4) {
        this.productos = this.productosColombia;
        this.menuEspanolActivo();
    }else if (id == 5) {
        this.productos = this.productosCostaRica;
        this.menuInglesActivo();
    }else if (id == 6) {
        this.productos = this.productosEcuador;
        this.menuEspanolActivo();
    }else if (id == 7) {
        this.productos = this.productosElSalvador;
        this.menuEspanolActivo();
    }else if (id == 8) {
        this.productos = this.productosEspania;
        this.menuEspanolActivo();
    }else if (id == 9) {
        this.productos = this.productosGuatemala;
        this.menuEspanolActivo();
    }else if (id == 10) {
        this.productos = this.productosItalia;
        this.menuEspanolActivo();
    }else if (id == 11) {
        this.productos = this.productosMexico;
        this.menuEspanolActivo();
    }else if (id == 12) {
        this.productos = this.productosNicaragua;
        this.menuEspanolActivo();
    }else if (id == 13) {
        this.productos = this.productosPanama;
        this.menuEspanolActivo();
    }else if (id == 14) {
        this.productos = this.productosParaguay;
        this.menuEspanolActivo();
    }else if (id == 15) {
        this.productos = this.productosPeru;
        this.menuEspanolActivo();
    }else if (id == 16) {
        this.productos = this.productosRepublicaDominicana;
        this.menuEspanolActivo();
    }else if (id == 17) {
        this.productos = this.productosEstadosUnidos;
        this.menuInglesActivo();
    }else if (id == 18) {
        this.productos = this.productosUruguay;
        this.menuEspanolActivo();
    }
  }

  openModal(){
      this.menu.open(this.activeMenu);
  }

  menuEspanolActivo() {
      this.activeMenu = 'menuEspanol';
      this.menu.enable(false, 'menuItalia');
      this.menu.enable(false, 'menuPortugues');
      this.menu.enable(false, 'menuIngles');
      this.menu.enable(true, 'menuEspanol');
  }

  menuInglesActivo() {
      this.activeMenu = 'menuIngles';
      this.menu.enable(false, 'menuItalia');
      this.menu.enable(false, 'menuPortugues');
      this.menu.enable(false, 'menuEspanol');
      this.menu.enable(true, 'menuIngles');
  }

  menuPortuguesActivo() {
      this.activeMenu = 'menuPortugues';
      this.menu.enable(false, 'menuItalia');
      this.menu.enable(false, 'menuEspanol');
      this.menu.enable(false, 'menuIngles');
      this.menu.enable(true, 'menuPortugues');
  }

  menuItaliaActivo() {
      this.activeMenu = 'menuItalia';
      this.menu.enable(false, 'menuEspanol');
      this.menu.enable(false, 'menuIngles');
      this.menu.enable(false, 'menuPortugues');
      this.menu.enable(true, 'menuItalia');
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item, mensaje: this.mensaje, menuActive: this.activeMenu
    });
  }

}
