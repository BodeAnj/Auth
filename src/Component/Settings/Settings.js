import React, {Component} from 'react';
import {Text, View , StyleSheet, Button, Alert} from 'react-native';
import Login from '../Auth/Login';

export default class Settings extends Component{

    Logout(){
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => {this.props.navigation.navigate('Login')}},
            ],
            {cancelable: false},
          );
    }

    render(){
        return(

            <View >
    <Text> hi</Text>
    <View style = {Style.Button}>
                        <Button
                        onPress= {() => this.props.navigation.navigate('ChangeAccount', { screenTitle: 'Change' })}
                        title="ChangeAccount"
                        color="purple"
                        />
                </View>
                <View style = {Style.Button}>
                        <Button
                        onPress= {() => {this.Logout()}}
                        title="Logout"
                        color="purple"
                        
                        />
                </View>
                
      </View>
    
      
        )
    }

}


const Style = StyleSheet.create({

    container:{
        flex:1,
        
    },
    Button:{
        justifyContent:'center',
        borderWidth: 2,
        borderColor:'skyblue',
        margin: 10,
        backgroundColor:"lightgrey",


    }
})