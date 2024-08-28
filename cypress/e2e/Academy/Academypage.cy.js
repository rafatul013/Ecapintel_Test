import BaseUrl from "../../Pages/BaseUrl/BaseUrl";
import Header from "../../Pages/Header/header"
import Footer from "../../Pages/Footer/footer";
import Academy from "../../Pages/Academy/academy";

describe("Test Tools and Resource Page", () => {
    const visitbaseurl = new BaseUrl();
    const header = new Header();
    const footer = new Footer();
    const academy = new Academy()

    beforeEach(() => {
        visitbaseurl.visitacademypage();
        academy.stopredirection();
    })
    it("Visit Tools and Academic page successfully", () => {
    })
})