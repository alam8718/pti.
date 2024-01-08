import {createContext, useContext, useEffect, useState} from "react";

//  importing all the food images
import Cake from "./images/foodImages/Cake.jpg";
import ChickenFry from "./images/foodImages/ChickenFry.jpg";
import FriedRice from "./images/foodImages/FriedRice.jpg";
import GarlicBread from "./images/foodImages/GarlicBread.jpg";
import burger from "./images/foodImages/burger.jpg";
import Pizza from "./images/foodImages/Pizza.jpg";
import Pasta from "./images/foodImages/Pasta.jpg";
import Cappuchino from "./images/foodImages/Cappuchino.jpg";
//  importing all the food images end

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [food, setFood] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const allFood = [
    {
      Id: "1ac400fd-98bd-46ee-b4e8-d2f983f2bbc2",
      Name: "Cake",
      Price: 11,
      ImageUrl: {Cake},
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "38332e95-7f66-45af-829b-c51b3d23caba",
      Name: "Chicken Fry",
      Price: 25,
      ImageUrl: {ChickenFry},
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "39487b87-09e0-4e6c-acfa-6ac907e0742a",
      Name: "Fried Rice",
      Price: 9,
      ImageUrl: {FriedRice},
      IsPopular: true,
      IsRecommended: false,
    },
    {
      Id: "a3ef9e36-c7ee-48c5-99e2-6f966157e116",
      Name: "Garlic Bread",
      Price: 24.75,
      ImageUrl: {GarlicBread},
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "1280cb1b-9115-45c5-babd-601febd462de",
      Name: "Burger",
      Price: 10.99,
      ImageUrl: {burger},
      IsPopular: true,
      IsRecommended: false,
    },
    {
      Id: "14f0a9d0-49f9-4020-a656-e23b7ac59216",
      Name: "Pizza",
      Price: 8.5,
      ImageUrl: {Pizza},
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "f6fdc153-052a-4eab-8b7d-bb1478d2179c",
      Name: "Pasta",
      Price: 3,
      ImageUrl: {Pasta},
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "2b1bca6f-f7d6-4854-86dd-126db70776a2",
      Name: "Cappuchino",
      Price: 3,
      ImageUrl: {Cappuchino},
      IsPopular: true,
      IsRecommended: true,
    },
  ];
  // console.log(allFood);

  //fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();
        if (data.Items.length !== 0) {
          setFood(data.Items);
        } else {
          setFood(allFood);
        }
      } catch (error) {
        console.log(error);
        setFood(allFood);
      }
    };
    fetchData();
    console.log(food);
  }, []);

  // modal functions
  const openModal = () => {
    console.log("open modal clicked");
    console.log(showModal);
    setShowModal(true);
  };
  const closeModal = () => {
    console.log("close modal clicked");
    setShowModal(false);
  };

  //finding popular food items
  useEffect(() => {
    const popularFoodItems = food.filter((item) => item.IsPopular);
    setPopularItems(popularFoodItems);

    const recommendedItems = food.filter((item) => item.IsRecommended);
    setRecommendedItems(recommendedItems);
  }, [food]);

  return (
    <AppContext.Provider
      value={{
        food,
        setFood,
        popularItems,
        recommendedItems,
        showModal,
        openModal,
        closeModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
