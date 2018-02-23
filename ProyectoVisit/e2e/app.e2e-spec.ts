import { ProyectoVisitPage } from './app.po';

describe('proyecto-visit App', function() {
  let page: ProyectoVisitPage;

  beforeEach(() => {
    page = new ProyectoVisitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
