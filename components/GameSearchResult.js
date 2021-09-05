import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import SaveButton from './SaveButton'


export default function GameSearchResult({id, title, img, rating, date}) {
	return (

		<View style={styles.general}>
			
	
		<Image style={styles.foto} source={{ uri: img }} />
	
		<View style={styles.titol}>
			<Text numberOfLines={2} style={styles.textitol}>{title}</Text>
			<Text style={styles.textsub}>{date}</Text>
		</View>
		<View style={styles.rating}>
			<Text style={styles.numero}>{rating}</Text>
		</View>
			<View style={{margin: 16}}>
			<SaveButton id={id} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	general: {
		flexDirection: "row", 
		backgroundColor: 'transparent',
		marginHorizontal: 10,
		marginVertical: 10,
	  },
	
	foto: {
		
	  backgroundColor: '#ccc',
	  height: 62,
	  width: 62,
	  borderRadius: 10,


	},

	titol: {
		flexDirection: "column", 
		width: "50%",
		marginLeft: 15,
		marginTop: 15,
  
	},

	  rating: {
		marginLeft: 5, 
		marginTop: 15,
		borderColor: "white",
		borderWidth: 2,
		borderRadius: 5,
	    height: 30,
	    width: 30,
	    borderRadius: 5,
		alignItems: "center", //centre de dreta a esquerra
		justifyContent: "center", // centre de dalt a baix 

  
	  },

	  save: {
		marginTop: 17, 
		marginLeft: 10,
		marginLeft: 15,
		height: 28,
		width: 28,

	  },

	  numero: {
     	color: "white",
		fontSize: 12,

	  },

	  textitol: {
		color: "white",
		fontSize: 15, 
		fontWeight: 'bold',
		
	  }, 

	  textsub: {
		color: "white",
		fontSize: 12, 
	}, 




  });
  