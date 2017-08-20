import { MyFirtAppPage } from './app.po';

describe('my-firt-app App', function() {
  let page: MyFirtAppPage;

  beforeEach(() => {
    page = new MyFirtAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
