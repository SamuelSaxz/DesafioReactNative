// Functions React Native and Expo Router
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_300Light, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

// Theme
import theme from '@/src/theme';

// Store - React Redux
import store from '@/src/store';

// React Redux
import { Provider } from 'react-redux';

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
    <Provider store={store}>
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
            <Stack.Screen name="searchProfile" options={{ title: "Perfil do Usuário" }} />
            <Stack.Screen name="searchRepository" options={{ title: "Repositório do Usuário" }} />
          </Stack>
        }
      </GestureHandlerRootView>
    </Provider>
  );
}

