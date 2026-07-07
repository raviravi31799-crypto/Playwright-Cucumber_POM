

 import{Given,When,Then} from "@cucumber/cucumber";
  import { logger } from "../utils/winstonLogger";
 import { CustomWorld } from "../world/world";

Given('the user launched to the homepage of the application', async function (this:CustomWorld) {
    await this.searchpage.launchurl();
});

Given('the user enters the valid {string}', async function (keyword) {
   await this.searchpage.search(keyword)
});

When('clicks on search button', async function (this:CustomWorld) {
  await this.searchpage.clicksearch();
});

When('the products related to search are displayed', async function (this:CustomWorld) {
  await this.searchpage.verifyproduct();
});

When('the user clicks on Addtocart to a product', async function (this:CustomWorld) {
    await this.searchpage.addtocart();
});

Then('the success {string} is displayed intimating product is added to cart', async function (message) {
  await this.searchpage.getSuccesstxt(message);
});

