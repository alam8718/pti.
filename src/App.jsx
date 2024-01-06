import Banner from "./components/Banner/Banner";
import Food from "./components/Food/Food";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Banner />
        <Food />
      </div>
    </>
  );
}

export default App;
