class GooglePage {
  /**
   * @param {import('playwright').Page} page 
   */
  constructor(page) {
    this.page = page;

    // input elements
    this.searchBox = page.getByRole('combobox', { name: 'Search' });
    this.moreResult = page.getByRole('button', { name: 'More results' });
    this.noThanksButton = page.getByRole('button', { name: 'No thanks' });
  }

  /**
   * This function triggers the navigation to google.com
   */
  async navigate() {
    await this.page.goto('https://www.google.com/');
  }

  /**
   * This function accepts a query parameter that would be searched on google
   * @param {string} query 
   */
  async search(query) {
    await this.searchBox.click();
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
  }
}

// we're exporting the POM (Page Object Model) so it can be used outside of this page
module.exports = GooglePage;