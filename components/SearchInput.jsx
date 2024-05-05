import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="relative space-x-4">
      <TextInput
        onChangeText={handleChangeText}
        placeholder={"Search for a video topic"}
        value={value}
        secureTextEntry={title === "Password" && !showPassword}
        placeholderTextColor={"#7b7b8b"}
        className="border-black-200 bg-black-100 border-2 text-white h-16 text-base pl-4 pr-9 focus:border-secondary rounded-2xl font-pRegular"
      />

      <TouchableOpacity
        className="absolute right-3 top-5"
        onPress={() => setShowPassword(prev => !prev)}
      >
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
