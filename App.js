/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View } from 'react-native';
// import Home from './src/Component/Home/Home';
// import MainTab from './src/AppNavigation';
import firebase from 'firebase';
import Store from './src/Redux/Store'
import { Provider } from 'react-redux';

import AppNavigator from './src/AppNavigation';


export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAkMdpAbnjXskSz5qd3_vI8bN70t8GHAZU",
      authDomain: "authentication-d2c41.firebaseapp.com",
      databaseURL: "https://authentication-d2c41.firebaseio.com",
      projectId: "authentication-d2c41",
      storageBucket: "authentication-d2c41.appspot.com",
      messagingSenderId: "614122123283"
    });
  }


  
  render() {
    return (
      <Provider store={ Store }>
        <AppNavigator />
      </Provider>
    )
  }
}

