export class PhatMachinePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('phat-machine-app h1')).getText();
  }
}
