import { HeroBanner } from '../components/homepage/heroBanner'
import { Container } from '../core/container'

export class HomePage extends Container {
  private Locators = {
    heroBanner: this.page.locator('header.hero'),
  }

  public async open() {
    await this.page.goto('https://playwright.dev/', { waitUntil: 'load' })
  }

  public HeroBanner = new HeroBanner(this.Locators.heroBanner, this.page)
}
