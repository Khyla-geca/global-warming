import React from "react";

import HomeCSS from "./Home.module.css";

// Component

import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className={HomeCSS.homeBackground}>
      <div className={HomeCSS.container}>
        <div className={HomeCSS.content}>
          <h1 className={HomeCSS.title}>care for our earth</h1>
          <div className={HomeCSS.paragraphContainer}>
            <hr className={HomeCSS.line} />
            <p className={HomeCSS.paragraph}>
              Check out the charts about global warming. Different data as:
              Temperature, Co2, Methane, No2, and Polar ice.
            </p>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;