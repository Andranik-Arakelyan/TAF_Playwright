import { Component } from '@Core/component';

export class SearchModal extends Component {
  public Locators = {
    searchResult: (name: string) => this.locator.getByText(`${name}`),
  };

  public async fillSearchText(text: string) {
    await this.locator.locator('input').pressSequentially(text);
  }
}
