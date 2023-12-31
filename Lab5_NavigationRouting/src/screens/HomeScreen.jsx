/**
 * Lab 5 - Navigation & Routing
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React from 'react';
import {Button} from 'react-native';

export default HomeScreen;

function HomeScreen({navigation}) {
  return (
    <Button title="Go to About" onPress={() => navigation.navigate('About')} />
  );
}
