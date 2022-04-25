import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servizio01Service } from '../servizio01.service';

@Component({
  selector: 'app-weather01',
  templateUrl: './weather01.component.html',
  styleUrls: ['./weather01.component.css']
})
export class Weather01Component implements OnInit, OnDestroy  {

  WeaterData : any;
  subscription : Subscription;
  apiEndpoint=environment.apiEndpoint



  constructor(private serv01 : Servizio01Service) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto")
    } 
  }

  ngOnInit(): void {
    this.WeaterData =
    { main: {}}
    this.getWeatherData()
  }
  getWeatherData() {
    let observable=this.serv01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setWeatherData(httpResponse) })
  }
  setWeatherData(data: any) {
    ?
    ?
    ?
  
}
