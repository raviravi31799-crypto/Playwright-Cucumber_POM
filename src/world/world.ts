import{Browser,BrowserContext,Page} from "@playwright/test";
import{LoginPage} from "../pages/Loginpage";


export class CustomWorld{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;


    loginPage!:LoginPage;
   // registerPage!:Registerpage;

   
}