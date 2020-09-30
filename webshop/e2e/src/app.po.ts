import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getButtonText() {
    return element.all(by.className("header-link")).get(0).get.text();    
  }

  clickOnLogin() {
    return element.all(by.css('123')).get(0).click();
  }



}
