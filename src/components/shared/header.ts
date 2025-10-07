import { Component } from '@Core/component';

export type LanguagesType = 'Python' | 'Java' | '.NET';

export class Header extends Component {
  private Locators = {
    searchBarButton: this.locator.locator('button.DocSearch-Button'),
    languageDropdownButton: this.locator.locator('.dropdown--hoverable'),
    languageOptions: this.locator.locator('.dropdown--hoverable>ul'),
  };

  public async clickSearchButton() {
    await this.Locators.searchBarButton.click();
  }

  public async switchLanguage(language: LanguagesType) {
    await this.Locators.languageDropdownButton.hover();
    await this.Locators.languageOptions.getByText(language).click();
  }
}
