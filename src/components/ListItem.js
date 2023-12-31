import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ id, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View>
        <Text style={styles.movieData}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
      borderRadius:30,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "indianred",
    },
    movieData: {
      color: "white",
      fontWeight:'bold',
      fontSize: 20,
      justifyContent: "space-around",
    }

})

export default ListItem
