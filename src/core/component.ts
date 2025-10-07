import { Locator, Page } from '@playwright/test';

export abstract class Component {
  public constructor(
    protected locator: Locator,
    private page: Page
  ) {}
}
