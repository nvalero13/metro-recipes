import React from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "../styles";
import BackIcon from "../components/icons/BackIcon";
import ResumenImg from "../assets/PerfilResumen.png";
import PlatformsImg from "../assets/PerfilPlatforms.png"


export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.base}>
      <ScrollView vertical>
        <StatusBar style="light" />
        <View style={styles.menu}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 21, marginTop: 10 }}>
          <Text
            style={{
              color: "white",
              marginBottom: 10,
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            Profile
          </Text>
          <Text
            style={{
              color: "#E98F41",
              marginBottom: 5,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            @paufer
          </Text>
          <Text
            style={{
              color: "white",
              marginBottom: 30,
              fontSize: 15,
              fontWeight: "200",
            }}
          >
            Pau Fernández
          </Text>
        </View>
        <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Summary
          </Text>
        <View style={{alignItems:'center'}}>
          <Image style={{resizeMode: 'contain' , width: '80%', height: 380,}} source={ResumenImg}></Image>
        </View>
        <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Platforms
          </Text>
          <View style={{alignItems:'center'}}>
          <Image style={{resizeMode: 'contain' , width: '60%', height: 360,}} source={PlatformsImg}></Image>
        </View>
      </ScrollView>
    </View>
  );
}
