import { Image } from "react-native";
import React from "react";

import { images } from "../constants";

const Logo = () => {
  return (
    <>
      <Image className="max-w-[115px] w-full h-[34px]" resizeMode="contain" source={images.logo} />
    </>
  );
};

export default Logo;
