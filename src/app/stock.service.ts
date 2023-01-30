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

      input[index].price = stock.compute.call(null, stock);
    });
    return input;
  }

  static uptrend = (stock) => {
    return stock.price + 5;
  }

  static downtrend = function(stock) {
    return stock.price - 5;
  }

  constructor() {
    StockService.stocks = [
                    { symbol: "GOOG", price: 120, compute: StockService.uptrend, bought_price: 50, quantity: 0, total_value: 21000, trend: 'UP' },
                    { symbol: "YHOO", price: 100, compute: StockService.uptrend, bought_price: 100, quantity: 0, total_value: 21000, trend: 'UP' },
                    { symbol: "MSFT", price: 20, compute: StockService.uptrend, bought_price: 120, quantity: 0, total_value: 21000, trend: 'UP' },
                    { symbol: "AAPL", price: 200, compute: StockService.uptrend