import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper, LazyMount } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <LazyMount className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </LazyMount>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");