
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";
import MenuDesplegado from "../components/MenuDesplegado";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main Feed"
      drawerStyle={{
        width: 225,
        borderBottomRightRadius: 30,
      }}
      screenOptions={{
        gestureEnabled: false,
      }}
      drawerContent={(props) => <MenuDesplegado {...props} />}
    >
      <Drawer.Screen
        name="Main Feed"
        component={MainStackNavigator}
        options={{}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;