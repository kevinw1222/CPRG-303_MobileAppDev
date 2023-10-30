/**
 * Lab 2 - To Do List App
 * GitHub Repo: https://github.com/kevinw1222/CPRG-303_MobileAppDev/tree/main/Lab2_ToDoList
 * @format
 */

import React from 'react';
import{ScrollView,Pressable,View,Text,StyleSheet}from 'react-native';

export default function ToDoList({tasks}){
    return(
        <ScrollView>
            {tasks.map((task)=>(
                <Pressable key={task.id}>
                    <View style={[styles.task, task.completed && styles.completed]}>
                        <Text style={styles.taskText}>{task.text}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles=StyleSheet.create({
  task:{
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
})
