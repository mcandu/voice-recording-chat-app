import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, NavController, ModalController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    }
  ];

  public channels = [
    {
      title: 'Channel 1',
      url: '/channel',
    },
    {
      title: 'Channel 2',
      url: '/channel',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      //this.splashScreen.hide();
      this.authService.getToken();
    });
  }

  logout() {
    // this.authService.logout().subscribe(
    //   data => {
    //     this.alertService.presentToast(data['message']);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     this.navCtrl.navigateRoot('/landing');
    //   }
    // );
    this.alertService.presentToast("Logged Out");
    this.navCtrl.navigateRoot('/landing');
  }

  goChannel() {
    this.navCtrl.navigateRoot('/channel');
    console.log("clicked");
  }

}
