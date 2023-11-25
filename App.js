import React from 'react';
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

