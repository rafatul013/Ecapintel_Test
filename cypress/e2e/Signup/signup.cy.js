import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Signup from "../../Pages/Signup/signup";

describe("Check Sign Up", ()=>{
    const visitbaseurl = new BaseUrl();
    const signup = new Signup();

    it("Check the Sign Up button is disable without Credential", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checksignupbuttondisable();
    })
    it("Check the all the field are visible and active", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkAllFieldsVisibleAndActive();
    })
    it("Check the all the field are typeable", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkAllFieldsTypeable();
    })
    it("Check the error message for required field", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkRequiredFieldErrorMessages();
    })
    it("Check for invalid email format error", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkInvalidEmailFormatError();
    })
    it("Check for password strength error", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkPasswordStrengthError();
    })
    it("Check for password mismatch error", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkPasswordMismatchError();
    })
    it("Check for valid subscription code error", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkValidsubScriptionError();
    })
    it("Check the validation for duplicate email", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkduplicateemail();
    })
    it.skip("Check for successful form submission", ()=>{
        visitbaseurl.visitpage();
        signup.clicksignupbutton();
        signup.checkSuccessfulFormSubmission();
    })
})