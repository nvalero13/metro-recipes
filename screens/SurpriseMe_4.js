import React, {useContext, useEffect} from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MenuButton from "../components/icons/MenuButton";
import NextButton from "../components/icons/NextButton";
import PerfilButton from "../components/icons/PerfilButton";
import PlatformLabel from '../components/PlatformLabel';
import ProgressBar from "../components/ProgressBar";
import BackIcon from '../components/icons/BackIcon';
import { ModelContext } from "../model/Surprise";
import styles from "../styles";



export default function SurpriseMe_4({navigation}) {

    const model = useContext(ModelContext);

    useEffect(() => {
      model.setDisable("surprise5")
    }, []);

    return (
        <View style={styles.base}>
      
        <StatusBar style="light" />
        <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.2} onPress={() => {
                navigation.navigate("profile");
              }}>
          <PerfilButton />
          </TouchableOpacity>
          
        </View>
       
        <View style={{alignItems: "center"}}>
        <ProgressBar progress={245}/>
            <Text style={mystyles.subtitle}>...one more question</Text>
            <Text style={mystyles.title}>Select your available platforms</Text>
              
              <ScrollView style={{height: 270, paddingHorizontal: 20, marginTop: 30}}>
                
                <PlatformLabel text="PlayStation" platform={2}/>
                <PlatformLabel text="Xbox" platform={3}/>
                <PlatformLabel text="Nintendo" platform={7}/>
                <PlatformLabel text="Windows" platform={1}/>
                <PlatformLabel text="Linux" platform={6}/>
                <PlatformLabel text="Apple" platform={4}/>
                <PlatformLabel text="Android" platform={8}/>

              </ScrollView>

        </View>
      
            <NextButton screen="surprise5" />
         
        </View>
    )
}

    const mystyles = StyleSheet.create({
        
      title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        width: 340,
        marginTop: 50,
        color: "white",
    },

    subtitle:{
        fontSize: 25,
        fontWeight: "100",
        textAlign: "left",
        width: 340,
        marginTop: 20,
        color: "white",
    },

    })
