import BaseUrl from "../../Pages/BaseUrl/BaseUrl";

describe("Check The Base Url", ()=>{
    const visitbaseurl = new BaseUrl();

    it("Should Visit Baseurl", ()=>{
        visitbaseurl.visitpage();
    })
})