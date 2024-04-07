import BasePage from "./basepage.pom";

export default class Homepage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/";

    this.locatorButton = this.page.locator("a[class *= 'getStarted']");
  }

  async visit() {
    return super.visit(this.url);
  }
}
