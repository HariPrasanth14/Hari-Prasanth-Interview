import Banner from "./component/banner";
import Contact from "./component/contact";
import Feedback from "./component/feedback";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Popular from "./component/Popular";
import Vehicles from "./component/vehicles";

const App = () => {
    return (
        <>

        <Navbar />
        <Banner />
        <Vehicles />
        <Popular />
        <Feedback />
        <Contact />
        <Footer />
        </>
    );
};
export default App;
