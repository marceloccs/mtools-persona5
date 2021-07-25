import { Component, OnInit } from '@angular/core';
import { EletricChairData } from 'src/data/eletric-chair/eletric-chair-data';
import { Itemization } from 'src/module/itemization';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-eletric-chair',
  templateUrl: './eletric-chair.component.html',
  styleUrls: ['./eletric-chair.component.sass']
})
export class EletricChairComponent implements OnInit {
  itemizations$: Observable<Itemization[]>;
  filter = new FormControl('');

  constructor() {
    this.itemizations$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => searchItemOrPersona(text))
    );
  }

  ngOnInit(): void {
  }

}

function searchItemOrPersona(text: string): Itemization[] {
  return EletricChairData.filter(data => {
    const term = text.toLowerCase();
    return data.item.toLowerCase().includes(term)
        || data.itemFusionAlarm.toLowerCase().includes(term)
        || data.persona.toLowerCase().includes(term);
  }).sort(comparerData);
}

function comparerData(a :Itemization,b :Itemization){
  if(a.persona > b.persona) return 1;
  if(a.persona < b.persona) return -1;
  return 0;
}
