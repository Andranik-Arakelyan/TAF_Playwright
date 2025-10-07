import { Header } from '@Components/shared/header';
import { HeroBanner } from '@Components/homepage/heroBanner';
import { Container } from '@Core/container';
import { SearchModal } from '@Components/shared/searchModal';

export class HomePage extends Container {
  public Locators = {
    heroBanner: this.page.locator('header.hero'),
    header: this.page.locator('nav[aria-label="Main"]'),
    searchModal: this.page.locator('.DocSearch-Modal'),
  };

  public async open() {
    await super.open('https://playwright.dev/');
  }

  public HeroBanner = new HeroBanner(this.Locators.heroBanner, this.page);
  public Header = new Header(this.Locators.header, this.page);
  public SearchModal = new SearchModal(this.Locators.searchModal, this.page);
}
