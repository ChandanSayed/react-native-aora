import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { register } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function submit() {
    register();
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center h-full px-4 w-full my-6 flex-1">
          <Logo />
          <Text className="text-white text-3xl font-pSemibold mt-10">Sign Up</Text>
          <FormInput
            handleChangeText={e => setForm({ ...form, username: e })}
            title={"Username"}
            otherStyles={"mt-7"}
            placeholder={"Username"}
            value={form.username}
          />
          <FormInput
            handleChangeText={e => setForm({ ...form, email: e })}
            title={"Email"}
            keyboardType="email-address"
            otherStyles={"mt-7"}
            placeholder={"Email"}
            value={form.email}
          />
          <FormInput
            handleChangeText={e => setForm({ ...form, password: e })}
            title={"Password"}
            otherStyles={"mt-7"}
            placeholder={"Password"}
            value={form.password}
          />
          <CustomButton
            title="Sign Up"
            containerStyle="w-full mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-lg font-pRegular text-gray-100">Have an account?</Text>
            <Link href={"/sign-in"} className="text-lg font-pRegular text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
