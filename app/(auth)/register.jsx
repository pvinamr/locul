import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const register = () => {
  const handleSumbit = () => {
    console.log('register form submitted')
  }
  return (
    <View style = {styles.container}>

      <Text style = {styles.title}>Register for an Account</Text>

      <Pressable
              onPress = {handleSumbit}
              style = {({pressed}) => [styles.btn, pressed && styles.pressed]}>
      
              <Text style={{color: '#f2f2f2'}}>Register</Text>
      
      </Pressable>


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
  },

  btn:{
    backgroundColor: '#253b32ff',
    padding: 15,
    borderRadius: 15
  },

  pressed:{
    opacity: 0.8
  }
})