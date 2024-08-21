import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Homepage from "../../Pages/Homepage/homepage";
import Header from "../../Pages/Header/header"
import Footer from "../../Pages/Footer/footer";

describe("Test Home Page Functionality and Content", ()=>{

    const visitbaseurl = new BaseUrl();
    const homepage = new Homepage();
    const header = new Header();
    const footer = new Footer();

    beforeEach(() => {
        visitbaseurl.visitpage();
    });

    it("Visit Home Page Successfully", ()=>{
    })
    it("Verify the visibility of the header logo", ()=>{
        header.headerlogo();
    })
    it("Check the presence and text of primary navigation menu items", ()=>{
        header.checknavigationmenu();
    })
    it("Check the presence and text of dropdown navigation menu items", ()=>{
        header.checknavigationdropdownexplore();
        header.checknavigationdropdownsupport();
    })
    it("Verify the content and images in the hero section", ()=>{
        homepage.checkHeroSectionContent();
    })

    it("Verify the content and images in the flip card section", ()=>{
        homepage.verifyFlipCardVisibilityAndContent();
    })

    it("Verify the flipcard backend content", ()=>{
        homepage.validateFlipCardBackContent();
    })
    it("Verify the flipcard Navigation Link", ()=>{
        homepage.checkFlipCardNavigationLinks();
    })

    it("Verify Who We Support Sections", ()=>{
        homepage.verifyWhoWeSupportSectionContent();
    })
    it("should verify content of Operators section", ()=>{
        homepage.verifyOperatorsSectionContent();
    })
    it("should verify content of Investor section", ()=>{
        homepage.verifyInvestorsSectionContent();
    })
    it("should verify content of Lenders & Advisors section", ()=>{
        homepage.verifyLendersAndAdvisorsSectionContent();
    })
    it("should verify content of Professional Services section", ()=>{
        homepage.verifyProfessionalServicesSectionContent();
    })
    it("should verify Industry Vendors Section Content", ()=>{
        homepage.verifyIndustryVendorsSectionContent();
    })
    it("should verify National Stakeholders Section Content", ()=>{
        homepage.verifyNationalStakeholdersSectionContent();
    })

    describe("Test Footer", ()=>{
        //check footer section
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
    

})