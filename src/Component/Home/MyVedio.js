import React, {Component} from 'react';
import {Text, View , StyleSheet, Image, FlatList} from 'react-native';

let AlbumData = [
    {AlubumName:'mik', SongName: 'kil', Duration: '111', ArtistName:'jjo'},
    {AlubumName:'kkk', SongName: 'bbbb', Duration: '141', ArtistName:'qwqw'},
    {AlubumName:'uyyr', SongName: 'nnnn', Duration: '1251', ArtistName:'asas'},
    {AlubumName:'fgsdf', SongName: 'hhhh', Duration: '585', ArtistName:'zxzx'},
    {AlubumName:'xbvb', SongName: 'xzzz', Duration: '699', ArtistName:'vbvb'},

]

export default class MyVedio extends Component{
    componentWillMount(){
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        
        //     .then( async (res) => await this.setState({ arr : res.data }) );
        this.setState({arr:AlbumData})
    }

    state={
        arr:[]
    }

    renderAlbum = ({item}) => {
        console.log(item.title)

        return(
            <View style = {Style.container}>

                <View style = {Style.CardView}>
                    
                    <View style = {Style.image}>
                        <Image source={require('../../Assets/Image/video.png')}  style = {{ height:50, width:50 }}/>
                    </View>
                    <View style = {Style.content}>
                        <Text>{item.title} </Text>
                        {/* <Text>{item.SongName} </Text> */}
                        {/* <Text>{item.Duration} </Text> */}
                        <Text>{item.VideoName} </Text>
                    </View>
                </View>
                
            </View>

        )
    }

    static navigationOptions = ({navigation}) => {
        console.log(navigation)
        return {
           title: 'MyVedios',
           headerStyle:{
               backgroundColor:'puple'        
           },
           headerTitleStyle:{
            color:'white',
        }

        }
    }

    render(){
        return(

            <View style = {Style.container}>

                <View style = {Style.CardView}>
                    
                    <View style = {Style.image}>
                        <Image source={require('../../Assets/Image/video.png')} />
                    </View>
                    <View style = {Style.content}>
                        <Text>Album Name </Text>
                        <Text>Video name </Text>
                        <Text>Duration </Text>
                        <Text>Artist Name </Text>
                    </View>
                </View>
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
        padding: 10,
        
    }

})