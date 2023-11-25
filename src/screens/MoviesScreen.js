import React, { useState } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, Text, View, StyleSheet, StatusBar } from 'react-native';
import ListItemMovie from '../components/ListItemMovie';

const MoviesScreen = ({ genres, navigation }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const renderItem = ({ item }) => (
    <ListItemMovie
      id={item.id}
      name={item.name}
      onPress={() => {
        setSelectedGenre(item.id);
        navigation.navigate('Result Movie', { selectedGenre: item.id }); // Pass the genre ID directly
      }}
    />
  );

  console.log(selectedGenre);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={genres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: 'red', height: 2 }} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  selectedItem: {
    flex: 1,
    backgroundColor: 'red',
    color: 'white',
  },
  list: {
    flex: 1,
  },
});

export default MoviesScreen;
