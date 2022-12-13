import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  static stocks: any;

  getStockPrices = () => {
    //setInterval(() => {this.computePrices(); }, 1000);
    StockService.computePrices(StockService.stocks);
    return Promise.resolve(StockService.stocks);
  }

  static incrementPrice = (stock, index) => {
    var price = stock.price;
    price += 5;
    if (price > 120) {
      price = 120;
    }
    StockService.stocks[index].compute = StockService.uptrend;
    StockService.stocks[index].trend = 'UP';
    StockService.stocks[inde