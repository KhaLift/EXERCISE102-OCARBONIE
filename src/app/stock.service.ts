import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  static stocks: any;

  getStockPrices = () => {
    //setInterval(() => {this.computePrices(); }, 1000);
    StockService.computePrices(StockService.stocks);
    