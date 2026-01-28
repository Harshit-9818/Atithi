import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";
import Snowfall from "react-snowfall";
const App = () => {
  return (
    <div className="relative w-screen h-full">
      <Snowfall color="#82C3D9"/>
      <HeroSection />
      <OrderSection />
      <FeatureSection />
    </div>
  );
}

export default App;