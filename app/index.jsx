import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="px-4 w-full min-h-full items-center justify-center flex-1">
          <Logo />
          <Image source={images.cards} className="max-w-sm w-full h-80" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-white text-3xl text-center font-bold">
              Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image source={images.path} className="max-w-[136px] w-full h-4 absolute -right-8 -bottom-2" resizeMode="contain" />
          </View>
          <Text className="font-pRegular text-sm text-gray-100 text-center mt-7">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton
            title="Continue with Email"
            containerStyle="w-full mt-7"
            handlePress={() => {
              router.push('/sign-in');
            }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
