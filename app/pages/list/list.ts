import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from '../product-list/product-list';

@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  textoEspanol: any;
  textoIngles: any;
  textoBr: any;
  paises: Array<{id: number, nombre: string, idioma: string, texto: any, imagen: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.textoEspanol = {
        menu: 'Menú',
        volver: 'Volver',
        textoRecomendar: 'Serias tan amable de recomendarnos',
        textoreRomendarBoton: 'Recomendar',
        cerrar: 'Cerrar',
        acercaDe: 'Acerca De',
        actualizar: 'Actualizar',
        valorarApp: 'Valorar esta App',
        textoAcercaDe1: 'Herbalife desde 1980 se preocupa por tu salud, tu nutrición y bienestar. Ahora Herbalife también irá contigo a dónde tú desees. Nuestros consejos y productos podrás obtenerlos gracias a HerbaMovil.',
        textoAcercaDe2: 'Ahora desde tu móvil Herbalife estará atento a tu salud y nutrición y podrá ofrecerte los consejos que tú desees.',
        descripcion: 'Descripcion',
        sabor: 'Sabores',
        beneficio: 'Beneficios',
        detalle: 'Detalles',
        uso: 'Uso',
        preparacion: 'Preparación',
        indicacion: 'Indicaciones',
        ingrediente: 'Ingredientes',
        msjCompartir: 'Descarga HerbaMovil y disfruta de herbalife donde quiera que te encuentres. Ios: http://goo.gl/6L9e4Z, Android: goo.gl/UgywXQ'
    };

    this.textoIngles = {
        menu: 'Menú',
        volver: 'Volver',
        textoRecomendar: 'Serias tan amable de recomendarnos',
        textoreRomendarBoton: 'Recomendar',
        cerrar: 'Cerrar',
        acercaDe: 'Acerca De',
        actualizar: 'Actualizar',
        valorarApp: 'Valorar esta App',
        textoAcercaDe1: 'Herbalife desde 1980 se preocupa por tu salud, tu nutrición y bienestar. Ahora Herbalife también irá contigo a dónde tú desees. Nuestros consejos y productos podrás obtenerlos gracias a HerbaMovil.',
        textoAcercaDe2: 'Ahora desde tu móvil Herbalife estará atento a tu salud y nutrición y podrá ofrecerte los consejos que tú desees.',
        descripcion: 'Description',
        sabor: 'Flavors',
        beneficio: 'Benefits',
        detalle: 'Details',
        uso: 'Use',
        preparacion: 'Preparation',
        indicacion: 'Indications',
        ingrediente: 'Ingredients',
        msjCompartir: 'Download HerbaMovil herbalife and enjoy wherever you find Ios: http://goo.gl/6L9e4Z, Android: goo.gl/UgywXQ'
    };

    this.textoBr = {
        menu: 'Menú',
        volver: 'Volver',
        textoRecomendar: 'Serias tan amable de recomendarnos',
        textoreRomendarBoton: 'Recomendar',
        cerrar: 'Cerrar',
        acercaDe: 'Acerca De',
        actualizar: 'Actualizar',
        valorarApp: 'Valorar esta App',
        textoAcercaDe1: 'Herbalife desde 1980 se preocupa por tu salud, tu nutrición y bienestar. Ahora Herbalife también irá contigo a dónde tú desees. Nuestros consejos y productos podrás obtenerlos gracias a HerbaMovil.',
        textoAcercaDe2: 'Ahora desde tu móvil Herbalife estará atento a tu salud y nutrición y podrá ofrecerte los consejos que tú desees.',
        descripcion: 'Descrição',
        sabor: 'Sabores',
        beneficio: 'Beneficios',
        detalle: 'Detalhes',
        uso: 'Uso',
        preparacion: 'Preparação',
        indicacion: 'Indicações',
        ingrediente: 'Ingredientes',
        msjCompartir: 'Baixe HerbaMovil herbalife e desfrutar de onde quer que você encontrar Ios: http://goo.gl/6L9e4Z, Android: goo.gl/UgywXQ'
    };

    this.paises = [
      {
          id: 0,
          nombre: 'Argentina',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/argentina.png'
      }, {
          id: 1,
          nombre: 'Bolivia',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/bolivia.png'
      }, {
          id: 2,
          nombre: 'Brasil',
          idioma: 'Portugués',
          texto: this.textoBr,
          imagen: 'build/image/menu/br.png'
      }, {
          id: 3,
          nombre: 'Chile',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/chile.png'
      }, {
          id: 4,
          nombre: 'Colombia',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/colombia.png'
      }, {
          id: 5,
          nombre: 'Costa Rica',
          idioma: 'English',
          texto: this.textoIngles,
          imagen: 'build/image/menu/costarica.png'
      }, {
          id: 6,
          nombre: 'Ecuador',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/ecuador.png'
      }, {
          id: 7,
          nombre: 'El Salvador',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/elsalvador.png'
      }, {
          id: 8,
          nombre: 'España',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/espania.png'
      }, {
          id: 9,
          nombre: 'Guatemala',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/guatemala.png'
      }, {
          id: 10,
          nombre: 'Italia',
          idioma: 'Italiano',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/italia.png'
      }, {
          id: 11,
          nombre: 'México',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/mexico.png'
      }, {
          id: 12,
          nombre: 'Nicaragua',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/nicaragua.png'
      }, {
          id: 13,
          nombre: 'Panamá',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/panama.png'
      }, {
          id: 14,
          nombre: 'Paraguay',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/paraguay.png'
      }, {
          id: 15,
          nombre: 'Perú',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/peru.png'
      }, {
          id: 16,
          nombre: 'República Dominicana',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/republicaDominicana.png'
      }, {
          id: 17,
          nombre: 'USA',
          idioma: 'English',
          texto: this.textoIngles,
          imagen: 'build/image/menu/usa.png'
      }, {
          id: 18,
          nombre: 'Uruguay',
          idioma: 'Español',
          texto: this.textoEspanol,
          imagen: 'build/image/menu/uruguay.png'
      }
    ]
  }

  itemTapped(event, item) {
    this.nav.push(ProductListPage, {
      item: item
    });
  }
}
