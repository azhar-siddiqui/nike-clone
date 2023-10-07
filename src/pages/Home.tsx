import React from "react";
import HeroBannerSm from "../assets/Home/HeroBannerSm.jpeg";
import HeroBannerMd from "../assets/Home/HeroBannerMd.jpeg";
import HeroBannerLg from "../assets/Home/HeroBannerLg.jpeg";
import ShowCardImgSm from "../assets/Home/show-card-imgSm.jpg";
import ShowCardImgLg from "../assets/Home/show-card-imgLg.jpg";

const Home: React.FC = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] px-5 lg:px-0 mx-auto text-center">
        <img
          src={HeroBannerSm}
          alt="HeroBannerSm"
          className="w-full md:hidden"
        />
        <img
          src={HeroBannerMd}
          alt="HeroBannerMd"
          className="hidden md:block lg:hidden"
        />
        <img
          src={HeroBannerLg}
          alt="HeroBannerLg"
          className="hidden lg:block"
        />
        <h1 className="text-7xl font-extrabold mt-5 uppercase tracking-tighter">
          <a
            href="https://www.nike.com/in/w/basketball-shoes-3glsmzy7ok"
            target="_self"
            data-qa="card-link"
            data-analytics-action-id="e39bde87-3f1d-4fb4-98f6-7c6e17fcf601"
            data-qa-card-id="5b9b3336-6be9-432e-95e9-7d948e51a4a1"
            aria-label="Lebron XXI. <br>Created For <br>You To Rise."
            tabIndex={-1}
          >
            Lebron XXI. <br />
            Created For <br />
            You To Rise.
          </a>
        </h1>
        <p className="mt-5 text-lg font-medium ">
          <a
            href="https://www.nike.com/in/w/basketball-shoes-3glsmzy7ok"
            target="_self"
            data-qa="card-link"
            data-analytics-action-id="e39bde87-3f1d-4fb4-98f6-7c6e17fcf601"
            data-qa-card-id="5b9b3336-6be9-432e-95e9-7d948e51a4a1"
            aria-label="Lebron XXI. <br>Created For <br>You To Rise."
            tabIndex={-1}
          >
            Explode during takeoff and land softly in the LeBron XXI.
          </a>
        </p>

        <button className="px-6 py-2 mt-8 rounded-full bg-black text-white mx-auto font-semibold tracking-tight">
          Shop
        </button>

        <p className="text-left text-2xl tracking-tight mb-8">Featured</p>

        {/* Cards */}

        <a
          href="https://www.nike.com/in/running/shoe-finder"
          target="_self"
          data-qa="card-link"
          data-analytics-action-id="a64b28b0-b425-4755-b8e5-a6363e12990e"
          className="w-full"
          data-qa-card-id="9603030b-54ea-4a21-8032-ef0250321616"
          aria-label=" FIND YOUR PERFECT PAIR"
          tabIndex={-1}
        >
          <img
            src={ShowCardImgSm}
            alt="ShowCardImgSm"
            className="w-full md:hidden"
          />
          <img
            src={ShowCardImgLg}
            alt="ShowCardImgLg"
            className="w-full hidden md:block"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
