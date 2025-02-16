import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Cette variable va stocker le Pokémon reçu
  selectedPkmn: { id: number, name: string } | null = null;

  // Méthode qui reçoit l'objet Pokémon du composant enfant
  montreMoi(pkmn: { id: number, name: string }) {
    this.selectedPkmn = pkmn;  // Stocke le Pokémon dans la variable
  }
}
