/**
 * Lab 5 - Navigation & Routing
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React, {useState} from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const Stack = createStackNavigator();

  const addTask = task => {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    } else {
      console.log('Task already exists.');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>

      <ToDoList
        tasks={tasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      />
      <ToDoForm addTask={addTask} />
    </NavigationContainer>
  );
}
