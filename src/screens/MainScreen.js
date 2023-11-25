import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground} from "react-native";
import MoviesButton from "../components/MoviesButton";
import SeriesButton from "../components/SeriesButton";




const MainScreen = ({navigation}) => {
    const { container, imageLayout, buttonsContainer, bStyle, textContainer, textStyles } = styles  
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/ticket.jpg')} style={imageLayout}>
                <View style= {textContainer}>
                    <Text style= {textStyles}>Start Randomizing!</Text>
                </View>
                    <View style={buttonsContainer}>
                    <View style={bStyle}>
                    <MoviesButton  navigation={navigation}/>
                    </View>
                    <View style={bStyle}>
                        <SeriesButton navigation={navigation} />
                    </View>
                    </View>
            </ImageBackground>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    imageLayout: {
        flex: 1,
        width:'100%'
    },
    buttonsContainer: {
        alignItems: 'center', 
        marginTop: 350
    },
    bStyle: {
        marginTop: 10,
        maxWidth: '100%',
        flexDirection: "row",
    },
    textStyles: {
        fontSize: 50,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        color: 'whitesmoke'
    }
});

export default MainScreen