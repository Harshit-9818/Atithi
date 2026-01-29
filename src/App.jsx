import Download from "./components/Download";
import FeatureSection from "./components/FeatureSection";
import Gold from "./components/Gold";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";
import './index.css'
const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden no-scrollbar">
      <HeroSection />
      <OrderSection />
      <FeatureSection />
      <Gold/>
      <Download />
    </div>
  );
}

export default App;