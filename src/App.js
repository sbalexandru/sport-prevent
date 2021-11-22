import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/pages/About";
import WelcomeScreen from "./components/pages/Home";
import ProgramsSection from "./components/pages/Programs";
import OpinionSection from "./components/pages/Opinion";
import SponsorSection from "./components/pages/Sponsor";
import { Route, Routes } from "react-router-dom";
import ChidEvents from "./components/pages/ChildEvents";
import HeaderImg from "./components/header/HeaderImg";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <WelcomeScreen />
              <About />
              <ProgramsSection />
              <OpinionSection />
              <SponsorSection />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/ChildEvents"
          element={
            <>
              <HeaderImg />
              <ChidEvents />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
