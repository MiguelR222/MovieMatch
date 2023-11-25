import React, { useState } from 'react';
import { FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';

const SeriesScreen = ({ genres, navigation }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      name={item.name}
      navigation={navigation}
      onPress={() => {
        setSelectedGenre(item.id);
        navigation.navigate('Result TV', { selectedGenre: item.id }); 
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
    backgroundColor: '#E0F7FA',
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

export default SeriesScreen;
