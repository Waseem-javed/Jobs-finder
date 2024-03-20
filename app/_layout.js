import { Stack } from "expo-router";
// import { useCallback } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";
// SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // console.log("layout function", fontsLoaded);

  // const onLayoutRootView = useCallback(async () => {
  //   console.log("hide splash onroot");
  //   if (fontsLoaded) {
  //     console.log("hide splash screem");
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) return <Text>null</Text>;

  // return <Stack onLayoutRootView={onLayoutRootView} />;
  return <Stack />;
};

export default Layout;
