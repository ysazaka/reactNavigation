import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ScreenA from './views/ScreenA';
import ScreenB from './views/ScreenB';
import ScreenC from './views/ScreenC';


export default props => {
  <SafeAreaView style={styles.content}>
    <ScreenA />
    <ScreenB />
    <ScreenC />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
