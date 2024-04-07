import type { Locator, Page } from "@playwright/test";
import BasePage from "./basepage.pom";

export default class Homepage extends BasePage {
  public readonly url: string;
  public readonly locatorButton: Locator;

  constructor(page: Page) {
    super(page);

    this.url = "/";

    this.locatorButton = this.page.locator("a[class *= 'getStarted']");
  }

  public async visit() {
    return super.visit(this.url);
  }
}
