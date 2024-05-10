import { GamingService } from '../services/gaming.service';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel } from '@ionic/angular/standalone';
import { IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class GameListPage implements OnInit {
  games: any[] = [];

  constructor(private apiService: GamingService) {}

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.apiService.getGames().toPromise().then((response: any) => {
      this.games = response; // Assuming the response is already JSON
    });
  }

}
