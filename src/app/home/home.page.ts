import { Component, OnInit } from '@angular/core';
import { GamingService } from '../services/gaming.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  games: any[] = [];

  constructor(private gamingService: GamingService) { }

  ngOnInit() {
    this.gamingService.getGames().subscribe((data: any) => {
      this.games = data.results; // Assuming 'results' contains the array of games
    });
  }
}
