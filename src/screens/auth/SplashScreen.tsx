import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import Animated, { FadeInRight } from "react-native-reanimated"
import{ Image } from "expo-image";
import { NavigationProp, useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();

  useEffect(() => {
    // setTimeout(() => {
    //  navigate("Welcome");
    // }, 2000);
  }, []);


  return (
    <SafeAreaView>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  )
}

export default SplashScreen