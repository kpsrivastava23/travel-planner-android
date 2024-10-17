import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  });
  
  return (
    //for all screens
    // <Stack screenOptions={{headerShown:false}}>
    //   <Stack.Screen name="index" />
    // </Stack>
    //for this particular screen we can write inside tag
    <Stack >
      <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
  );
}
