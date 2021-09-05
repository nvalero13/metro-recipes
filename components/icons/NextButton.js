import * as React from "react"
import {useContext, useState} from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
import { observer } from "mobx-react";
import { TouchableOpacity } from 'react-native';
import { ModelContext } from "../../model/Surprise";
import { useNavigation } from "@react-navigation/native";


const NextButton = observer(({disablebool, screen}) => {

  const navigation = useNavigation();
  const model = useContext(ModelContext);

 

  return (
    <TouchableOpacity disabled={model.disablebool1} style={ model.disablebool1 ? { position:'absolute', bottom: 50, alignSelf:'center', opacity: 0.4} : {position:'absolute',bottom: 50,alignSelf:'center'}} activeOpacity={0.2} onPress={() => {
      navigation.navigate(screen);
    }}>
    <Svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={28} cy={26} r={24.5} stroke="#fff" strokeWidth={3} />
        <Circle cx={28} cy={26} r={18.436} fill="#fff" />
        <G filter="url(#prefix__filter1_d)">
          <Path
            d="M22.834 33.368c-.772.7-.772 1.834-.026 2.558.387.362.876.532 1.39.532.49 0 .98-.17 1.34-.532l8.987-8.376c.36-.337.566-.796.566-1.279 0-.483-.206-.941-.566-1.28l-8.987-8.375c-.747-.724-1.957-.724-2.73 0-.746.7-.746 1.858.026 2.558l7.596 7.097-7.596 7.097z"
            fill="#E98F41"
          />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
    </TouchableOpacity>
  );
});

export default NextButton;
