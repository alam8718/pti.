import {useGlobalContext} from "../../Context";
import Carousel from "../../Carousel";

function Food() {
  const {popularItems, recommendedItems} = useGlobalContext();

  return (
    <>
      <div>
        <Carousel
          data={popularItems}
          firstText={"Popular"}
          secondText={"AddMore"}
        />
        <Carousel
          data={recommendedItems}
          firstText={"Recommended"}
          secondText={"AddMore"}
        />
      </div>
    </>
  );
}

export default Food;
