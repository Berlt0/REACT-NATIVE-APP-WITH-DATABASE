import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image ,Button,Alert,TextInput} from 'react-native';
import HomePage from './HomePage';



const Login = () => {
       // We make a navigation variable and assign it to useNavigation Function , sothat we can navigate to different screens
    const navigation = useNavigation();
  return (
 
    <View style={styles.container}>
        <View style={styles.background}>
            <View style={styles.login}>
                <Image source={{uri:'https://thumbs.dreamstime.com/b/cool-lion-logo-design-template-vector-illustration-cool-lion-logo-design-108644216.jpg'}} style={styles.img}/>
                <Text style={styles.greetings}>Log In</Text>
                <TextInput placeholder='Email' style={styles.email}/>
                <TextInput placeholder='Password' style={styles.password}/>
                    {/* if the button is press it will navigate to the home page */}
                <Button title='Login' color='orange' onPress={() => navigation.navigate('Home')}/>
            </View>

                <Text style={styles.forgot}>Forgot Password</Text>
                <Text style={styles.create}>Don't have an account?<View><Text style={{color:'orange'}}> Create</Text></View></Text>
                    
            <View style={styles.logoContainer}>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDY-owrhTOVFZNoVIYNSkqVsuNpmIgquxqw&s'}} style={styles.fb} />
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HMrE7xvKu5-UahOPBs3GcE4AZJk8LsX7tg&s'}} style={styles.google} />
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhrhJEQ383QCvlpQSf660zZnDpxchlHDyLA&s'}} style={styles.linkedin} />
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s'}} style={styles.github} />
            </View>


        </View>
    </View>


  )
}

export default Login


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(213, 237, 159)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width:100,
      height:100,
      borderRadius: 50,
      marginLeft: 50,
      marginBottom: 20
      
  
    },
    greetings:{
      color: 'black',
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center',
    },
    email:{
      width:210,
      height:45,
      borderRadius: 10,
      borderWidth: 1,
      paddingLeft: 10,
      marginBottom: 10,
      backgroundColor:'white'},
    password:{
        width:210,
        height:45,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor:'white',
        
       
    },
    login:{
      flexDirection: 'column',
      gap:0,
      marginBottom: 8
    },
    forgot:{
      textAlign:'center',
      color:'orange',
      fontSize: 15,
      marginTop: 5,
      cursor: 'pointer'
    },
    create:{
      marginBottom: 15,
      textAlign:'center',
      cursor: 'pointer'
  
    },
    background:{
      backgroundColor: 'rgb(0, 113, 45)',
      
      padding:40,
      height:520,
      borderRadius: 20,
      shadowColor: 'rgb(255, 145, 0)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 2,
      shadowRadius: 30,
      elevation: 30,
      
    },
    fb:{
      width:20,
      height:20,
      borderRadius: 20
    },
    google:{
      width:20,
      height:20,
      borderRadius: 40
    },
    linkedin:{
      width:20,
      height:20,
      borderRadius: 40
    },
    github:{
      width:20,
      height:20,
      borderRadius: 40
    },
    logoContainer:{
      flexDirection: 'row',
      gap: 5,
      marginTop: 15,
      justifyContent: 'center',
    },
    span:{
      color:''
    }
    
    // click:{
    //   width:100,
    //   borderRadius: 10,
    //   color: 'red'
    // }
  
  });