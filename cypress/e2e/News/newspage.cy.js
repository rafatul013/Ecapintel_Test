import BaseUrl from "../../Pages/BaseUrl/BaseUrl"
import headlineNews from "../../Pages/News/headlinenews";
import LatestNews from "../../Pages/News/latestnews"
import CategoryNews from "../../Pages/News/categoriesnews";
import TrendingNews from "../../Pages/News/trendingnews";

describe("Check All Content in News Page", () => {
    const visitbaseurl = new BaseUrl();
    const headlinenews = new headlineNews();
    const latestnews = new LatestNews();
    const trendingnews = new TrendingNews();
    const categorynews = new CategoryNews();

    beforeEach(() => {
        visitbaseurl.visitnewspage();
    })

    describe("Check Headline News", () => {

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
    describe("Check Search and Filter on News Page", () => {
        it("Should type in the search input and submit the form", () => {
            headlinenews.checksearchbox();
        })
        it("Validate that a proper message or behavior occurs when search is empty", () => {
            headlinenews.checksearchwithoutinput();
        })
        it('should default to "All States" when the page loads', () => {
            headlinenews.checkdefaultstate();
        })
        it("should have all states listed in the dropdown and select a specific state", () => {
            headlinenews.checkfilter();
        })
        it("Select the option through api response", () => {
            headlinenews.checkfilterwithapiresponse();
        })
    })

    describe("Check Latest News", () => {

        it("Ensure the Latest News section title is displayed correctly.", () => {
            latestnews.checklatestnewstitle();
        })
        it("Check the Number of News Articles", () => {
            latestnews.checknumberofarticle();
        })
        it("Validate the First Latest News Item on the News Section", () => {
            latestnews.checklatestnews1();
        })
        it("Validate the Second Latest News Item on the News Section", () => {
            latestnews.checklatestnews2();
        })
        it("Validate the Third Latest News Item on the News Section", () => {
            latestnews.checklatestnews3();
        })
        it("Validate the Fourth Latest News Item on the News Section", () => {
            latestnews.checklatestnews4();
        })
    })

    describe("Check Trending News Section", () => {
        it("Ensure the Trending News section is available", () => {
            trendingnews.checkapptrendingnewssection();
        })
        it("Ensure the Trending News section title is available", () => {
            trendingnews.checkapptrendingnewstitle();
        })
        it("Ensure the view all button working and clickable", () => {
            trendingnews.checkviewallbutton();
        })
        it("Check the Number of Trending News content in Trending news section", () => {
            trendingnews.checknumberofcontent();
        })
        it("should validate the trending news 1 title, image, and links", () => {
            trendingnews.checktrendingnews1();
        })
        it("should validate the trending news 2 title, image, and links", () => {
            trendingnews.checktrendingnews2();
        })
        it("should validate the trending news 3 title, image, and links", () => {
            trendingnews.checktrendingnews3();
        })
    })
    describe("Check Recommended Section News", () => {
        it("Ensure the Recommended News section is available", () => {
            trendingnews.checkrecommendedNewssection()
        })
        it("Ensure the Recommended News section title is available", () => {
            trendingnews.checkapptrendingnewstitle();
        })
        it("Should validate the Recommended news 1 title and links", () => {
            trendingnews.checkrecommendednews1();
        })
        it("Should validate the Recommended news 2 title and links", () => {
            trendingnews.checkrecommendednews2();
        })
        it("Should validate the Recommended news 3 title and links", () => {
            trendingnews.checkrecommendednews3();
        })
        it("Should validate the Recommended news 4 title and links", () => {
            trendingnews.checkrecommendednews4();
        })
        it("Should validate the Recommended news 5 title and links", () => {
            trendingnews.checkrecommendednews5();
        })
    })

    describe("Check Category News Section", () => {
        it("Ensure the Category News section is available", () => {
            categorynews.checkcategorynewssection();
        })
        it("Check the Number of News content in category news section", () => {
            categorynews.checknumberofcontent();
        })
        it("should validate the Reimbursement category title, image, and links", () => {
            categorynews.validateReimbursementSection();
        })
        it("should validate the Compliance category title, image, and links", () => {
            categorynews.validateComplianceSection();
        })
        it("should validate the Legislation category title, image, and links", () => {
            categorynews.validateLegislationSection();
        })
        it("should validate the Finance category title, image, and links", () => {
            categorynews.validateFinanceSection();
        })
        it("should validate the Fraud category title, image, and links", () => {
            categorynews.validateFraudSection();
        })
    })
})