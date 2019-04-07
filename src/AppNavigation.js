import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './Component/Home/Home';
import MyMusic from './Component/Home/MyMusic';
import MyGallery from './Component/Home/MyGallery';
import MyVedio from './Component/Home/MyVedio';

import Profile from './Component/Profile/Profile';
import EditProfile from './Component/Profile/EditProfile';
import AddProfile from './Component/Profile/AddProfile';

import Settings from './Component/Settings/Settings';
import ChangeAccount from './Component/Settings/ChangeAccount';

import Login from './Component/Auth/Login';


const HomeStack= createStackNavigator({

    HomeScreen:{screen:Home,
    navigationOptions: () => ({
        title: 'Home',
        headerStyle: {
        backgroundColor: 'purple',
    },
    headerTitleStyle:{
        color:'white',
    },
    headerLeft: <Image source={require('./Assets/Image/menu.png')} style = {{ marginLeft:10}}/>

    }),
    },
    MyMusic:{screen:MyMusic,
        
    },
    MyGallery:{screen:MyGallery,
        
    },
    MyVedio:{screen:MyVedio,
        
    },

})



const ProfileStack= createStackNavigator({

    ProfileScreen:{screen:Profile,
    navigationOptions: () => ({
        title:'Profile',
        headerStyle:{
            backgroundColor:'purple',
        },
        headerTitleStyle:{
            color:'white',
        },
        

    }),
    },
   EditProfile:{screen:EditProfile,
       
    },
    AddProfile:{screen:AddProfile,
        
    },
    

})


const SettingsStack= createStackNavigator({

    SettingsScreen:{screen:Settings,
    navigationOptions: () => ({
        title:'Settings',
        headerStyle:{
            backgroundColor:'purple',  
        },
        headerTitleStyle:{
            color:'white',
        }
    }),
    },

    ChangeAccount:{screen:ChangeAccount,
       
        },

})

const MainTab = createBottomTabNavigator({

    Home:{screen:HomeStack, navigationOptions : ({navigation}) => ({

        tabBarIcon: ({tintColor}) => (
            <Image source={require('./Assets/Image/home.png')} style = {{ width:30, height:30 }} />
        )
    }),
},
Profile:{screen:ProfileStack, navigationOptions : ({navigation}) => ({
    
    tabBarIcon: ({tintColor}) => (
        <Image source={require('./Assets/Image/profile.png')} style = {{ width:30, height:30 }}/>
        )
    }),
   
},
    Settings:{screen:SettingsStack,  navigationOptions : ({navigation}) => ({
        
        tabBarIcon: ({tintColor}) => (
            <Image source={require('./Assets/Image/setting.png')} style = {{ width:30, height:30 }}/>
            )
        }),},
    },
    {tabBarOptions: {
        activeTintColor: 'purple',
        
  },}
    )

const AppNavigator = createStackNavigator({

    Login:{screen:Login},
    MainTab:{screen:MainTab,
        navigationOptions: () => ({
            header:null,
        })
    
    },
},{
    initialRouteName:'Login'
})





export default createAppContainer(AppNavigator)



