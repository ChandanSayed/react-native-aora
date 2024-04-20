import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-4xl">We are here!</Text>
      <StatusBar style="auto" />
      <Link style={{ color: 'blue' }} href="/profile">
        Profile
      </Link>
    </View>
  );
}
