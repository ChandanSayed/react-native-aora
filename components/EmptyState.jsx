import { View, Text, Image } from "react-native";
import React from "react";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="items-center px-4 justify-center">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode="contain" />
      <Text className="font-pMedium text-sm text-gray-100">{title}</Text>
      <Text className="text-2xl font-pSemibold text-white capitalize">{subtitle}</Text>
      <CustomButton
        title="Create a video"
        handlePress={() => router.push("/create")}
        containerStyle={"w-full my-5"}
      />
    </View>
  );
};

export default EmptyState;
