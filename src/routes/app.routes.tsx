/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import AppointmentDatePicker from '../screens/AppointmentDatePicker';
import AppointmentCreated from '../screens/AppointmentCreated';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' }
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen
      name="AppointmentDatePicker"
      component={AppointmentDatePicker}
    />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
  </App.Navigator>
);

export default AppRoutes;
