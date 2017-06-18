import { browser, by, element } from 'protractor';

export class CashPage {
  navigateTo() {
    return browser.get('/cash');
  }

  getParagraphText() {
    return element(by.css('goi-storage h3')).getText();
  }
  createOperation() {
    element(by.css('.fieldDescription input')).sendKeys('A new description');
    element(by.css('button[type="submit"]')).click();
  }
}
