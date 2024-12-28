import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedBtn } from '@/components/ThemedButton';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", }}>
      <ThemedText type='title' darkColor='dark' style={{ textAlign: "center" }}>Welcom to the App</ThemedText>
      <ThemedBtn txt='Click for Continue' my={20} />
      <ThemedBtn txt='Click for Continue' my={20} />
      <ThemedBtn txt='Click for Continue' my={20} />
      <ThemedBtn txt='Click for Continue' my={20} />


    </View>
  );
}
