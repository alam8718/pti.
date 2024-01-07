import {useGlobalContext} from "./Context";
import AddItem from "./components/AddProduct/AddItem";
import Banner from "./components/Banner/Banner";
import Food from "./components/Food/Food";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const {showModal} = useGlobalContext();
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <Banner />
        <Food />
        <div
          className={`${
            showModal
              ? "fixed flex justify-center items-center inset-0"
              : "hidden"
          }`}>
          <AddItem />
        </div>
      </div>
      <Footer />

      {/* <div>
        <AddItem />
      </div> */}
    </>
  );
}

export default App;
