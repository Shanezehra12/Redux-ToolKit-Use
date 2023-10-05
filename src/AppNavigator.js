import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import Product from './screens/Product';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Product"
          component={Product}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
