import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Header from "../../Pages/Header/header"
import Footer from "../../Pages/Footer/footer";
import Snf from "../../Pages/SNF360/snf360";

describe("Test SNF360 Page", () => {
    const visitbaseurl = new BaseUrl();
    const header = new Header();
    const footer = new Footer();
    const snf = new Snf();

    beforeEach(() => {
        visitbaseurl.visitsnfpage();
    })
    it("Visit SNF360 page successfully", () => {
    })

    describe("Hero Section Test", () => {
        it("should verify the SNF360 section header and sub-header text", () => {
            snf.verifySectionheader();
            snf.verifySubheader();
        })
        it("should verify the presence of the hero image", () => {
            snf.verifyheroimage();
        })
    })
    describe('App Sections Testing', () => {
        it("Should verify the Current Market Assessment section",()=>{
            snf.veifyCurrentMarketAssessment();
        })
        it("Should verify the Trend Assessment section",()=>{
            snf.verifyTrendAssessment();
        })
        it("Should verify the Provider Insights section",()=>{
            snf.verifyProviderInsights();
        })
        it("should verify the National Market Statistics & Trends section",()=>{
            snf.verifyNationalMarketStatistics();
        })
    })
    
})