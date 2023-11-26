import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import TeslaS from "../screens/TeslaS";
import Tesla3 from "../screens/Tesla3";
import TeslaX from "../screens/TeslaX";
import TeslaY from "../screens/TeslaY";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="TeslaS" component={TeslaS} />
        <Stack.Screen name="Tesla3" component={Tesla3} />
        <Stack.Screen name="TeslaX" component={TeslaX} />
        <Stack.Screen name="TeslaY" component={TeslaY} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
