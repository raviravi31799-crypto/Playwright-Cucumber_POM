
import { logger } from "../utils/winstonLogger";
 import{Given,When,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
 import {expect} from "@playwright/test";
 import Logindata from "../../testdata/Logindata.json"


Given('the tutorialsninja application is launched', async function (this:CustomWorld) {
  await this.loginPage.navigate();
  logger.info("Launched the application successfully");
});

Given('the user selects myaccount link and opts Login', async function (this:CustomWorld) {
 await this.loginPage.clickaccountAndLogin();
  logger.info("Opted login")
});

Given('the user enters valid login email and password', async function (this:CustomWorld) {
  await this.loginPage.enterdatas(
      Logindata.valid.email,
      Logindata.valid.password
  );
  logger.info("Entered valid datas");
});

When('the login is clicked', async function (this:CustomWorld) {
 await  this.loginPage.clickLoginbtn();
  logger.info("Clicked on login button");
});

Then('the user is able to view dashboard page', async function (this:CustomWorld) {
   await this.loginPage.dashboardview();
   logger.info("Logged in successfully");
 
});

Given('the user enters invalid login email and password', async function (this:CustomWorld) {
  await this.loginPage.enterdatas(
    Logindata.invalid.email,
    Logindata.invalid.password

  );
  logger.info("Entered invalid datas");
});

Then('the user receives an error message',{timeout:30000} ,async function (this:CustomWorld) {
  await this.loginPage.Warningmsg();
  logger.info("Verified invalid login");
});