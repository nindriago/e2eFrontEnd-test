import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getButtonText() {
    return element(by.css('app-root button')).getText() as Promise<string>;
  }

  getInput_1() {
    return element(by.name('currencyEntrada_1')).sendKeys(500);
  }

  getInput_2() {
    return element(by.name('currencyEntrada_4')).sendKeys(500);
  }
}
