import BasePage from "./basepage.pom";

export default class Homepage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/";

    this.locatorButton = this.page.getByRole("link", { name: "Get started" });
  }

  async visit() {
    return super.visit(this.url);
  }
}
