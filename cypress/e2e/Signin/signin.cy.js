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
    it("Check user can login with valid credential", () => {
        visitbaseurl.visitpage();
        signin.clicksigninbutton();
        signin.loginwithvalidcred();
    })
    
})