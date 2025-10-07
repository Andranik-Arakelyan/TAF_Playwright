import { test } from '@Test';
import { devices, expect } from '@playwright/test';

test.use({
  ...devices['iPhone 12'],
});

test.describe('Hamburger menu via mobile', () => {
  test('check open/close hamburger menu', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.Locators.sideBar).toBeHidden();

    await homePage.Header.clickToggleHamburgerButton();
    await expect(homePage.Locators.sideBar).toBeVisible();

    await homePage.MobileSidebar.clickCloseSidebar();
    await expect(homePage.Locators.sideBar).toBeHidden();
  });
});
