import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (

            <View style={Style.container}>
                <View style={Style.Button}>
                        <Button
                        onPress={() => this.props.navigation.navigate('MyMusic')}
                        title="My Music"
                        color="purple"
                        
                        />
                </View>
                <View style ={Style.Button}>  
                        <Button
                        onPress={() => this.props.navigation.navigate('MyGallery')}
                        title="My Gallery"
                        color="purple"
                        />
                </View>
                <View style = {Style.Button}>
                        <Button
                        onPress= {() => this.props.navigation.navigate('MyVedio')}
                        title="My Vedio"
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