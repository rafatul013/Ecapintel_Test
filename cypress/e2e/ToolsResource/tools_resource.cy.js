import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Header from "../../Pages/Header/header"
import Footer from "../../Pages/Footer/footer";
import ToolsResource from "../../Pages/ToolsResource/toolsresource";

describe("Test Tools and Resource Page", () => {
    const visitbaseurl = new BaseUrl();
    const header = new Header();
    const footer = new Footer();
    const toolsresource = new ToolsResource();

    beforeEach(() => {
        visitbaseurl.visittoolsresourcepage();
    })
    it("Visit Tools and Resource page successfully", () => {
    })
    describe("Navigation Section Test", () => {
        it("Check the presence and text of primary navigation menu items", () => {
            header.checknavigationmenu();
        })
        it("Check the presence and text of dropdown navigation menu items", () => {
            header.checknavigationdropdownexplore();
            header.checknavigationdropdownsupport();
        })
    })
    describe("Header Section Test", () => {
        it("Check the presence of heading text", () => {
            toolsresource.checkHeaderSectionheading();
        })
        it("validate Search Functionality", () => {
            toolsresource.checkHeaderSectionSearch();
        })
    })
    describe("Tools and Resource Section Test", () => {
        it("Validate the Presence of the Section Header and Content", () => {
            toolsresource.validatesectionheaderandcontent();
        })
        it(" Validate the Read More and read less Button Functionality", () => {
            toolsresource.validatereadmorebutton();
        })
        it("Validate the Contact Us Link", () => {
            toolsresource.validatecontactus();
        })
    })
    describe("Intel PRO and Intel UNDERWRITER Section Test", () => {

        it("Validate the Intel Pro button expand by default", () => {
            toolsresource.validateintelproexpanddefault();
        })
        it(" Validate the intel pro feature expand and collapse", () => {
            toolsresource.validatereadmorebutton();
        })
        it(" Validate the total resource from api response maping with UI", () => {
            toolsresource.validatetotalresourcefromapi();
        })
        it(" Validate the intel pro has total 14 item", () => {
            toolsresource.validateintelitemcount();
        })
        it("Validate the first four resource in intel pro section", () => {
            toolsresource.validateFirstFourIntelProCardResources();
        })

        it("Validate the Intel UNDERWRITER button expand", () => {
            toolsresource.validateintelunderwriterbtnexpand();
        })
        it(" Validate the Intel UNDERWRITER total resource", () => {
            toolsresource.validateintelunderwritterresourcecount();
        })
        it("Validate the first resource in Intel UNDERWRITER section", () => {
            toolsresource.validateFirstintelunderwritterCardResources();
        })
    })

    describe("Verify Right Panel section for Tools & Resources links", () => {
        it("Validate Tools & Resources links section is available and total link match with api", () => {
            toolsresource.validateToolsAndResourcesHeader();
        })
        it("Validate first resource in Tools & Resources links section ", () => {
            toolsresource.ValidatefirstresourceToolsResourceslinkssection();
        })
        it("Validate first intelunderwritters  Resources links section ", () => {
            toolsresource.ValidatefirstIntelUnderwriterresource();
        })
    })
})