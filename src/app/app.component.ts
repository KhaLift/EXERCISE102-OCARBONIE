// src/app/app.component.ts
import { Component, trigger, state, style, animate, transition } from '@angular/core';

import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('trending', [
      state('DOWN', style({
        'background-color': 'red'
      })),
      state('UP', style({
        'background-color': 'green'
      })),
      transition('UP => DOWN', [
        style({transform: 'translateX(-100%)'}),
        animate(3000)
      ]),
      transition('DOWN => UP', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ],
  providers: [StockService]
})
export class AppComponent {
  title = 'Stock Dashboard';
  stockPrices = [];
  stockService: StockService;
  constructor(stockService: StockService) {
    this.stockService = stockService;
  }

  getStockPrices() {
    this.stockService.getStockPrices().then(prices => {
      console.log('just got prices: ', prices);
      this.stockPrices = prices;
    });
  }

  ngOnInit() {
    // check for updated prices
    setInterval(() => {this.getStockPrices(); }, 1000);
  }

}
