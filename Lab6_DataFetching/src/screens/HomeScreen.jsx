/**
 * Lab 6 - Data Fetching
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React, {useState} from 'react';
import {Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do Laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />

      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </MainLayout>
  );
};

export default HomeScreen;
