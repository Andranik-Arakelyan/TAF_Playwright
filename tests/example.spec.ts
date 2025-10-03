import { expect } from '@playwright/test';
import { test } from '../src/customTest'

test('has title', async ({ page, homePage }) => {
  await homePage.open();
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, homePage }) => {
  await homePage.open();
  
  await homePage.HeroBanner.clickLink('Get started');

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
