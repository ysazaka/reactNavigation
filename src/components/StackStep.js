import React from 'react';
import {View, Button} from 'react-native';

export default props => (
  <View style={{flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.goBack ? (
        <Button
          title="Go back"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      ) : (
        false
      )}
      {props.moveForward ? (
        <Button
          title="Move forward"
          onPress={() => {
            props.navigation.navigate(props.moveForward, props.moveForwardParams);
          }}
        />
      ) : (
        false
      )}
    </View>
    <View style={{flex: 1}}>{props.children}</View>
  </View>
);
