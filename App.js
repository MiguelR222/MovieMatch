import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { useState } from 'react';
import MainScreen from './src/screens/MainScreen';
import { useMovieGetList } from './src/hooks/useMovieGetList';
import MoviesScreen from './src/screens/MoviesScreen';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/components/Tabs'



const App = () => {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}

export default App;

