import BaseUrl from "../../Pages/BaseUrl/BaseUrl"
import LatestNews from "../../Pages/News/latestnews"
import CategoryNews from "../../Pages/News/categoriesnews";
import TrendingNews from "../../Pages/News/trendingnews";

describe("Check Latest News", ()=>{
    const visitbaseurl= new BaseUrl();
    const latestnews = new LatestNews();
    const categorynews = new CategoryNews();
    const trendingnews = new TrendingNews();

    beforeEach(() => {
        visitbaseurl.visitnewspage();
    })

    it("Ensure the Latest News section title is displayed correctly.", ()=>{
        latestnews.checklatestnewstitle();
    })
    it("Check the Number of News Articles",()=>{
        latestnews.checknumberofarticle();
    })
    it("Validate the First Latest News Item on the News Section", ()=>{
        latestnews.checklatestnews1();
    })
    it("Validate the Second Latest News Item on the News Section", ()=>{
        latestnews.checklatestnews2();
    })
    it("Validate the Third Latest News Item on the News Section", ()=>{
        latestnews.checklatestnews3();
    })
    it("Validate the Fourth Latest News Item on the News Section", ()=>{
        latestnews.checklatestnews4();
    })

    describe("Check Category News Section",()=>{
        it("Ensure the Category News section is available", ()=>{
            categorynews.checkcategorynewssection();
        })
        it("Check the Number of News content in category news section", ()=>{
            categorynews.checknumberofcontent();
        })
        it("should validate the Reimbursement category title, image, and links", ()=>{
            categorynews.validateReimbursementSection();
        })
        it("should validate the Compliance category title, image, and links", ()=>{
            categorynews.validateComplianceSection();
        })
        it("should validate the Legislation category title, image, and links", ()=>{
            categorynews.validateLegislationSection();
        })
        it("should validate the Finance category title, image, and links", ()=>{
            categorynews.validateFinanceSection();
        })
        it("should validate the Fraud category title, image, and links", ()=>{
            categorynews.validateFraudSection();
        })
    })

    describe("Check Trending News Section",()=>{
        it("Ensure the Trending News section is available", ()=>{
            trendingnews.checkapptrendingnewssection();
        })
        it("Ensure the Trending News section title is available", ()=>{
            trendingnews.checkapptrendingnewstitle();
        })
        it("Ensure the view all button working and clickable", ()=>{
            trendingnews.checkviewallbutton();
        })
        it("Check the Number of Trending News content in Trending news section", ()=>{
            trendingnews.checknumberofcontent();
        })
        it("should validate the trending news 1 title, image, and links", ()=>{
            trendingnews.checktrendingnews1();
        })
        it("should validate the trending news 2 title, image, and links", ()=>{
            trendingnews.checktrendingnews2();
        })
        it("should validate the trending news 3 title, image, and links", ()=>{
            trendingnews.checktrendingnews3();
        })
    })
    describe.only("Check Recommended Section News",()=>{
        it("Ensure the Recommended News section is available", ()=>{
            trendingnews.checkrecommendedNewssection()
        })
        it("Ensure the Recommended News section title is available", ()=>{
            trendingnews.checkapptrendingnewstitle();
        })
        it("Should validate the Recommended news 1 title and links", ()=>{
            trendingnews.checkrecommendednews1();
        })
        it("Should validate the Recommended news 2 title and links", ()=>{
            trendingnews.checkrecommendednews2();
        })
        it("Should validate the Recommended news 3 title and links", ()=>{
            trendingnews.checkrecommendednews3();
        })
        it("Should validate the Recommended news 4 title and links", ()=>{
            trendingnews.checkrecommendednews4();
        })
        it("Should validate the Recommended news 5 title and links", ()=>{
            trendingnews.checkrecommendednews5();
        })
    })


})