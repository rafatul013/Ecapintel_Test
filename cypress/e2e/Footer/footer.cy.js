import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Footer from "../../Pages/Footer/footer";

describe("Footer Section Tests", ()=>{

    const visitbaseurl = new BaseUrl();
    const footer = new Footer();

    beforeEach(() => {
        visitbaseurl.visitpage();
    });

    it("Should display correct  links item under eCapIntel section",()=>{
        footer.verifyEcapIntelLinks();
    })

    it("Should display correct links item under Support section",()=>{
        footer.verifySupportLinks();
    })
    it("Verify all the links is working",()=>{
        footer.checkNavigationLinks();
    })

    it("Check newsletter subscription functionality",()=>{
        footer.verifyNewsletterSubscriptionInput();
    })
    it("Should display correct social media links",()=>{
        footer.verifySocialMediaLinks();
    })
    it("Should display the correct copyright information",()=>{
        footer.verifyCopyrightInformation();
    })
    
})
