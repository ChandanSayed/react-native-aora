import { View, Text, ScrollView, Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";

import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit() {
    const { email, password } = form;
    if (!password || !email) {
      Alert.alert("Please fill in all the forms!");
    }
    setIsSubmitting(true);
    try {
      const res = await signIn(email, password);

      router.replace("/home");
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="h-full"
        >
          <View className="justify-center h-full flex-1 px-4 w-full my-6">
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
            <View className="justify-center flex-row gap-2 pt-5">
              <Text className="text-lg font-pRegular text-gray-100">Don't have account?</Text>
              <Link href={"/sign-up"} className="text-lg font-pRegular text-secondary">
                Sign Up
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
