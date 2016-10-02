import React, { Component } from 'react';
import { Navigator, View } from 'react-native';

import StatusBar from './components/common/StatusBar';
import KoiSplashPage from './components/KoiSplashPage';


class App extends Component {

  renderScene(route, navigator) {
    const id = route.id;
    if (id === 'KoiSplashPage') {
      return (
        <View>
          <StatusBar backgroundColor='#000' />
          <KoiSplashPage navigator={navigator} />
        </View>
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
