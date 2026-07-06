import { logger } from './../utils/winstonLogger';
import{Before,After,BeforeAll,AfterAll} from "@cucumber/cucumber";
import {Browser, chromium} from "@playwright/test";
import{CustomWorld} from "../world/world";
import {LoginPage} from "../pages/Loginpage";



 let browser:Browser;
BeforeAll(async()=>{
    logger.info("Launching browser");
    browser=await chromium.launch({headless:false},{timeout:50000});

});
Before(async function(this:CustomWorld,scenario){
    logger.info(`Starting scenario:${scenario.pickle.name}`);
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    this.loginPage=new LoginPage(this.page);
   

});
After(async function(this:CustomWorld,scenario){
    if(scenario.result?.status==="FAILED"){
        const path=`reports/screenshots/${Date.now()}.png`;
        await this.page.screenshot({path});
        logger.error(`Screenshot FAILED:${scenario.pickle.name}`);
        logger.error(`Screenshot saved:${path}`);
    }
    else{
        logger.info(`Scenario PASSED:${scenario.pickle.name}`);
    }
    await this.page.close();
    await this.context.close();
});
AfterAll(async()=>{
    logger.info("closing browser");
    await browser.close();
});
