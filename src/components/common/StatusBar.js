import React from 'react';
import { View, Platform, StatusBar } from 'react-native';

const KoiStatusBar = ({ backgroundColor }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar backgroundColor={backgroundColor} barStyle='light-content' />
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = {
  statusBar: {
    height: STATUSBAR_HEIGHT,
    flex: 1
  }
};

export default KoiStatusBar;
