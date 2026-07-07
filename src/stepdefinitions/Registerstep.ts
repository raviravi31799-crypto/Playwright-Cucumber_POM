import{Given,When,Then} from "@cucumber/cucumber";
import { logger } from "../utils/winstonLogger";
 import { CustomWorld } from "../world/world";




Given('the user launched the application', async function (this:CustomWorld) {
  await this.registerpage.Launchapplication();
});

Given('selects Register option', async function (this:CustomWorld) {
  await this.registerpage.clickmyaccountandRegister();
});

Given('the user enters all valid datas', async function (this:CustomWorld,dataTable) {
  const data=dataTable.hashes()[0];
  await this.registerpage.entervaliddetails(
          data.fname,
          data.lname,
          data.email,
          data.phone,
          data.password,
          data.cpassword
  );
  
});

When('the user clicks on register button', async function (this:CustomWorld) {
  await this.registerpage.clickregister();
});

Then('user receives a text marking the successful account creation', async function (this:CustomWorld) {
  await this.registerpage.getMessage();
   
  
});


