import { browser, element, by } from 'protractor';

export class StockportfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
 