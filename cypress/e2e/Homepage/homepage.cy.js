import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Homepage from "../../Pages/Homepage/homepage";
import Header from "../../Pages/Header/header"

describe("Test Home Page Functionality and Content", ()=>{

    const visitbaseurl = new BaseUrl();
    const homepage = new Homepage();
    const header = new Header();

    it("Visit Home Page Successfully", ()=>{
        visitbaseurl.visitpage();
    })
    it("Verify the visibility of the header logo", ()=>{
        visitbaseurl.visitpage();
        header.headerlogo();
    })
    it("Check the presence and text of primary navigation menu items", ()=>{
        visitbaseurl.visitpage();
        header.checknavigationmenu();
    })
    it("Check the presence and text of dropdown navigation menu items", ()=>{
        visitbaseurl.visitpage();
        header.checknavigationdropdownexplore();
        header.checknavigationdropdownsupport();
    })
    it("Verify the content and images in the hero section", ()=>{
        visitbaseurl.visitpage();
        homepage.checkHeroSectionContent();
    })

    it("Verify the content and images in the flip card section", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyFlipCardVisibilityAndContent();
    })

    it("Verify the flipcard backend content", ()=>{
        visitbaseurl.visitpage();
        homepage.validateFlipCardBackContent();
    })
    it("Verify the flipcard backend content", ()=>{
        visitbaseurl.visitpage();
        homepage.checkFlipCardNavigationLinks();
    })

    it("Verify Who We Support Sections", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyWhoWeSupportSectionContent();
    })
    it("should verify content of Operators section", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyOperatorsSectionContent();
    })
    it("should verify content of Investor section", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyInvestorsSectionContent();
    })
    it("should verify content of Lenders & Advisors section", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyLendersAndAdvisorsSectionContent();
    })
    it("should verify content of Professional Services section", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyProfessionalServicesSectionContent();
    })
    it("should verify Industry Vendors Section Content", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyIndustryVendorsSectionContent();
    })
    it("should verify National Stakeholders Section Content", ()=>{
        visitbaseurl.visitpage();
        homepage.verifyNationalStakeholdersSectionContent();
    })


    

})