import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator
} from 'react-native';

import KoiSplashPage from './components/KoiSplashPage';

const BaseConfig = Navigator.SceneConfigs.FloatFromRight;

const CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8
});

const CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 1,
  gestures: {
    pop: CustomLeftToRightGesture
  }
});


class App extends Component {

  configScene(route) {
    return CustomSceneConfig;
  }

  renderScene(route, navigator) {
    const id = route.id;
    if (id === 'KoiSplashPage') {
      return (
        <KoiSplashPage navigator={navigator} />
      );
    }
    return null;
  }

  render() {
    const routes = [
      { id: 'KoiSplashPage' }
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene}
      />
    );
  }
}

export default App;
