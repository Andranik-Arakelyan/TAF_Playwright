import { expect } from '@playwright/test';
import { test } from '@Test';
import { getRandomElement } from '@Utils/randomElementFromArray';

test.describe('Search Bar', () => {
  test('Check search bar functionality  clicking ', async ({ homePage }) => {
    const searchTextVariants = ['Parallelism', 'Locators', 'Sharding'];
    await test.step('search button opens search modal', async () => {
      await homePage.open();
      await homePage.Header.clickSearchButton();

      expect(homePage.Locators.searchModal).toBeVisible;
    });

    await test.step('filling some text opens doc variant matching that text', async () => {
      await homePage.SearchModal.fillSearchText(
        getRandomElement(searchTextVariants)
      );

      expect(homePage.SearchModal.Locators.searchResult('Parallelism'))
        .toBeVisible;
    });
  });
});
