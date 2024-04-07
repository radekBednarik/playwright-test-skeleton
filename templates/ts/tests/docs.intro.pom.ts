import type { Page, Locator } from "@playwright/test";
import BasePage from "./basepage.pom";

export default class DocsIntro extends BasePage {
  public readonly url: string;
  public readonly locatorHeader: Locator;

  constructor(page: Page) {
    super(page);

    this.url = "/docs/intro";

    this.locatorHeader = this.page.locator("article header");
  }
}
