/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from "./app/router/"

var favourites= new Set();

export default class App extends Component {
  render() {
    return (
        <Router screenProps = {{favourites:favourites}} />
    );
  }
}


