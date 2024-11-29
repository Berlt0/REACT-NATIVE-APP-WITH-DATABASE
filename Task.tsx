import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { View,Text, Button,Image,ScrollView ,StyleSheet,TouchableOpacity,FlatList,SectionList,Modal, Pressable} from 'react-native';

const Task = () => {

      // Here we make an array of list for our modal and list 

  const listOfNames = [
    {
      title: 'A',
      data: [
        {firstname: 'Abegail', status: 'Single',image: 'https://media.licdn.com/dms/image/C4D12AQF0nGTWx9o_3Q/article-cover_image-shrink_720_1280/0/1567548798604?e=2147483647&v=beta&t=1ghxUJ4BN4kKlOkD_l6gmPIv5u7niITEkWluqf10QTg'},
        {firstname: 'Aamon', status: 'Single', image: 'https://i.pinimg.com/736x/97/86/e4/9786e45aac060f902239216a81dece97.jpg'}
      ]
    },
    {
      title: 'B',
      data:[
        {firstname: 'Baron', status: 'Married', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCSl5lxxHrOvPGdA-qxnhbbaWLfkCMOMb_VqiUMhr_wIRCWG7hRecamWUcAebXxghhTY&usqp=CAU'}
      ]
    },
    {
      title: 'C',
      data:[
        {firstname: 'Catherine', status: 'Single',image: 'https://staticg.sportskeeda.com/editor/2024/08/b04e2-17240198367778-1920.jpg?w=640'},
        {firstname: 'Clark', status: 'Single', image: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/4fa44c53_8dab_4523_9fc4_d3a55a256073.jpeg'}
      ]
    },
    {
      title: 'D',
      data:[
        {firstname: 'Darwin', status: 'Single', image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-79035252.jpg'},
        {firstname: 'Dalton', status: 'Single', image: 'https://hollywoodlife.com/wp-content/uploads/2023/07/Ty-Simpkins-actor-5-things-vertical.jpg'},
        {firstname: 'Dave', status:'Married', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVJQeONEf0Hr3kp0sW8qzhxYZ58MiVC3ZtA&s'}
      ]
    },
    {
      title: 'E',
      data:[
        {firstname: 'Erwin', status: 'Single', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7208BPJ7BP5ADG_PkBKEsAnSj68ktSHLzQ&s'}
      ]
    },
    {
      title: 'F',
      data:[
        {firstname: 'Frail', status: 'Single', image: 'https://assets.vogue.com/photos/5fced19ddad9ba0c310e4d7e/master/pass/IMG_1849.JPG'},
        {firstname: 'Frigga', status: 'Marrie', image: 'https://i.namu.wiki/i/j0LYBNfE7IPpiQ7VQH6MjiL-m8GH51nIx98pLPm0kCb1Yv5G2uJ3qDMOjdWZVquhc48RkLgEPDZO_rNOPAwg6w.webp'}
      ]
    },
    {
      title: 'G',
      data:[
        {firstname: 'Gilbert', status: 'Single', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rYHrbD764440AwwfydjBmdf0SAZ0mhA7iA&s'},
        {firstname: 'Gwapo', status: 'Single', image: 'https://preview.redd.it/paka-gwapo-puta-v0-fy2pj4mz3ysc1.jpg?width=640&crop=smart&auto=webp&s=f613ee78359ea7d895c04ed23dc6a7b8396dc6b9'}
      ]
    }

  ];

    // Here we set the values in our arrays into string 

  type Person = {
    firstname: String;  
    status: String;
    image: String;
  }

    // Here we make useState [ isModalVisible ] which will hold the current value of the state 
    //(whether the modal is visible or not). [ setIsModalVisible] this is the function you'll call to  update 
    //the state(isModalVisible) and we set our useState to false
 
  const [isModalVisible, setIsModalVisible] = useState(false);

    // Here we make another useState  , were the  initial value of selectedItem is a object containing 
    // firstname, image,status or null 

  const [selectedItem, setSelectedItem] = useState<Person | null>(null);

    // We make a function to handle items to display in our modal
    //item: Person: This function receives an argument item, which is expected to be of type Person. 
    //This means item should have the structure defined by the Person type

  const handledItems = (item:Person) => {

    // When a name in the list is clicked it will store that persons details
    setSelectedItem(item)
    // and it will set the isMOdalVisible into true
    setIsModalVisible(true)

  }

  return (
   
  <View style={{flex: 1}}>

 
    <SectionList  

      sections={listOfNames}

      //In the renderItem , we pass a parameter {items}  so that we can get the values of our listOfNames

      renderItem={({item}) => (

        <View style={styles.list}>

        {/* when the text is clicked the handledItems will be call  */}

          <Text style={styles.text} onPress={() => handledItems(item)}>
            {item.firstname}
          </Text>
        
        </View>
      )}
         // here we made the section header sticky 

      stickySectionHeadersEnabled={true}

         // here we render the sectionHeader and we pass the section as parameter which represents the listofnames

      renderSectionHeader={({section}) => (
        <View style={styles.headContain}>

          {/* here we get the key title of listofname */}

          <Text style={styles.headText}>{section.title}</Text>
        </View>
      )}
      
    />
    

    <Modal 
  // setting modal to isModalVisible 

    visible={isModalVisible}
    animationType='none'
    onRequestClose={() => setIsModalVisible(false)}
    transparent={true}
    >

    {
      <View style={styles.container}>
        <View style={styles.popUpContainer}>

 {/* if the selectedItem is not null it will execute the code */}

            {selectedItem ? (
              <View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Text style={{fontSize: 22, fontWeight: 'semibold', marginBottom: 15,marginTop: 5, color: 'black'}}>Profile</Text>

                  {/* getting the image in the listofnames */}

                  <Image source={{uri:selectedItem.image}} style={styles.image}/>
                </View>
                <View style={styles.componentContainer}>
                  <Text style={styles.popText}>Name: {selectedItem.firstname}</Text>
                  <Text style={styles.popText}>Status: {selectedItem.status}</Text>
                
                </View>
                
                <View style={{justifyContent: 'center', flex: 1,alignItems: 'center',marginBottom: 8,marginVertical: 5}}>

            {/* Using pressable to make a button */}
            {/* if the button is clicked , it will assign the setIsModalVisible to false, so that the pop up will close */}
                
                <Pressable style={styles.button} onPress={() => setIsModalVisible(false)}>
                  <Text style={{fontSize: 15, textAlign: 'center'}}>Close</Text>
                
                </Pressable>
                </View>
              
              </View>
            
            ): null} 

        </View>
      </View>
    }
      
    </Modal>  
    

    </View>

  )
}

export default Task



const styles = StyleSheet.create({
 list:{
  backgroundColor: 'white',
  fontSize: 20,
  
 },
 text:{
  backgroundColor: 'rgb(213, 237, 159)',
  padding: 8,
  fontSize: 17,
  borderBottomWidth: 1,
  
 },
 headContain:{
  backgroundColor: 'rgb(0, 113, 45)',
  color: 'white',
  padding: 10,
  
 

 },
 headText:{
  fontSize: 20


 },
 container:{
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: '50%',
  

 },
 popUpContainer:{
  width: '20%',
  backgroundColor: 'rgb(213, 237, 159)',
  height: 'auto',
  justifyContent: 'center',
  padding: 2,
  paddingBottom: 10,
  flexWrap: 'wrap',
  display: 'flex',
  maxWidth: '20%',
  borderWidth: 2,
  borderColor: 'rgb(255, 145, 0)',
  shadowColor: 'rgb(255, 145, 0)',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 2,
  shadowRadius: 30,
  elevation: 30,
  

 },
 popText:{
  fontSize: 15,
  marginVertical: 20,
  
 },
 componentContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  flexWrap: 'wrap',
  display: 'flex',
  

  
 },
 button: {
  backgroundColor: 'rgb(0, 113, 45)',
  padding: 10,
  borderRadius: 5,
  width: '80%',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 250
  
 },
 image: {
  width: 90,
  height: 90,
  borderRadius: 45,
  
 }

 

});

