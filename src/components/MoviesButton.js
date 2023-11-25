import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native"; 
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MoviesButton = ({navigation}) => {
    const { movieButtonStyle, textButtonStyle } = styles
    const handlePress = () => {
        navigation.navigate('Movies');
    };

    return (
        <TouchableOpacity style= {movieButtonStyle} onPress={handlePress}>
            <Text style= {textButtonStyle}>Movies</Text>
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

export default MoviesButton
