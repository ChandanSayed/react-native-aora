import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={` space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 font-pMedium text-base">{title}</Text>
      <View className="relative">
        <TextInput
          onChangeText={handleChangeText}
          placeholder={placeholder}
          value={value}
          secureTextEntry={title === "Password" && !showPassword}
          placeholderTextColor={"#7b7b8b"}
          className="border-black-200 bg-black-100 border-2 text-white h-16 text-base pl-4 pr-9 focus:border-secondary rounded-2xl"
        />
        {title === "Password" && (
          <TouchableOpacity
            className="absolute right-2 top-5"
            onPress={() => setShowPassword(prev => !prev)}
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;
