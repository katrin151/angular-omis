import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login button', () => {
    page.clickOnLogin();
    expect(browser.getCurrentUrl()).toEqual("registreeru/login");
  });

  it('should display welcome message', () => {
    page.clickOnLogin();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
