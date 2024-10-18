import { View, Text } from 'react-native'
import {React,useEffect} from 'react'
import {useNavigation} from 'expo-router'
import {Colors} from './../../../constants/Colors.ts'
import { constants } from 'buffer';
export default function SignIn() {
    const navigation=useNavigation();
useEffect(()=>{

navigation.setOptions({
    headerShown:false
})


},[])
  return (
    <View style={

{
    padding:25,
    paddingTop:80,
    backgroundColor:Colors.WHITE,
    height:'100%'
}


    }>
      <Text style={{
fontFamily:'outfit-bold',
fontSize:30

      }}>Let's Sign You In</Text>
      <Text style={{
fontFamily:'outfit',
fontSize:30,
color:Colors.GRAY,
marginTop:20

      }}>Welcome Back</Text>
     <Text style={{
fontFamily:'outfit',
fontSize:30,
color:Colors.GRAY,
marginTop:20

      }}>You have been missed</Text>
    </View>





  )
}