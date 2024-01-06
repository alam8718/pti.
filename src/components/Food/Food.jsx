import TopBar from "./TopBar";
import Card from "./Card";
import {useGlobalContext} from "../../Context";

function Food() {
  const {popularItems, recommendedItems} = useGlobalContext();
  return (
    <>
      <div>
        <div className="my-20 container px-6 sm:px-0 mx-auto">
          <div className="mb-4">
            <TopBar first={"Popular"} second={"AddMore"} />
          </div>
          <div className="mb-10 flex overflow-hidden gap-6">
            {popularItems.map((item) => (
              <Card key={item.Id} item={item} />
            ))}
          </div>
        </div>

        <div className="my-10 container px-6 sm:px-0 mx-auto">
          <div className="mb-4">
            <TopBar first={"Recommended"} second={"AddMore"} />
          </div>
          <div className="mb-10 flex overflow-hidden gap-6">
            {recommendedItems.map((item) => (
              <Card key={item.Id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
