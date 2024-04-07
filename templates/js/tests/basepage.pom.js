export default class BasePage {

  constructor(page) {
    this.page = page;
  }

  async visit(url) {
    return await this.page.goto(url);
  }
}
