import { HomePage } from './app.po';
import { CashPage } from './cash.po';


describe('angular-app App', () => {
  let homePage: HomePage;
  let cashPage: CashPage;

  beforeEach(() => {
    homePage = new HomePage();
    cashPage = new CashPage();
  });

  it('should display welcome message', () => {
    homePage.navigateTo();
    expect(homePage.getParagraphText()).toEqual('home Works!');
  });

  it('should diplay storage title ', () => {
    cashPage.navigateTo();
    expect(cashPage.getParagraphText()).toEqual('Cash Storage');
  });

  it('should generate new operation ', () => {
    cashPage.navigateTo();
    cashPage.createOperation();
  });
});
