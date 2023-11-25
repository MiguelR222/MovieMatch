import React from "react";
import { Text, StyleSheet } from "react-native"; 
import { TouchableOpacity } from "react-native";

const SeriesButton = ({ navigation }) => {
    const { movieButtonStyle, textButtonStyle } = styles
    const handlePress = () => {
        navigation.navigate('Series');
    };
    return (
        <TouchableOpacity style= {movieButtonStyle} onPress={handlePress}>
            <Text style= {textButtonStyle}>Series</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    movieButtonStyle: {
        width: 250,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'darkred',
        justifyContent: "center",
        alignItems: "center",
    },
    textButtonStyle: {
        fontSize:20,
        color:'white'
    },
})

export default SeriesButton
