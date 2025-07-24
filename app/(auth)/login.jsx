import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

//this is throwing a camel case error. I dont know why -- figure this out
//import ThemedButton from '../../components/ThemedButton'

const login = () => {
  const handleSumbit = () => {
      console.log('login form submitted')
  }
  return (
    <View style = {styles.container}>

      
      <Text style = {styles.title}>Login to your account</Text>
      <Pressable
        onPress = {handleSumbit}
        style = {({pressed}) => [styles.btn, pressed && styles.pressed]}>

        <Text style={{color: '#f2f2f2'}}>Login</Text>

      </Pressable>

      
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


/*<Pressable
        onPress = {handleSumbit}
        style = {({pressed}) => [styles.btn, pressed && styles.pressed]}>

        <Text style={{color: '#f2f2f2'}}>Login</Text>

      </Pressable> */