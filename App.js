/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {MyHeader, MyButton, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state ={loggedIn: null};

  componentWillMount(){
  firebase.initializeApp({
  apiKey: 'AIzaSyAGD8Y9sxfDphQuiCGzVAyoZhkD8wbeOAk',
  authDomain: 'auth-udemy-19235.firebaseapp.com',
  databaseURL: 'https://auth-udemy-19235.firebaseio.com',
  projectId: 'auth-udemy-19235',
  storageBucket: 'auth-udemy-19235.appspot.com',
  messagingSenderId: '962628993464'
});

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
  });
  }

  renderContent() {
      switch(this.state.loggedIn){
        case true:
          return (<MyButton onPress={() => firebase.auth().signOut()}>
                    LogOut</MyButton>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
