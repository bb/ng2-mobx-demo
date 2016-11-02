import { MobxstatePage } from './app.po';

describe('mobxstate App', function() {
  let page: MobxstatePage;

  beforeEach(() => {
    page = new MobxstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
