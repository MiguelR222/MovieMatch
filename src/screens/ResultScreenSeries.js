import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useGetTvSeries from '../hooks/useGetTvSeries';

const ResultScreenSeries = ({ route }) => {
  const { tvSeriesList, randomTvSeries, loading, error } = useGetTvSeries(route.params.selectedGenre);
  console.log(randomTvSeries)

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {randomTvSeries && (
        <View>
          <Text style={styles.title}>Random TV Series:</Text>
          <Text style={styles.text}>Name: {randomTvSeries.name}</Text>
          <Text style={styles.text}>Overview: {randomTvSeries.overview}</Text>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${randomTvSeries.poster_path}` }}
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

export default ResultScreenSeries;