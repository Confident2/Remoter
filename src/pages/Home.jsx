import React from "react";

import { InfoSection } from "../components";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "../Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <InfoSection {...homeObjectFour} />
    </>
  );
};

export default Home;
