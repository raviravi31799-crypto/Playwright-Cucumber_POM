
import {Page,Locator} from "@playwright/test";
import {logger} from "../utils/winstonLogger"; 

export class Basepage{
    constructor(protected page:Page){}

    async click(locator:Locator){
        await locator.click();
        
    }
    async fill(locator:Locator,value:string){
        await locator.fill(value);
    }
   async launch(url:string){
    await this.page.goto(url);
   }
}