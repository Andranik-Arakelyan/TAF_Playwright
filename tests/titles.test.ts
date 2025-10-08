import { expect } from '@playwright/test';
import { test } from '@Test';

test.describe('Check title of homepage and heading in docs page', () => {
  test('has title', async ({ page, homePage }) => {
    await homePage.open();
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ homePage, docsPage }) => {
    await homePage.open();
    await homePage.HeroBanner.clickLink('Get started');
    await expect(docsPage.getHeadingByName('Installation')).toBeVisible();
  });
});
