import{Page,Locator} from "@playwright/test";
import { Basepage } from "./Basepage";
import {expect} from "@playwright/test";

export class Registerpage extends Basepage{
    constructor(page:Page){
        super(page);
    }
 private myacc=this.page.getByTitle("My Account");
  private register=this.page.getByRole('link',{name:"Register"});
 private fname= this.page.locator("//input[@id='input-firstname']");
  private lname=   this.page.locator("//input[@id='input-lastname']");
private email=this.page.locator("//input[@id='input-email']");
 private phone=  this.page.locator("//input[@id='input-telephone']");
private password= this.page.locator("//input[@id='input-password']");
 private cpassword=  this.page.locator("//input[@id='input-confirm']");
 private terms=   this.page.locator("//input[@name='agree']");
 private continue=   this.page.locator("//input[@value='Continue']");
 private success=(this.page.locator("//h1[text()='Your Account Has Been Created!']"));


 async Launchapplication(){
     console.log("BASE_URL:", process.env.BASE_URL);
    await this.launch(process.env.BASE_URL!);
 }
 async clickmyaccountandRegister(){
    await this.click(this.myacc);
    await this.click(this.register);
 }
 async entervaliddetails(fname:string,lname:string,email:string,phone:string,password:string,cpassword:string){
    await this.fname.fill(fname);
    await this.lname.fill(lname);
     await this.email.fill(email);
      await this.phone.fill(phone);
       await this.password.fill(password);
        await this.cpassword.fill(cpassword);
       
 }
 async clickregister(){
    await this.click(this.terms);
    await this.click(this.continue);
 }
 async getMessage(){
   const message = await this.success.textContent();
    expect(message).toContain("Your Account Has Been Created!");
 }
}
