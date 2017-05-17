import { BeautifulAppPage } from './app.po';

describe('beautiful-app App', () => {
  let page: BeautifulAppPage;

  beforeEach(() => {
    page = new BeautifulAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
