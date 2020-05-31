import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Home from './screens/home';
import Room from './screens/room';
import Rooms from './screens/rooms';
import { colors } from './theme';

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
          options={{
            headerTransparent: true,
            title: '',
            headerTintColor: colors.blue,
          }}
        />
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Room"
          component={Room}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Rooms"
          component={Rooms}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
