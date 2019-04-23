import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addPlaces } from '../../store/actions/index';
import PickLocation from '../../components/PickLocation/PickLocation';

class Map extends Component {

  state = {
    placeName: "",
    controls: {
      location: {
        value: null,
        valid: false
      }
    }
  };

  placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        ...prevState,
        placeName: val
      };
    });
  };

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  locationAddedHandler = () => {
    this.props.onAddLocation(
      this.state.placeName,
      this.state.controls.location.value
    );
    this.props.navigator.push({
      screen: "pick-places.PlacesScreen",
      title: "Places"
    });
  };

  render() {

    return (
        <View style={styles.container}>
          <PickLocation onLocationPick={this.locationPickedHandler} />
            <View style={styles.button}>
              <TextInput
                placeholder="Type a Place Name"
                value={this.state.placeName}
                onChangeText={this.placeNameChangedHandler}
                style={styles.placeInput}
              />
            <Button title="Save Location" onPress={this.locationAddedHandler} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  placeInput: {
    width: "70%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddLocation: (placeName, location) =>
      dispatch(addPlaces(placeName, location))
  };
};

export default connect(null, mapDispatchToProps)(Map);
