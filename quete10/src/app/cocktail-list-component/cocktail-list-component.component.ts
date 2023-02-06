import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CocktailServiceService } from '../cocktail-service.service';
@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit{


  
constructor (public cocktailServiceService : CocktailServiceService){}

cocktailList : { nom : string, prix : string, image : string}[] = []

ngOnInit(): void   {
  this.cocktailList = this.cocktailServiceService.cocktail
  console.log(this.cocktailList)
}

send(){
  console.log(this.cocktailList)
}
}
