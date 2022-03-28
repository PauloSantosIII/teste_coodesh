import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class BuscaApiService {
  url = environment.apiUrl

  constructor(protected http: HttpClient) { }

  pegarAlgoNaAPi() {
    return this.http.get(this.url + '/oi')
  }

}
