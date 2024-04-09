import { test, expect } from "@playwright/test";
import DocsIntro from "./docs.intro.pom";
import Homepage from "./homepage.pom";

test.describe("example tests", () => {
  let homepage;
  let intro;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    intro = new DocsIntro(page);

    await homepage.visit();
  });

  test("visited page url is correct", async () => {
    await expect(homepage.page).toHaveURL(homepage.url);
  });

  test("homepage contains button 'Get Started'", async () => {
    await expect(homepage.locatorButton).toBeVisible();
  });

  test("click on 'Get Started' button leads to intro page", async () => {
    await homepage.locatorButton.click();

    await expect.soft(intro.page).toHaveURL(intro.url);
    await expect.soft(intro.locatorHeader).toHaveText("Installation");
  });
});
