import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class KoiLocation extends Component {

  onPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <Text>
          This is the location page;
        </Text>
        <TouchableOpacity>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'blue' }}>
            <Text>Go Back!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default KoiLocation;
