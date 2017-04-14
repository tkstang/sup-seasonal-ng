import { SupSeasonalPage } from './app.po';

describe('sup-seasonal App', () => {
  let page: SupSeasonalPage;

  beforeEach(() => {
    page = new SupSeasonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
