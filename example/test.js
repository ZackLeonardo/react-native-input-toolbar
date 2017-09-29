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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Test extends React.Component{
  constructor(props){
    super(props);

    this.onPressActionButton = this.onPressActionButton.bind(this);
    this.renderIcon = this.renderIcon.bind(this);

  }

  renderIcon(){
    return (<Icon name={'edit'} size={24} color={'#b2b2b2'}/>);
  }

  onPressActionButton(){
    console.log('onPressActionButton');
  }

  render(){

    return (
      <View style={styles.container}>
        <InputToolbar
          icon={this.renderIcon}
          onPressActionButton={this.onPressActionButton}
          />
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
