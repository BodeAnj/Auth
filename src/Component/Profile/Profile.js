import React, {Component} from 'react';
import {Text, View , StyleSheet,Button} from 'react-native';

export default class Profile extends Component{
    render(){
        return(

            <View >
    <Text> </Text>
    <View style = {Style.Button}>
                        <Button
                        onPress= {() => this.props.navigation.navigate('EditProfile')}
                        title="EditProfile"
                        color="purple"
                        />
                </View>
                <View style = {Style.Button}>
                        <Button
                        onPress= {() => this.props.navigation.navigate('AddProfile')}
                        title="AddProfile"
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