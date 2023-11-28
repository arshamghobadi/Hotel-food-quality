import { test, expect } from '@playwright/test';

test('assertions', async ({ page }) => {
  await page.goto('https://arsham-ghobadi-portfolio.vercel.app/');

  await expect(page).toHaveTitle('Arsham Ghobadi Portfolio');
  const skillsLocator = await page.locator(
    "//button[normalize-space()='Skills']"
  );
  await expect(skillsLocator).toBeVisible();
});
