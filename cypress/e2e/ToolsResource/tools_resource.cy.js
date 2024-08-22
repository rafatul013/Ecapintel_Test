import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Header from "../../Pages/Header/header"
import Footer from "../../Pages/Footer/footer";

describe("Test Tools and Resource Page", ()=>{
    const visitbaseurl = new BaseUrl();
    const header = new Header();
    const footer = new Footer();

    beforeEach(() => {
        visitbaseurl.visittoolsresourcepage();
    })
    it("Visit Tools and Resource page successfully", () => {
    })
    describe("Header and Navigation Section Test", () => {
        it("Check the presence and text of primary navigation menu items", ()=>{
            header.checknavigationmenu();
        })
        it("Check the presence and text of dropdown navigation menu items", ()=>{
            header.checknavigationdropdownexplore();
            header.checknavigationdropdownsupport();
        })
    })

})