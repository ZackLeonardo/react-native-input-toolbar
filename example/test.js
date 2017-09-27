import React, { Component } from 'react';
import {
  Text,
  View,
  ViewPropTypes,
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import InputToolbar from '@zdy/react-native-input-toolbar';

export default class Test extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return (
      <View style={styles.container}>
        <InputToolbar/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 60,
    flex:1,
  },


});
