import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/pages/About";
import WelcomeScreen from "./components/pages/Home";
import ProgramsSection from "./components/pages/Programs";
import OpinionSection from "./components/pages/Opinion";
import SponsorSection from "./components/pages/Sponsor";

function App() {
  return (
    <>
      <Header />
      <WelcomeScreen />
      <About />
      <ProgramsSection />
      <OpinionSection />
      <SponsorSection />
      <Footer />
    </>
  );
}

export default App;
