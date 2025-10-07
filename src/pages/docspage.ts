import { Container } from '../core/container';
export class DocsPage extends Container {
  private Locators = {
    headingByName: (name: string) =>
      this.page.getByRole('heading', { name: `${name}` }),
  };

  public getHeadingByName(name: string) {
    return this.Locators.headingByName(name);
  }
}
