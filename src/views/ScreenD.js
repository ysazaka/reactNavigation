import React from 'react';
import CentralText from '../components/CentralText';
import {View, Button} from 'react-native';

export default props => (
  <View style={{flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Button
        title="Open"
        onPress={() => {
          props.navigation.openDrawer();
          setTimeout(() => {
            props.navigation.closeDrawer();
            setInterval(() => {
              props.navigation.toggleDrawer();
            }, 1000);
          }, 3000);
        }}
      />
    </View>
    <View style={{flex: 1}}>
      <CentralText bgColor="#33FA72" textColor="#000">
        Screen D
      </CentralText>
    </View>
  </View>
);
