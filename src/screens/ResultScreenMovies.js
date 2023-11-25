import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useGetMovie from '../hooks/useGetMovie';

const ResultScreenMovies = ({ route }) => {
  const { moviesList, randomMovie, loading, error } = useGetMovie(route.params.selectedGenre);
  console.log(randomMovie)

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
          <Text style={styles.title}>Random Movie:</Text>
          <Text style={styles.text}>Title: {randomMovie.title}</Text>
          <Text style={styles.text}>Overview: {randomMovie.overview}</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  poster: {
    width: 300,
    height: 400,
    marginTop: 10,
  },
});

export default ResultScreenMovies;