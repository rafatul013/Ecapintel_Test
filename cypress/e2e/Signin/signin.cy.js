import BaseUrl from "../../Pages/BaseUrl/BaseUrl"
import Signin from "../../Pages/Signin/signin"

describe("Check The Login Functionality", ()=>{

    const visitbaseurl = new BaseUrl();
    const signin = new Signin();

    it("Check the Sign In button is disable without Credential", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.checkdisablesigninbutton();
    })
    it("Check the Sign In button is enable with Credential", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.checkenablesigninbutton();
    })
    it("Check the error message for Credential", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.checkenablesigninbutton();
        signin.checkerrormessage();
    })
    it("Check the error message for invalid email format", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.checkerrormessageinvalidemail();
    })
    it.skip("Check user can login with valid credential through fixture", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.loginwithvalidcredfixture();
    })
    it.only("Check user can login with valid credential through env", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.loginwithvalidcredenv();
    })
    it("Check user can login and Logout", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.loginwithvalidcredfixture();
        signin.userlogout();
    })
    
})