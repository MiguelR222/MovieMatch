import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from '../screens/MoviesScreen';
import MainScreen from '../screens/MainScreen';
import SeriesScreen from '../screens/SeriesScreen';
import { useMovieGetList } from '../hooks/useMovieGetList';
import { useTVGetList } from '../hooks/useTVGetList';
import ResultScreenSeries from '../screens/ResultScreenSeries'
import ResultScreenMovies from '../screens/ResultScreenMovies'



const Stack = createStackNavigator();

const Stacks = () => {
    const movieGenre = useMovieGetList();
    const TvGenre= useTVGetList();

    return (
            <Stack.Navigator>
                <Stack.Screen name={'Main'} component={MainScreen} />
                <Stack.Screen name={"Movies"}>
                    {(props) => <MoviesScreen {...props} genres={movieGenre} />}
                </Stack.Screen>
                <Stack.Screen name={"Series"}>
                    {(props) => <SeriesScreen {...props} genres={TvGenre} />}
                </Stack.Screen>
                <Stack.Screen name={"Result TV"} component={ResultScreenSeries} />
                <Stack.Screen name={"Result Movie"} component={ResultScreenMovies} />
            </Stack.Navigator>
    );
}

export default Stacks;

