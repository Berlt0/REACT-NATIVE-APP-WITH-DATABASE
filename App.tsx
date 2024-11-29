import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './app_modules/Navigator';
import React from 'react';

export default function App() {
  return (
    
<NavigationContainer>
     {/* We call the Navigator in the Navigator file */}
  <Navigator/>
</NavigationContainer>

  );
}

