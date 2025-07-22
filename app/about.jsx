import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>About Page</Text>
      <Link href="/" style = {styles.link}>Back Home</Link>
    </View>
    
  )
}

export default about

const styles = StyleSheet.create({
    container: {
    //defining css properties
    flex: 1, //takes up screen from top to bottom
    alignItems: 'center',
    justifyContent: 'center' //y axis alignment
  },

  title:{
    fontWeight: 'bold',
    fontSize: 18
  },

  link:{
    marginVertical: 10,
    borderBottomWidth: 1
  }
})