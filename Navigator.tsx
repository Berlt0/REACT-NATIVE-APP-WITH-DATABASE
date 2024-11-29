import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomePage from './HomePage'
import Task from './Task'
import Login from './Login'
import UserTask from './UserTask'
import Register from './Register'


const Navigator = () => {
        // const Stack = createNativeStackNavigator();

        // here we use bottomTabNavigator as our navigator , before importing it you neeed to install the required depencies first 
      const Tab = createBottomTabNavigator();
  return (
    
        // we set the headerShown to false ,so that the header will be hide in every screens
    <Tab.Navigator screenOptions={{headerShown:false,
        // setting the tabBar and icon to a specifc color
    tabBarStyle:{backgroundColor: 'rgb(0, 113, 45)'},
        //the color of the tabBar and icon when it is active
    tabBarActiveTintColor: 'rgb(255, 145, 0)',
       // the color of the tabBar and icon  if its inactive
    tabBarInactiveTintColor: 'rgb(213, 237, 159)'}}>
     
        {/* Grouping Tab.Screens using Tab.Group */}

        <Tab.Group>

          {/* setting login as the name of the screen and the identifier to use in this tab */}
          {/* and login  which is the file or component to be rendered   */}

        <Tab.Screen name='Login' component={Login} options={{
              tabBarLabel: "Login",

            
              tabBarIcon: ({focused,color,size}) => (
                <MaterialCommunityIcons name="login" color={color} size={size}/>
              ),
            }}
            />

            <Tab.Screen name='Home' component={HomePage} options={{
              tabBarLabel: "Home",
              tabBarIcon: ({focused,size,color}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
              ),
            }}
            />
            <Tab.Screen name='UserTask' component={UserTask} options={{
              tabBarLabel: "Task",
              tabBarIcon: ({focused,color,size}) => (
                <MaterialCommunityIcons name="calendar-check" color={color} size={size}/>
              ),
            }}
            />
             <Tab.Screen name='Task' component={Task} options={{
              tabBarLabel: "List",
              tabBarIcon: ({focused,color,size}) => (
                <MaterialCommunityIcons name="notebook" color={color} size={size}/>
              ),
            }}
            />
            <Tab.Screen name='Register' component={Register} options={{
              tabBarLabel: "Register",
              tabBarIcon: ({focused,color,size}) => (
                <MaterialCommunityIcons name="Register" color={color} size={size}/>
              ),
            }}
            />
             
            
 
          </Tab.Group>
        </Tab.Navigator>
  )
}

export default Navigator
