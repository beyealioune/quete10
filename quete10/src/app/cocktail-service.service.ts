import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {


  public cocktail : { nom : string, prix : string, image : string}[]  = [
    { nom : "titi", prix : "10", image : "https://www.destinationcocktails.fr/wp-content/uploads/2022/04/cocktail-aqua-velva.jpg"},
    { nom : "toto", prix : "15", image : "https://www.cookingout.fr/wp-content/uploads/2014/06/97239140_o-1.jpg"},
    { nom : "tata", prix : "20", image : "https://www.notparisienne.fr/wp-content/uploads/2020/10/cokctail-halloween.jpg"},
  ]


  getCocktails() {
    return this.cocktail
  }

  constructor() { }
}
