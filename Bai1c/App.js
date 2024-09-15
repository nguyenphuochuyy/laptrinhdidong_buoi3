

import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from "react-native-vector-icons/AntDesign"
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}>
    <View style={styles.box1}>
      <Text style={{fontSize:60,fontWeight : '700'}}>CODE</Text>
    </View>
    <View style={styles.box2}>
      <Text style={styles.text_box2}>VERIFICATION</Text>
    </View>
    <View style={styles.box3}>
      <Text style={styles.text_box3}>Enter ontime password sent on ++849092605798</Text>
    </View>
    <View style = {styles.boxCode}>
      <View style = {styles.boxCodeItem}></View>
      <View style = {styles.boxCodeItem}></View>
      <View style = {styles.boxCodeItem}></View>
      <View style = {styles.boxCodeItem}></View>
      <View style = {styles.boxCodeItem}></View>
      <View style = {styles.boxCodeItem}></View>
    </View>
    <View style={styles.box4}>

      <Button title='VERIFY CODE' color={'#E3C000'}>

      </Button>
    </View>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon : {
    zIndex : 999,
    position : 'absolute',
    top : 55,
    left : 40
  },
  box1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'

  },
  text_box2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  box3: {
    flex: 1,
    alignItems: 'center'
  },
  text_box3: {
    width: 340,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 17.58,
    fontWeight: '700',
    textAlign: 'center'
  },
  box4: {
    justifyContent : 'flex-start',
    color: "black",
    flex: 1,
    marginRight: 30,
    marginLeft: 30
  },
  boxCode : {
    flexDirection : 'row',
    flex : 1 ,
    alignItems : 'flex-start',
    justifyContent : 'center'
  },
  boxCodeItem : {
      width : 50,
      height : 50,
      borderWidth : 1,
      borderColor : "#000000",
  },
  textInput: {
    fontSize : 18,
    backgroundColor: '#C4C4C4',
    width : 300,
    height : 40,
    paddingHorizontal : 50
  }
});