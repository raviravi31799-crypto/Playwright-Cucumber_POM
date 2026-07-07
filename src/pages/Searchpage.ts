import {Page} from "@playwright/test";
import {expect} from "@playwright/test";
import { Basepage } from "./Basepage";
import { LoginPage } from "./Loginpage";


export class Searchpage extends Basepage{
    constructor(page:Page){
        super(page);
    
    }

    private searchbar=this.page.getByPlaceholder("Search");
    private searchbtn=this.page.locator("//span[@class='input-group-btn']");
    private product=this.page.locator("//h4[child::a]");
   
    private cartbtn=this.page.locator("//div[@class='button-group']/button[1]").first();
    private text=this.page.locator(".alert.alert-success.alert-dismissible");


    async launchurl(){
       await this.launch("https://tutorialsninja.com/demo/");
    }
    async search(keyword:string){
        await this.searchbar.fill(keyword);
    }
    async clicksearch(){
        await this.click(this.searchbtn);
    }
    async verifyproduct(){
        await expect(this.product.first()).toBeVisible()
    }
    async addtocart(){
        await this.click(this.cartbtn);
    }
    async getSuccesstxt(message:string){
       return await this.text.textContent();
      
    }
}

   
    
