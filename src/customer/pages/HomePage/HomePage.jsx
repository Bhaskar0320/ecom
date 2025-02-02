import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
// import { mens_kurta } from "../../../Data/Men/mens_kurta";
import { mens_kurta } from "../../../Data/Men/mens_kurta";
import { mensShoesPage1 } from "../../../Data/shoes";
import { lengha_page1 } from "../../../Data/Women/LenghaCholi";
import { sareePage1 } from "../../../Data/Saree/page1";
import { dressPage1 } from "../../../Data/Dress/pgae1";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={dressPage1} sectionName={"Women's Kurta"} />
      </div>
    </div>
  );
};

export default HomePage;
