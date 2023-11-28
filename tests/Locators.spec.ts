import { expect, test } from '@playwright/test';

test('locate element', async ({ page }) => {
  await page.goto('https://hotels-food-quality.vercel.app/');
  const locatorLinkSign = page.getByRole('link', { name: 'sign in' });
  await locatorLinkSign.click();
  const currentURL = page.url();
  const expectedURL = 'https://hotels-food-quality.vercel.app/sign-in';

  // Assert that the current URL matches the expected URL
  expect(currentURL).toBe(expectedURL);
});
