import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import lock from "./assets/lock-152879 1.png"
import Icon from "react-native-vector-icons/AntDesign"
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}>
      <View style={styles.box1}>
        <Image source={lock}></Image>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text_box2}>FORGET PASSWORD</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text_box3}>Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style={{ flex: 1 , alignItems : 'center', justifyContent : 'center',   flexDirection : 'row' , position : 'relative'} }>
      <Icon name="mail" size={25} color="#fff" style={styles.icon} />
      <TextInput style={styles.textInput} placeholder='Email'  placeholderTextColor="#fff">
        
      </TextInput>
        
      </View>
      <View style={styles.box4}>

        <Button title='NEXT' color={'#E3C000'}>

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
  eclipse:
  {
    width: 140,
    height: 140,
    gap: 0,
    borderWidth: 15,
    borderRadius: 70,
    borderColor: "black",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'

  },
  text_box2: {
    textAlign: 'center',
    fontSize: 25,
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
    color: "black",
    flex: 1,
    marginRight: 30,
    marginLeft: 30
  },
  textInput: {
    fontSize : 18,
    backgroundColor: '#C4C4C4',
    width : 300,
    height : 40,
    paddingHorizontal : 50
  }
});
