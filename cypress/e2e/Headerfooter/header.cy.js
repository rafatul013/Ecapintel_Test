import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Header from "../../Pages/Header/header";

describe(" Test The Header Section", ()=>{
    const visitbaseurl = new BaseUrl();
    const header = new Header();

    it("Check the header Logo", ()=>{
        visitbaseurl.visitpage();
        header.headerlogo();
    })
    it.only("Check All the navigation menu are available and visibale", ()=>{
        visitbaseurl.visitpage();
       header.checknavigationmenu();
    })
    it.only("Check hover navigation menu are available and visibale for explore", ()=>{
        visitbaseurl.visitpage();
        header.checknavigationdropdownexplore();
    })
    it.only("Check All the navigation menu are available and visibale for Support", ()=>{
        visitbaseurl.visitpage();
        header.checknavigationdropdownsupport();
    })
})