/**
 * Lab 5 - Navigation & Routing
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

export default MainLayout;

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const HomeScreen = () => {
  return <MainLayout>{HomeScreen}</MainLayout>;
};

const AboutScreen = () => {
  return <MainLayout>{AboutScreen}</MainLayout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
