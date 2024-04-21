import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ title, containerStyle, handlePress, textStyles, isLoading }) => {
  return (
    <TouchableOpacity disabled={isLoading} activeOpacity={0.7} onPress={handlePress} className={`bg-secondary rounded-xl justify-center items-center min-h-[62px] ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}>
      <Text className={`text-base text-primary font-bold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
