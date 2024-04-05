import { test, expect } from "@playwright/test";

test.describe("example tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("visited page url is correct", async ({ page }) => {
    await expect(page).toHaveURL("/");
  });

  test("homepage contains button 'Get Started'", async ({ page }) => {
    await expect(page.locator("a[class *= 'getStarted']")).toBeVisible();
  });

  test("click on 'Get Started' button leads to intro page", async ({
    page,
  }) => {
    await page.locator("a[class *= 'getStarted']").click();

    await expect.soft(page).toHaveURL("/docs/intro");
    await expect
      .soft(page.locator("article header"))
      .toHaveText("Installation");
  });
});
