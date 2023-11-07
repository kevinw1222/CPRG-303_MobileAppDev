/**
 * Lab 3 - Props and State Management
 * GitHub Repo: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main/Lab2_ToDoList
 * @format
 */

import React, {useState} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {SafeAreaView} from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}
