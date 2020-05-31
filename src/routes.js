import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/login';
import Cadastro from './screens/cadastro';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <AppStack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerTransparent: true, title: '' }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
