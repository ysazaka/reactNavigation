import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => (
  <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.bgColor || '#000'
  }}>
      <Text style={{
          fontSize: 50,
          color: props.textColor || '#FFF'
      }}>
          {props.children}
      </Text>
  </View>
)