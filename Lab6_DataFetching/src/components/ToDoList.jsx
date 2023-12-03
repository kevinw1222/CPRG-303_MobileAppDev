/**
 * Lab 6 - DataFetching
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React from 'react';
import {Text, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function ToDoList({tasks}) {
  return (
    <View>
      <Text>Your Tasks:</Text>
      {tasks.map((task, index) => (
        <Text key={index} className="incomplete">
          {task}
        </Text>
      ))}
    </View>
  );
}

export default ToDoList;
