import React, {Component} from 'react';
import {Text, View , StyleSheet} from 'react-native';


export default class EditProfile extends Component{

    static navigationOptions = ({navigation}) => {
        console.log(navigation)
        return{
            title:'EditProfile',
            headerStyle:{
                backgroundColor:'purple',
            },
            headerTitleStyle:{
                color:'white',
            }
        }
    }
    render(){
        return(

            <View >
    <Text> hi</Text>
      </View>
        )
    }

}