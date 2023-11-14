/**
 * Lab 4 - Event Handling & State Lifting
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React, {useState} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {View, Text} from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = task => {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    } else {
      console.log('Task already exists.');
    }
  };

  return (
    <View>
      <ToDoList
        tasks={tasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      />
      <ToDoForm addTask={addTask} />
    </View>
  );
}
