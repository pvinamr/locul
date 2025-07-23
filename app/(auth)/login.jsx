import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const login = () => {
  return (
    <View style = {styles.container}>

      
      <Text style = {styles.title}>Login to your account</Text>
      <Link href='/register'>
        <Text style = {{ textAlign: 'center'}}> Register Instead </Text>
      
      
      </Link>
    </View>
  )
}

export default login

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
  }
})