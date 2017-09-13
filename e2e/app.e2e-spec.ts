import { AppPage } from './app.po';

describe('homework02 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });

  it('should have 3 options', () => {
    page.navigateTo();
    expect(page.getSelectOptionsCount()).toEqual(3);
  })

  it('if select AWS should display 0', () => {
    page.navigateTo();
    page.getSelectOptionText().toEqual('AWS');
    expect(page.getValue()).toBe('0');
  })

  it('if select AWS should display 1', () => {
    page.navigateTo();
    page.getSelectOptionText().toEqual('Azure');
    expect(page.getValue()).toBe('0');
  })

  it('if select AWS should display 2', () => {
    page.navigateTo();
    page.getSelectOptionText().toEqual('Aliyun');
    expect(page.getValue()).toBe('0');
  })

});
