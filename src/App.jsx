
import Banner from "./components/Banner/Banner";
import Food from "./components/Food/Food";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Banner />
        <Food />
      </div>
        <Footer />
    </>
  );
}

export default App;
