import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  static stocks: any;

  getStockPrices = () => {
    //setInterval(() => {this.compu