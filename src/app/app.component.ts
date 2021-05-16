import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  urlbase: string = location.origin + "/api";

  constructor(private http: HttpClient) {}

  sendGet(){
    this.http.get(this.urlbase+"/Teste/TesteGet", {
      headers: new HttpHeaders()
         .set('Content-Type', 'application/json'),
    })
      .subscribe((resp: any) => {
        alert(resp.resposta);
      })
  }

  sendPost(){
    this.http.post(this.urlbase+"/Teste/TestePost", null, {
      headers: new HttpHeaders()
         .set('Content-Type', 'application/json'),
    })
      .subscribe((resp: any) => {
        alert(resp.resposta);
      })
  }

}
