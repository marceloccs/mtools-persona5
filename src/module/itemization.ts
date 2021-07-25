import { Fool, PersonaTypeClass } from './persona-type';

export class Itemization {
  persona: string;
  item: string;
  itemFusionAlarm: string;
  dlc: boolean;
  type: PersonaTypeClass;

  constructor(persona: string, item: string, itemFusionAlarm: string, dlc: boolean, type: PersonaTypeClass){
    this.persona = persona;
    this.item = item;
    this.itemFusionAlarm = itemFusionAlarm;
    this.dlc = dlc;
    this.type = type;
  }
}
