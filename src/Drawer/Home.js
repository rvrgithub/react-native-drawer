import React from 'react'
import { View,Text  ,StyleSheet, SafeAreaView} from 'react-native'
import BottomNavigator from '../Bottom/BottomNavigator'
import Headers from '../Components/Headers'


export const Home = () => {
  return (
    <View style={[styles.container,{
      flex:1
    }]}>
        <Text>Home</Text>
        <SafeAreaView>
          <Headers text={"Home"}/>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',

    }
})
