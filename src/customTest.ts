import { test as base } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { DocsPage } from '@Pages/docspage';

export const test = base.extend<{ homePage: HomePage; docsPage: DocsPage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  docsPage: async ({ page }, use) => {
    const docsPage = new DocsPage(page);
    await use(docsPage);
  },
});
