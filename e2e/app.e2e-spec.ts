import { StockportfolioPage } from './app.po';

describe('stockportfolio App', function() {
  let page: StockportfolioPage;

  beforeEach(() => {
    page = new StockportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page