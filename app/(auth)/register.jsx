import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const register = () => {
  return (
    <View style = {styles.container}>

      <Text style = {styles.title}>Register for an Account</Text>
      <Link href='/login'>
        <Text style = {{ textAlign: 'center'}}> Login Instead </Text>
      
      
      </Link>
    </View>
  )
}

export default register

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