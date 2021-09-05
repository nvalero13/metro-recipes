import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    height: 50,
    marginRight: 20,
    marginLeft: 15,
    backgroundColor: "transparent",
    marginBottom: 5,
    marginTop: 5,
    justifyContent: "space-between",
  },

  burguer: {
    width: 37,
    height: 29,
  },

  profile: {
    width: 34,
    height: 34,
  },

  base: {
    backgroundColor: "#232B3A",
    flex: 1,
    paddingTop: 40,
    flexDirection: "column",
  },

  category: {
    marginTop: 30, 
  },

  row1: {
    flexDirection: "row",
    
  },

  subtitle1: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginBottom: 20,

  },

  game: {

    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: "#bababa",
    opacity: 0.6,
    width: 118,
    height: 132,
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 3,
    elevation: 10,
  },

  game2: {
 
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: "#bababa",
    opacity: 0.6,
    width: 240,
    height: 141,
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 3,
    elevation: 10,
  },

  game3: {
    
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: "#695DB5",
    width: 300,
    height: 192,
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 3,
    elevation: 10,
  },
  
  title: {
    paddingLeft: 20,
    fontFamily: "Roboto",
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },

  titlename: {
    lineHeight: 36,
    paddingLeft: 20,
    fontFamily: "Roboto",
    color: "white",
    fontSize: 35,
    fontWeight: "700",
  },
});

export default styles;
