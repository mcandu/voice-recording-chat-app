import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL = 'https://internal-chat-6a17f.hq.spicaengine.com/api/fn-execute';

  constructor() { }
}
