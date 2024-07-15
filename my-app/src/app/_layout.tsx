import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_300Light, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '../theme';
import { Provider } from 'react-redux';
// import { store } from '../store';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    // <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        {fontsLoaded &&
          <Stack screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.black,
            },
            headerTintColor: theme.colors.white,
          }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details" options={{ title: "Detalhes" }} />
          </Stack>
        }
      </GestureHandlerRootView>
    // </Provider>
  );
}

