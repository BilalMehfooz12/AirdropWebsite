import Header from "./Component/Header";
import ConectWallet from "./Screen/ConnectWallet";
import MMITTokken from "./Screen/MMITTokken";
import Task from "./Screen/Task";
import ROADMAP from "./Screen/RoadMap";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(37,36,36)" }}>
      <Header />
      <ConectWallet />
      <MMITTokken />
      <Task />
      <ROADMAP />
      <Footer />
    </div>
  );
}

export default App;
