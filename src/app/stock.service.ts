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
    StockService.stocks[index].price = price;
  }

  static decreasePrice = (stock, index) => {
    var price = stock.price;
    price -= 5;
    if (price < 0) {
      price = 0;
    }
    StockService.stocks[index].compute = StockService.downtrend;
    StockService.stocks[index].trend = 'DOWN';
    StockService.stocks[index].price = price;
  }

  static computePrices = (input) => {
    console.log('computing new prices');
    input.forEach(function(stock, index) {
      if (stock.price >= 120) {
        StockService.decreasePrice(stock, index);
      }
      if (stock.price <= 0) {
        StockService.incrementPrice(stock, index)
      }

      input[inde