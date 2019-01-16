import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreens';

const AppMainNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  })
 

class AppNavigator extends Component {
  render() {
    const nav = reduxifyNavigator({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    return <AppMainNav navigation={nav} />
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router

