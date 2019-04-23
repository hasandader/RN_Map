import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = props => (
    <View style={styles.listItem}>
      <MapView
            initialRegion={{
              ...props.placeLocation,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
            style={styles.map}
          >
            <MapView.Marker coordinate={props.placeLocation} />
      </MapView>
      <View style={styles.contain}>
        <View style={{width: "70%"}}><Text style={styles.text}>{props.placeName}</Text></View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.trash}>
              <Icon size={25} name="ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
      </View>
    </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "95%",
    marginBottom: 7,
    marginLeft: 10,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#aaa"
  },
  contain: {
    flexDirection: "row"
  },
  map: {
    width: "80%",
    height: 160
  },
  text: {
    paddingTop: 5,
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  trash: {
    alignItems: "center",
    paddingTop: 5
  }
});

export default ListItem;
