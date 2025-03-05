import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgOptimizedImage],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  urlImg= "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg";

  pkmnList =  [
    {id:1, name :"insecateur"},
    {id:2, name :"pikachu"},
    {id:3, name :"métamorph"},
  ]

  @Output() infoEvent = new EventEmitter<{ id: number, name: string }>();

  previentLeParent(pkmn: { id: number, name: string }) {
    this.infoEvent.emit(pkmn);
  }
}
