import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import Library from "../screens/Library";
import Game from "../screens/Game";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import List from "../screens/List";
import SurpriseMe_1 from "../screens/SupriseMe_1";
import SurpriseMe_2 from "../screens/SurpriseMe_2";
import SurpriseMe_3 from "../screens/SurpriseMe_3";
import SurpriseMe_4 from "../screens/SurpriseMe_4";
import SurpriseMe_5 from "../screens/SurpriseMe_5";
import SurpriseMe_6 from "../screens/SurpriseMe_6";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="library" component={Library} />
      <Stack.Screen name="game" component={Game} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="list" component={List} />
      <Stack.Screen name="surprise1" component={SurpriseMe_1} />
      <Stack.Screen name="surprise2" component={SurpriseMe_2} />
      <Stack.Screen name="surprise3" component={SurpriseMe_3} />
      <Stack.Screen name="surprise4" component={SurpriseMe_4} />
      <Stack.Screen name="surprise5" component={SurpriseMe_5} />
      <Stack.Screen name="surprise6" component={SurpriseMe_6} />

    </Stack.Navigator>
  );
};

export { MainStackNavigator };