import { browser, by, element } from 'protractor';

export class AppPage {
  value: string;

  navigateTo() {
    return browser.get('/');
  }

  // getParagraphText() {
  //   return element(by.css('app-root h1')).getText();
  // }

  getSelectOptionsCount(): any {
    return element(by.css('app-root select')).length;
  }

  getSelectOptionText(): any {
    return element(by.css('app-root select')).$('option:checked').getText();
  }
  
  getValue(): any {
    return this.value;
  }
}
