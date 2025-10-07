import { Component } from '@Core/component';

export class Header extends Component {
  private Locators = {
    searchBarButton: this.locator.locator('button.DocSearch-Button'),
  };

  public async clickSearchButton() {
    await this.Locators.searchBarButton.click();
  }
}
