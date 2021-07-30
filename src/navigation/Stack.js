import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import StackStep from '../components/StackStep';

const Stack = createStackNavigator();

export default props => (
  <Stack.Navigator initialRouteName="ScreenA" screenOptions={{headerShown: true}}>
    <Stack.Screen name="ScreenA" options={{title: 'Initial information'}}>
      {props => (
        <StackStep {...props} moveForward="ScreenB">
          <ScreenA />
        </StackStep>
      )}
    </Stack.Screen>
    <Stack.Screen name="ScreenB">
      {props => (
        <StackStep
          {...props}
          goBack
          moveForward="ScreenC"
          moveForwardParams={{number: 1007}}>
          <ScreenB />
        </StackStep>
      )}
    </Stack.Screen>
    <Stack.Screen name="ScreenC">
      {props => (
        <StackStep {...props} goBack moveForward="ScreenC">
          <ScreenC {...props} />
        </StackStep>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
