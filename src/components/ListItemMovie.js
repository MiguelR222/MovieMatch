import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ id, name, onPress, isSelected, navigation }) => {
  const itemStyle = isSelected ? styles.selectedItem : styles.item;

  
    return (
      <View style={itemStyle}>
        <TouchableOpacity onPress={()=> onPress(id)}>
          <Text style={styles.movieData}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred",
    },
    movieData: {
        color: "white",
        fontSize: 20,
        justifyContent: "space-around",
    }

})

export default ListItem