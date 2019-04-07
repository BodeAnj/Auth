import React, {Component} from 'react';
import {Text, View , StyleSheet} from 'react-native';

export default class ChangeAccount extends Component{
    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        return{
            title : navigation.state.routeName,
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
    <Text> </Text>
      </View>
        )
    }

}