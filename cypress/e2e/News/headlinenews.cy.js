import BaseUrl from "../../Pages/BaseUrl/BaseUrl"
import headlineNews from "../../Pages/News/headlinenews";

describe("Check Headline News", () => {

  const baserul = new BaseUrl();
  const headlinenews = new headlineNews();

  beforeEach(() => {
    baserul.visitnewspage();
  });
  it("Ensure the Headline News section is available.", () => {
    headlinenews.checkkheadlinenessection();
  })
  it("Check the Number of News Articles", () => {
    headlinenews.checknumberofarticle();
  })
  it("should display the correct headline news title and image 1", () => {
    headlinenews.checkheadlinenews1();
  });

  it("should display the correct headline news title and image 2", () => {
    headlinenews.checkheadlinenews2();
  });

  it("should display the correct headline news title and image 3", () => {
    headlinenews.checkheadlinenews3();
  });

  it("should display the correct headline news title and image 4", () => {
    headlinenews.checkheadlinenews4();
  });
  describe.only("Check Search and Filter on News Page", () => {
    it("Should type in the search input and submit the form",()=>{
      headlinenews.checksearchbox();
    })
    it("Validate that a proper message or behavior occurs when search is empty",()=>{
      headlinenews.checksearchwithoutinput();
    })
    it('should default to "All States" when the page loads', () => {
      headlinenews.checkdefaultstate();
    })
    it("should have all states listed in the dropdown and select a specific state",()=>{
      headlinenews.checkfilter();
    })
    it("Select the option through api response",()=>{
      headlinenews.checkfilterwithapiresponse();
    })
  })


});
