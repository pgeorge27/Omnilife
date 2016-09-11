import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make ListPage the root (or first) page
  rootPage: any = ListPage;
  pages: Array<{title: string, component: any}>;
  linkActualizar: string;
  linkValorar: string;
  linkMasApp: string;
  admobid: any;
  Connection: any;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    this.asignarMensajes();

    this.crearAnuncios();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  asignarMensajes(){
    if (this.platform.is('ios')) {
        this.linkActualizar = 'itms-apps://itunes.apple.com/us/app/herbamovil-for-herbalife/id957250580?mt=8';
        this.linkValorar = 'itms-apps://itunes.apple.com/us/app/herbamovil-for-herbalife/id957250580?mt=8';
        this.linkMasApp = 'itms-apps://itunes.apple.com/us/developer/george-perez/id955229163';
    } else {
        this.linkActualizar = 'x';
        this.linkValorar = 'y';
        this.linkMasApp = 'z';
    }
  }

  crearAnuncios() {
    this.platform.ready().then(() => {
      if( /(android)/i.test(navigator.userAgent) ) {
          this.admobid = {
              banner: 'ca-app-pub-9365506700334816/3212547289',
              interstitial: 'ca-app-pub-6869992474017983/1657046752'
          };
      } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
          this.admobid = {
              banner: 'ca-app-pub-9365506700334816/9259080880',
              interstitial: 'ca-app-pub-6869992474017983/7563979554'
          };
      } else {
          this.admobid = {
              banner: 'ca-app-pub-6869992474017983/8878394753',
              interstitial: 'ca-app-pub-6869992474017983/1355127956'
          };
      }
      if(AdMob) {
        AdMob.createBanner({
          adId:this.admobid.banner,
          isTesting: false,
          position:AdMob.AD_POSITION.BOTTOM_CENTER,
          autoShow:true
        });

        // AdMob.prepareInterstitial({
        //   adId: this.admobid.interstitial,
        //   isTesting: true,
        //   autoShow: true
        // });
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [], {
  backButtonText: '',
});