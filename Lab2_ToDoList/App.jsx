/**
 * Lab 2 - To Do List App
 * GitHub Repo: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main/Lab2_ToDoList
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { SafeAreaView } from 'react-native';


export default function App() {
  const initialTasks = [
    {id:1, text: 'Do laundry', completed: false},
    {id:2, text: 'Go to gym', completed: false},
    {id:3, text: 'Walk dog', completed: false},
  ];

  return (
    <SafeAreaView>
      <ToDoList tasks={initialTasks}/>
        <ToDoForm />
    </SafeAreaView>
  );
}


