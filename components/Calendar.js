import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Calendar({ date }) {
    const day = date.substr(8,2);
    const month = date.substr(5,2);

    
    

        let monthtext ='';

        switch (month) {
            case "01":
                monthtext = "JAN";
                break;

            case "02":
                monthtext = "FEB";
                break;

            case "03":
                monthtext = "MAR";
                break;

            case "04":
                monthtext = "APR";
                break;

            case "05":
                monthtext = "MAY";
                break;

            case "06":
                monthtext = "JUN";
                break;

            case "07":
                monthtext = "JUL";
                break;

            case "08":
                monthtext = "AUG";
                break;

            case "09":
                monthtext = "SEP";
                break;

            case "10":
                monthtext = "OCT";
                break;

            case "11":
                monthtext = "NOV";
                break;

            case "12":
                monthtext = "DEC";
                break;
        }

    return (

        <View style={styles.general}>

            <View style={styles.base}>
                <View style={styles.header}>
                </View>

                <Text style={styles.day}>{day}</Text>
                <Text style={styles.month}>{monthtext}</Text>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#DE8537',
        height: 5,
        width: 26,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,


    },

    base: {
        backgroundColor: 'white',
        height: 26,
        width: 26,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },

    month: {
        bottom: 2,
        color: "#656565",
        fontSize: 6,
        fontWeight: '200',

    },

    day: {
        
        color: "#656565",
        fontSize: 9,
        fontWeight: 'bold',

    },

    





});

