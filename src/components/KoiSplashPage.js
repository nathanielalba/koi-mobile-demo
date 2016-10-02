import React from 'react';
import { View, Text, Image } from 'react-native';

const KoiSplashPage = () => {
  return (
    <Image source={require('../../images/koiBG.jpg')} style={styles.backgroundImageStyle}>
      <Text>
        Hello, this is currently the splash page
      </Text>
    </Image>
  );
};

const styles = {
  backgroundImageStyle: {
    flex: 1
  }
};

export default KoiSplashPage;
