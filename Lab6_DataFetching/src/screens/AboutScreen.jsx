/**
 * Lab 6 - Data Fetching
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React from 'react';
import {Button, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({navigation}) => {
  return (
    <MainLayout>
      <Text>App Name: To Do List</Text>
      <Text>Developer: Kevin Wong</Text>
      <Text>Current Date: {new Date().toLocaleDateString()}</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
};

export default AboutScreen;
