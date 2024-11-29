import React from 'react'
import { View,Text, Button,ScrollView,Image,StyleSheet } from 'react-native';

const HomePage = () => {
    
  return (
    
    
    <ScrollView> 
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.bodyContainer}>
              <Image source={{uri:'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg'}} style={styles.image} />
          </View>

          <Text style={{fontSize:20,display: 'flex',justifyContent: 'center',marginTop: 10,marginBottom: 10}}>Rawr</Text>
          <Text style={{fontSize:15,display: 'flex',justifyContent: 'center',marginTop: 10,marginBottom: 20,marginLeft:15,marginRight:15}}>
              Lorem ipsum odor amet, consectetuer adipiscing elit. 
              Facilisi luctus pharetra quis elit mattis. Elit laoreet ex blandit habitasse felis torquent semper malesuada. 
              Viverra platea suscipit; iaculis dis fringilla vulputate et aptent? Eleifend nullam rhoncus consequat accumsan ipsum suscipit enim consectetur.
              Iaculis lacus justo senectus commodo elit sodales. Tristique integer feugiat ultrices diam natoque vivamus nam. Potenti ullamcorper purus mi elit, elit non tempus.     
          </Text>
        </View>
      </View>
    </ScrollView>  

  )
}

export default HomePage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(213, 237, 159)',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  bodyContainer:{
      position: 'relative',
      left: 50,
      marginTop: 50
          
  },
  textstyle:{
      color: 'black',
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center'
  },
  textApp:{
      color:'black',
      fontSize: 25,
      fontFamily: 'Times New Roman',
      padding: 10
  },
  background:{
      width:300,
      height:593,
      borderRadius: 20,
      
  },
  image: {
    width: 180, 
    height: 180,
    marginLeft: 10,
    borderRadius: 200,
  }
});

