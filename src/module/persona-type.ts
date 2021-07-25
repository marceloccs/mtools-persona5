export class PersonaTypeClass {
  name: string;
  number: number;
  image: any;

  constructor (name: string, number: number, image: any) {
    this.name = name;
    this.number = number;
    this.image = image;
  }


}

export const Fool = new PersonaTypeClass("Fool", 0, null);
export const Magician= new PersonaTypeClass("Magician", 1, null);
export const Priestess=  new PersonaTypeClass("Priestess", 2, null);
export const Empress= new PersonaTypeClass("Empress", 3, null);
export const Emperor= new PersonaTypeClass("Emperor", 4, null);
export const Hierophant= new PersonaTypeClass("Hierophant", 5, null);
export const Lovers= new PersonaTypeClass("Lovers", 6, null);
export const Chariot= new PersonaTypeClass("Chariot", 7, null);
export const Justice= new PersonaTypeClass("Justice", 8, null);
export const Hermit= new PersonaTypeClass("Hermit", 9, null);
export const Fortune= new PersonaTypeClass("Fortune", 10, null);
export const Strength= new PersonaTypeClass("Strength", 11, null);
export const HangedMan=  new PersonaTypeClass("Hanged Man", 12, null);
export const Death=  new PersonaTypeClass("Death", 13, null);
export const Temperance=  new PersonaTypeClass("Temperance", 14, null);
export const Devil= new PersonaTypeClass("Devil", 15, null);
export const Tower= new PersonaTypeClass("Tower", 16, null);
export const Star= new PersonaTypeClass("Star", 17, null);
export const Moon=  new PersonaTypeClass("Moon", 18, null);
export const Sun=  new PersonaTypeClass("Sun", 19, null);
export const Judgement= new PersonaTypeClass("Judgement", 20, null);
export const Faith=  new PersonaTypeClass("Faith", 0, null);
export const Councillor= new PersonaTypeClass("Councillor", 0, null);

