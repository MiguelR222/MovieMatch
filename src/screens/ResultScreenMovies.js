import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useGetMovie from '../hooks/useGetMovie';

const ResultScreenMovies = ({ route }) => {
  const { moviesList, randomMovie, loading, error } = useGetMovie(route.params.selectedGenre);

  if (loading) {
    return <ActivityIndicator size={'large'} color={'blue'} />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {randomMovie && (
        <View style={styles.container}>
          <Text style={styles.title}>Title: {randomMovie.title}</Text>
          {randomMovie.overview && (
            <Text style={styles.text}>Overview: {randomMovie.overview}</Text>
          )}
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}` }}
            style={styles.poster}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 20, 
  },
  title: {
    alignSelf:'center',
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#007BFF', 
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 20, 
    fontFamily: 'Verdana',
  },
  text: {
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 10, 
    width:340,
    fontFamily: 'Arial', 
  },
  poster: {
    width: 300,
    height: 400,
    marginTop: 20, 
    alignSelf: 'center',
  },
});

export default ResultScreenMovies;