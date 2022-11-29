import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

interface WeatherForecast{
  city: string;
  temperature: number;
  precipitation: number;
  windSpeed: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  weatherForecasts: WeatherForecast[] = [];

  constructor(private storage: Storage) {}

  addFavorite(item):void{
    this.storage.get('favs')
    .then((favs)=>{
      if(favs == null){
        favs = [];
      }
      favs.push(item); 
      return favs;
    })
    .then((favs)=>{
      this.storage.set('favs', favs);
    })
  }

  public getFavorites(): Promise<WeatherForecast[]>{
    return this.storage.get('favs');
  }

  ngOnInit() {
    this.storage.create();
    this.storage.set('favs', []);
    var stateCapitals = [
      { name: 'Montgomery', stateAbbrev: 'AL' },
      { name: 'Juneau', stateAbbrev: 'AK' },
      { name: 'Phoenix', stateAbbrev: 'AZ' },
      { name: 'Little Rock', stateAbbrev: 'AR' },
      { name: 'Sacramento', stateAbbrev: 'CA' },
      { name: 'Denver', stateAbbrev: 'CO' },
      { name: 'Hartford', stateAbbrev: 'CT' },
      { name: 'Dover', stateAbbrev: 'DE' },
      { name: 'Tallahassee', stateAbbrev: 'FL' },
      { name: 'Atlanta', stateAbbrev: 'GA' },
      { name: 'Honolulu', stateAbbrev: 'HI' },
      { name: 'Boise', stateAbbrev: 'ID' },
      { name: 'Springfield', stateAbbrev: 'IL' },
      { name: 'Indianapolis', stateAbbrev: 'IN' },
      { name: 'Des Moines', stateAbbrev: 'IA' },
      { name: 'Topeka', stateAbbrev: 'KS' },
      { name: 'Frankfort', stateAbbrev: 'KY' },
      { name: 'Baton Rouge', stateAbbrev: 'LA' },
      { name: 'Augusta', stateAbbrev: 'ME' },
      { name: 'Annapolis', stateAbbrev: 'MD' },
      { name: 'Boston', stateAbbrev: 'MA' },
      { name: 'Lansing', stateAbbrev: 'MI' },
      { name: 'Saint Paul', stateAbbrev: 'MN' },
      { name: 'Jackson', stateAbbrev: 'MS' },
      { name: 'Jefferson City', stateAbbrev: 'MO' },
      { name: 'Helena', stateAbbrev: 'MT' },
      { name: 'Lincoln', stateAbbrev: 'NE' },
      { name: 'Carson City', stateAbbrev: 'NV' },
      { name: 'Concord', stateAbbrev: 'NH' },
      { name: 'Trenton', stateAbbrev: 'NJ' },
      { name: 'Santa Fe', stateAbbrev: 'NM' },
      { name: 'Albany', stateAbbrev: 'NY' },
      { name: 'Raleigh', stateAbbrev: 'NC' },
      { name: 'Bismarck', stateAbbrev: 'ND' },
      { name: 'Columbus', stateAbbrev: 'OH' },
      { name: 'Oklahoma City', stateAbbrev: 'OK' },
      { name: 'Salem', stateAbbrev: 'OR' },
      { name: 'Harrisburg', stateAbbrev: 'PA' },
      { name: 'Providence', stateAbbrev: 'RI' },
      { name: 'Columbia', stateAbbrev: 'SC' },
      { name: 'Pierre', stateAbbrev: 'SD' },
      { name: 'Nashville', stateAbbrev: 'TN' },
      { name: 'Austin', stateAbbrev: 'TX' },
      { name: 'Salt Lake City', stateAbbrev: 'UT' },
      { name: 'Montpelier', stateAbbrev: 'VT' },
      { name: 'Richmond', stateAbbrev: 'VA' },
      { name: 'Olympia', stateAbbrev: 'WA' },
      { name: 'Charleston', stateAbbrev: 'WV' },
      { name: 'Madison', stateAbbrev: 'WI' },
      { name: 'Cheyenne', stateAbbrev: 'WY' }
    ];

    stateCapitals.forEach(t => {
      this.storage.set('favs', []);
      fetch(`https://localhost:7288/weather/${t.name}`)
        .then(response => response.json())
        .then(data => {
          this.weatherForecasts.push(data);
        });
    })
  }

}
