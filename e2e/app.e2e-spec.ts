import { MtchatappPage } from './app.po';

describe('mtchatapp App', () => {
  let page: MtchatappPage;

  beforeEach(() => {
    page = new MtchatappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
