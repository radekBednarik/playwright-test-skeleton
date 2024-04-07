import BasePage from "./basepage.pom";

export default class DocsIntro extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/docs/intro";

    this.locatorHeader = this.page.locator("article header");
  }
}
