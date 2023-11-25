import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useGetMovie from '../hooks/useGetMovie';
import { Feather } from '@expo/vector-icons'
import { ActivityIndicator } from 'react-native';

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
        <View>
          <Text style={styles.title}>Random Movie:</Text>
          <Text style={styles.text}>Name: {randomMovie.name}</Text>
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
    justifyContent: 'center',
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