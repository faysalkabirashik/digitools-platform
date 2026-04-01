import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import ReadyToTransform from "./components/ReadyToTransform";
import Footer from "./components/Footer";


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Banner />
      <Stats />

      <MainSection setCartCount={setCartCount} />
      <Steps />
      <Pricing />
      <ReadyToTransform />
      <Footer />

    </>
  );
}

export default App;