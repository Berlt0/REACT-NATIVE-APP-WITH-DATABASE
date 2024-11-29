import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View,Text, Button,Image,ScrollView ,StyleSheet,TouchableOpacity} from 'react-native';
import MaterialCommunityICons from 'react-native-vector-icons/MaterialCommunityIcons'

const UserTask = () => {
    
    // making a list of task
    const taskList = [
        {
            task:"Wash the Dishes", 
            timeDuration:"30 minutes",
            image:"https://www.southernliving.com/thmb/wqwL7SH1AfdnrD7_McRsN9pHZJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-171149191-b4a4048e11734790bf271f3c10c9e942.jpg",
            icon1: "check",
            icon2: "cancel"
        },
        {
            task:"Clean The House", 
            timeDuration:"1 hour",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDZ8oPECCZw972sTj0FFjZ2ssMhxv6gIs_A&s",
            icon1: "check",
            icon2: "cancel"
        },
        {
            task:"Make Food/Cook",
            timeDuration:"1 hour",
            image:"https://images.healthshots.com/healthshots/en/uploads/2023/12/20134443/cooking.jpg",
            icon1: "check",
            icon2: "cancel"
        },
        {
            task:"Mowing the Yard",
            timeDuration:"20 minutes",
            image:"https://www.coolturf.com.au/wp-content/uploads/2020/05/New-Project-3.png",
            icon1: "check",
            icon2: "cancel"
        }

    ]
        
   
  return (

    <ScrollView style={styles.mainContainer}>
        <View style={styles.secondContainer}>
            {
                //mapping the tasklist so that it will get every task in the list and has a parameter of task and index
                taskList.map((task,index) => (

                    // using key{index} to give a unique identifier to each task's View when rendering lists.

                    <View key={index} style={styles.cardBody}>

                        {/* getting the value of the task list or arry */}

                        <Image source={{uri:task.image}} style={styles.image}/>
                        <Text style={styles.task}>{task.task}</Text>
                        <Text style={styles.timeDuration}>Time Duration: {task.timeDuration}</Text>
                  
                

                        <View style={styles.buttonContainer}>

                            {/* here we use TouchableOpacity make the icons clickable or a button */}
                            {/* for getting the icon we use MaterialCommunityICons to get the icons we want by setting the name to the icon name in MaterialCommunityICons */}
                            
                            <TouchableOpacity style={styles.button}>
                                <MaterialCommunityICons name={task.icon1} size={24} color="black"/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <MaterialCommunityICons name={task.icon2} size={24} color="black"/>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                ))
            }
        </View>
    </ScrollView>
   
    
  )
}

export default UserTask

const styles = StyleSheet.create({

mainContainer:{
    flex: 1,
    backgroundColor: 'rgb(213, 237, 159)'


},
secondContainer:{

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
   
},
cardBody:{
    backgroundColor:"Green",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(0, 113, 45)',
    marginBottom: 10,
    width: '48%',
    height: 'auto'


},
image:{
    width: '100%',
    height: 100,
    borderRadius: 10,
    

},
task:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 7

},
timeDuration:{
    fontSize: 15,
    marginLeft: 5
   
},
buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    width: '48%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '25%',
    marginTop: 10
},
button:{
    padding: 10
    
    
}

});