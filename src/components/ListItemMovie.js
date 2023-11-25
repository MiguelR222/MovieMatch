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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
      backgroundColor: "#3c5898",
        borderRadius:100
    },
    movieData: {
        color: "white",
        fontSize: 20,
        justifyContent: "space-around",
        fontWeight:'bold'
    }

})

export default ListItem