import { test } from '@Test';
import { LanguagesType } from '@Components/shared/header';
import { expect } from '@playwright/test';

test.describe('Programming language switch', () => {
  test('should switch between programming languages', async ({ homePage }) => {
    const languages: LanguagesType[] = ['Python', 'Java', '.NET'];
    await homePage.open();
    for (const language of languages) {
      await homePage.Header.switchLanguage(language);
      await expect(homePage.Locators.header.locator('b')).toHaveText(
        `Playwright for ${language}`
      );
    }
  });
});
