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

});
