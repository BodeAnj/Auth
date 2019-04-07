import React, {Component} from 'react';
import {Text, View , StyleSheet, TextInput,Image, Button} from 'react-native';


export default class AddProfile extends Component{

    static navigationOptions = ({navigation}) => {
        console.log(navigation)
        return{
            title:'AddProfile',
            headerStyle:{
                backgroundColor:'purple',
            },
            headerTitleStyle:{
                color:'white'
            },

        }
    }

    state={
        gender:'',
        age:'',
        mobile:'',
        email:'',
        district:'',

        tehsil:'',
    }
    render(){
        return(

       
        <View style = {Style.container}>
            <View style={{ height:100, width :100,borderWidth:1,borderRadius:50, alignSelf:'center' , margin: 20 }}>
                <Image source={require('../../Assets/Image/profile.png')}  style = {{ height:80, width:100 }} />
            </View>
            <View style={{ flexDirection:'row' ,  }} >
                <View style={{ flex:2,margin: 20,fontWeight:('bold') }}>
                    <Text> Gender</Text>
                    <TextInput
                            style = {{ marginHorizontal:4 }}
                            placeholder= {'gender'}
                            value= {this.state.gender}        
                            onChangeText= {(text) => {this.setState({gender:text}) ; console.log(this.state.gender)}}  
                    />
                </View>

                <View style={{ flex:2, margin: 20}}>
                    <Text> Age</Text>
                             <TextInput
                             style = {{ marginHorizontal:4 }}
                                    placeholder= {'age'}
                                    value= {this.state.age}        
                                    onChangeText= {(text) => {this.setState({age:text}) ; console.log(this.state.age)}}  
                            />
                </View>
            </View>
            <View style = {{ margin: 20 }}>
            <Text>Mobile no.</Text>
                    <TextInput
                        
                            placeholder= {'mobileno'}
                            keyboardType={'numeric'}
                            value= {this.state.mobile}        
                            onChangeText= {(text) => {this.setState({mobile:text}) ; console.log(this.state.mobile)}}  
                    />
            </View>
            <View style = {{ margin: 20 }}>
            <Text>E-mail</Text>
                    <TextInput
                           
                            placeholder= {'email'}
                            keyboardType={'email-address'}
                            value= {this.state.email}        
                            onChangeText= {(text) => {this.setState({email:text}) ; console.log(this.state.email)}}  
                    />
            </View>

            <View style={{ flexDirection:'row',  }} >
                <View style={{ flex:2 ,margin: 20}}>
                    <Text> State</Text>
                    <TextInput
                            style = {{ marginHorizontal:4 }}
                            placeholder= {'state'}
                            value= {this.state.state}        
                            onChangeText= {(text) => {this.setState({state:text}) ; console.log(this.state.state)}}  
                    />
                </View>

                <View style={{flex:2,margin: 20 }}>
                    <Text> District</Text>
                    <TextInput
                            style = {{ marginHorizontal:4 }}
                            placeholder= {'district'}
                            value= {this.state.district}        
                            onChangeText= {(text) => {this.setState({district:text}) ; console.log(this.state.district)}}  
                    />
                </View>
            </View>

            <View style={{ flexDirection:'row' }} >
                <View style={{flex:2 ,margin: 20}}>
                    <Text>Tehsil </Text>
                    <TextInput
                            style = {{ marginHorizontal:4 }}
                            placeholder= {'tehsil'}
                            value= {this.state.tehsil}        
                            onChangeText= {(text) => {this.setState({tehsil:text}) ; console.log(this.state.tehsil)}}  
                    />
                </View>

                <View style={{flex:2,margin: 20 }}>
                    <Text> Village or city</Text>
                    <TextInput
                            style = {{ marginHorizontal:4 }}
                            placeholder= {'vilage or city'}
                            value= {this.state.gender}        
                            onChangeText= {(text) => {this.setState({gender:text}) ; console.log(this.state.gender)}}  
                    />
                </View>
                </View>

                    <View>
                        <Button 
                        title='Submit'
                        color='skyblue'
                        />
                    </View>

            

        </View>
        )
    }

}

const Style = StyleSheet.create({

    
})