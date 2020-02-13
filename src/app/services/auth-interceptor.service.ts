import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { flatMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private navCtrl: NavController,
    private storage: NativeStorage
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.url[0] == "!") {
      request = request.clone({
        url: request.url.slice(1)
      })
      return next.handle(request);
    }
    else {
      return from(this.storage.getItem('token')).pipe(
        flatMap(token => {
          if (token) {
            request = request.clone({
              headers: request.headers.set(
                'Authorization',
                token
              )
            });
          }
          return next.handle(request);
        }), tap({
          error: error => {
            // Checking if it is an Authentication Error (401)
            if (error.status === 401) {
              alert('Access Denied');
              // <Log the user out of your application code>
              this.navCtrl.navigateRoot('/dashboard');
            }
          }
        })
      );
    }




  }
}
