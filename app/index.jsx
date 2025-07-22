import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/favicon.png'
import { Link } from 'expo-router'

const Home  = () => {
  return (
   <View style = {styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style = {styles.title}>Home</Text>
      <Text style = {{marginTop: 10, marginBottom: 30}}>Locul App</Text>
      <Link href = "/about" style = {styles.link}>About Page</Link>
    </View>
  )
}

export default Home

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

/*  card:{
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  },
*/
  img: {
    marginVertical: 20,
  },

  link:{
    marginVertical: 10,
    borderBottomWidth: 1
  }

})