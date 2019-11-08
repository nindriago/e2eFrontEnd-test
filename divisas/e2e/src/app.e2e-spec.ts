import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Bienvenidos a divisas!');
  });
  it('should display name button', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Calculate');
  });
  it('should input be null', () => {
    page.navigateTo();
    expect(page.getInput_1()).toBe(null);
  });
  it('should input be null', () => {
    page.navigateTo();
    expect(page.getInput_2()).toBe(null);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
