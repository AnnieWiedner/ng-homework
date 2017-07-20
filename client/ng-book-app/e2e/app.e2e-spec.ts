import { NgBookAppPage } from './app.po';

describe('ng-book-app App', () => {
  let page: NgBookAppPage;

  beforeEach(() => {
    page = new NgBookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
