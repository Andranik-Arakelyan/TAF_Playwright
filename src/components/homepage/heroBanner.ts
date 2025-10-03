import { Component } from '../../core/component'

type LinkTypes = 'Get started' | 'Star' | '77k+'

export class HeroBanner extends Component {
  private Locators = {
    link: (text: LinkTypes) =>
      this.locator.getByRole('link', { name: `${text}` }),
  }

  public async clickLink(text: LinkTypes) {
    await this.Locators.link(text).click()
  }
}
