import { PracticalTestPage } from './app.po';

describe('practical-test App', () => {
  let page: PracticalTestPage;

  beforeEach(() => {
    page = new PracticalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
