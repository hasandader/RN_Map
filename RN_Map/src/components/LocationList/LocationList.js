import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';


const LocationList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.locations}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.placeName}
          placeLocation={info.item.location}
          onItemDeleted={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default LocationList;
