import { Component } from '@Core/component';

export class MobileSidebar extends Component {
  public Locators = {
    closeSidebarButton: this.locator.locator(
      '[aria-label="Close navigation bar"]'
    ),
  };

  public async clickCloseSidebar() {
    await this.Locators.closeSidebarButton.click();
  }
}
