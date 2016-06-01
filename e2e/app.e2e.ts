import { PhatMachinePage } from './app.po';

describe('phat-machine App', function() {
  let page: PhatMachinePage;

  beforeEach(() => {
    page = new PhatMachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('phat-machine works!');
  });
});
