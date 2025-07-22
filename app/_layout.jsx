import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//headerShown = false will remove the back button on a page. 
const rootLayout = () => {
  return (
      <Stack screenOptions={{
        headerStyle:{backgroundColor: '#ddd'},
        headerTintColor: '#333',
      }}>
        <Stack.Screen name = "index" options= {{title: 'Home'}} />
        <Stack.Screen name = "about" options= {{title: 'About'}} /> 
      </Stack>
  )
}

export default rootLayout

const styles = StyleSheet.create({})