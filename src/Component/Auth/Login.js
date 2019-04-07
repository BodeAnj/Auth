import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { loginRequest } from '../../Redux/Action/AuthAction'
import { connect } from 'react-redux'
import firebase from 'firebase'


class Login extends Component {


    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        return {
            title: 'Login',
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTitleStyle: {
                color: 'white',
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    state = { email: '', password: '', error: '' };

    onButtonPress() {
        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    async onLoginFail() {
        alert('Something went wrong')
        this.setState({ error: 'Authentication Failed' });

    }

    async onLoginSuccess() {
        //   alert('hihhh')
        console.log('SUCECCCCCCEEEEE')
        await this.setState({
            email: '',
            password: '',
            error: ''
        });
        await this.props.navigation.navigate('MainTab')
    }
    //     onLogin(){

    //     //   if(this.state.password.length < 6){ 
    //     //         alert('Password should atleat 6 characters')

    //     //     }

    //     //     this.props.loginRequest({ email: (this.state.email).toLowerCase(), password: (this.state.password.toLowerCase())})

    // }

    render() {
        return (

            <View style={Style.container}>

                <View style={Style.inputView}>
                    <Text style={Style.txtView}>E-mail</Text>

                    <TextInput
                        placeholder={'E-mail'}
                        value={this.state.email}
                        onChangeText={email => { this.setState({ email }); console.log(this.state.email) }}
                    />
                </View>

                <View style={Style.inputView}>
                    <Text style={Style.txtView}>Password</Text>

                    <TextInput
                        placeholder={'Password'}
                        value={this.state.password}
                        onChangeText={password => { this.setState({ password }); console.log(this.state.password) }}
                    />
                </View>

                <View style={Style.BtnView}>
                    <Button
                        title='Login'
                        // onPress={() => {this.onLogin()}}
                        onPress={this.onButtonPress.bind(this)}

                    />
                </View>

                {/* <View style={Style.BtnView}>
                <Button
                title= 'SignUp'
                onPress={() => {this.props.navigation.navigate('Signup')}}
                />

            </View> */}

            </View>


        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.Auth
    }
}

export default connect(mapStateToProps, { loginRequest })(Login)

const Style = StyleSheet.create({

    container: {

        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        marginHorizontal: 5,
        marginTop: 10

    },

    inputView: {

        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 15,
    },

    txtView: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        padding: 1,
    },

    BtnView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 2,
    }
})