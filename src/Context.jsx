import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [food, setFood] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const data = await response.json();
        if (response.ok) {
          setFood(data.Items);
        } else {
          setFood([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(food);
  }, []);

  //finding popular food items
  useEffect(() => {
    const popularFoodItems = food.filter((item) => item.IsPopular);
    setPopularItems(popularFoodItems);
  }, [food]);
  // console.log("Iam popular", popularItems);

  //finding recommended items
  useEffect(() => {
    const recommendedItems = food.filter((item) => item.IsRecommended);
    setRecommendedItems(recommendedItems);
  }, [food]);
  // console.log("iam remomoc", recommendedItems);

  return (
    <AppContext.Provider value={{popularItems, recommendedItems}}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
