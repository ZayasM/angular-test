import { PresupuestadorPanelPage } from './app.po';

describe('presupuestador-panel App', () => {
  let page: PresupuestadorPanelPage;

  beforeEach(() => {
    page = new PresupuestadorPanelPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
