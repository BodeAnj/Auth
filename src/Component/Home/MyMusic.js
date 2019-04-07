import React, {Component} from 'react';
import {Text, View , StyleSheet, FlatList, Image, } from 'react-native';
import axios from 'axios';

let AlbumData = [
    {AlubumName:'mik', SongName: 'kil', Duration: '111', ArtistName:'jjo'},
    {AlubumName:'kkk', SongName: 'bbbb', Duration: '141', ArtistName:'qwqw'},
    {AlubumName:'uyyr', SongName: 'nnnn', Duration: '1251', ArtistName:'asas'},
    {AlubumName:'fgsdf', SongName: 'hhhh', Duration: '585', ArtistName:'zxzx'},
    {AlubumName:'xbvb', SongName: 'xzzz', Duration: '699', ArtistName:'vbvb'},

]


export default class MyMusic extends Component{
     componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        
            .then( async (res) => await this.setState({ arr : res.data }) );
        // console.log(this.state.arr)
    }

    state={
        arr:[]
    }

    renderAlbum = ({item}) => {
        console.log(item.image)

        return(
            <View style = {Style.container}>

                <View style = {Style.CardView}>
                    
                    <View style = {Style.image}>
                        <Image source={{uri :item.image}}  style = {{ height:200, width:150 }}/>
                    </View>
                    <View style = {Style.content}>
                        <Text>{item.title} </Text>
                        {/* <Text>{item.SongName} </Text> */}
                        {/* <Text>{item.Duration} </Text> */}
                        <Text>{item.artist} </Text>
                    </View>
                </View>
                
            </View>

        )
    }

    static navigationOptions = ({navigation}) => {
        console.log(navigation)
        return{
            title : 'MyMusic',
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

            <View style = {Style.container}>

                {/* <View style = {Style.CardView}>
                    
                    <View style = {Style.image}>
                        <Image source={require('../../Assets/Image/song.png')} />
                    </View>
                    <View style = {Style.content}>
                        <Text>Album Name </Text>
                        <Text>Song name </Text>
                        <Text>Duration </Text>
                        <Text>Artist Name </Text>
                    </View>
                </View> */}
                <FlatList
                data= {this.state.arr}
                renderItem={this.renderAlbum}
                />

            </View>
                
        )
    }

}

const Style = StyleSheet.create({

    container:{

        flex: 1,
        
        
    },

    CardView:{
        flexDirection: 'row',
        borderWidth: 5,
        borderColor:'purple',
        margin: 10,
    },

    content:{
        
        // borderWidth: 5,
        // borderColor:'skyblue',
        // flexDirection: 'row',
        margin:10,
        padding: 10,
        flex:1,
        backgroundColor:'lightgrey'
        
    },
    image:{
       
        margin:5,
        borderWidth: 5,
        borderColor:'skyblue',
        justifyContent: 'center',
       
        
    }

})