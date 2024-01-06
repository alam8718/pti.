import React from "react";
import bannerImg from "../../images/Image1.png";
import ShortScreen from "./ShortScreen";
import FullScreen from "./FullScreen";
function Banner() {
  return (
    <>
      <div className="sm:hidden">
        <ShortScreen bannerImg={bannerImg} />
      </div>
      <div className="hidden sm:block">
        <FullScreen bannerImg={bannerImg} />
      </div>
    </>
  );
}

export default Banner;
