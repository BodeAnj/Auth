import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class MyGallery extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        return {
            title: 'MyGallery',
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTitleStyle: {
                color: 'white',
            }
        }

    }
    render() {
        return (

            <View style={Style.container}>

                <Text> hi</Text>



            </View>

        )
    }

}

const Style = StyleSheet.create({

})