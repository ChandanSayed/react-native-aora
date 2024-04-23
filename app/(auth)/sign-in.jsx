import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submit() {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center h-full px-4 w-full my-6 flex-1">
          <Logo />
          <Text className="text-white text-3xl font-pSemibold mt-10">Sign In</Text>
          <FormInput
            handleChangeText={e => setForm({ ...form, email: e })}
            title={"Email"}
            keyboardType="email-address"
            otherStyles={"mt-7"}
            placeholder={"Email"}
          />
          <FormInput
            handleChangeText={e => setForm({ ...form, password: e })}
            title={"Password"}
            otherStyles={"mt-7"}
            placeholder={"Password"}
          />
          <CustomButton
            title="Sign In"
            containerStyle="w-full mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
