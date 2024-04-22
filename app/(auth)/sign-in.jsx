import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../components/Logo';
import { icons } from '../../constants';

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="justify-center h-full px-4 w-full my-6 flex-1">
          <Logo />
          <Text className="text-white text-3xl font-pSemibold mt-10">Sign In</Text>
          <View className="relative">
            <TextInput placeholder="Email" placeholderTextColor={'#7b7b8b'} className="border-black-200 bg-black-100 border-2 text-white h-16 text-base pl-4 pr-9 focus:border-secondary rounded-2xl" />
            <TouchableOpacity className="absolute right-2 top-5">
              <Image source={icons.eye} className="h-6 w-6" resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
