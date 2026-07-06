import {Locator, Page} from '@playwright/test';
import{expect} from "@playwright/test"
import { Basepage } from '../pages/Basepage';



export class LoginPage extends Basepage{
    constructor(page:Page){
         super(page);
    }
    private Myaccount=this.page.getByTitle("My Account");
    private loginlink= this.page.getByRole('link',{name:"Login"});
    private email=this.page.locator("//input[@id='input-email']");
    private password= this.page.locator("//input[@id='input-password']");
    private loginbtn=this.page.locator("//input[@value='Login']");
    private successtxt=this.page.locator("//h2[text()='My Account']");
    private warningtxt=this.page.locator(".alert.alert-danger.alert-dismissible");

    async navigate(){
        await this.launch("https://tutorialsninja.com/demo/");
    }
    async clickaccountAndLogin(){
        await this.click(this.Myaccount);
        await this.click(this.loginlink);
    }

    async enterdatas(email:string,password:string){
        await this.email.fill(email);
        await this.password.fill(password);
    }
    async clickLoginbtn() {
        await this.loginbtn.click();

    }
    async dashboardview(){
       const message= await this.successtxt.textContent();
       await expect(message).toEqual("My Account");
    }
    async Warningmsg(){
     await expect (this.warningtxt).toContainText("Warning");
        
    }



    }

    
    
    

