import { Page } from '@playwright/test'

export abstract class Container {
  public constructor(protected page: Page) {}

  public async open(url: string) {
    await this.page.goto(url)
  }
}
