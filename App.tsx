import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import RootNavigation from "@src/components/navigation";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync().catch(console.log);

export default function App() {
  useEffect(() => {
    const load = async () => {
      try {
        await new Promise((res) => {
          setTimeout(async () => {
            res("hey");
          }, 500);
        });
      } finally {
        SplashScreen.hideAsync();
      }
    };

    load();
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
