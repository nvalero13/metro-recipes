import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/SideMenu";
import { ModalProvider } from "./model/ModalContext";
import { FilteringProvider } from './model/Filtering';
import { SurpriseProvider } from './model/Surprise';
import { FavouritesProvider } from './model/Favourites';

const App = () => {
  return (
    <FavouritesProvider>
    <SurpriseProvider> 
    <FilteringProvider> 
    <ModalProvider>    
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    </ModalProvider>
    </FilteringProvider>
    </SurpriseProvider>
    </FavouritesProvider>
  );
};
export default App;
