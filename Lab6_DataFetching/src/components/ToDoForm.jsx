/**
 * Lab 6 - Data Fetching
 * GitHub: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main
 */

import React, {useState, useEffect, Children} from 'react';
import {TextInput, Button, Text, ScrollView} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  const handleGenerateRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setTaskText(tasks[randomIndex].title);
    }
  };

  return (
    <MainLayout>
      <ScrollView style={{maxHeight: 200}}>
        <Text>Fetched Data:</Text>
        {tasks.map(task => (
          <Text key={task.id} style={{marginVertical: 5}}>
            {task.title}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        placeholder="Add a new task"
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
    </MainLayout>
  );
}

export default ToDoForm;
