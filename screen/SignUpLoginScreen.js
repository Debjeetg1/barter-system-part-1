import React from 'react';
import {TextInput, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import db from '../config'
import firebase from 'firebase'

class SignUpLoginScreen extends React.Component{
    constructor()
    {
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email , password).then(user => {
            alert('Succesfuly logged in!')
        }).catch(error => {
            if(error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.')
            {
                alert("Your account does'nt exist!\nPlease create an account")
            }
        })
    }

    userSignUp = (email ,  password) => {
        firebase.auth().createUserWithEmailAndPassword(email , password)
    }
    render(){
        return(
            <View>
            <View style={styles.inputView}>
                <Text style={{padding:'0.5rem', fontWeight: 'bold', fontSize: 20 , color: '#ff7700'}}>EMAIL:</Text>
                <TextInput placeholder='abc@xyz.com' style={styles.inputs} keyboardType={'email-address'}  onChangeText={(email) => {
                    this.setState({
                        emailId: email
                    })
                }}/>
                <Text style={{padding:'0.5rem', fontWeight: 'bold', fontSize: 20 , color: '#ff7700'}}>PASSWORD:</Text>
                <TextInput keyboardType={'password'} secureTextEntry placeholder = 'Password' style={styles.inputs} onChangeText ={(password) => {
                    this.setState({
                        password: password
                    })
                }}/>
            </View>
            <View style={styles.inputView}>
                <TouchableOpacity style={styles.inputButton} onPress={() => {
                    if(this.state.password !== '' && this.state.emailId !== ''){
                        this.userSignUp(this.state.emailId , this.state.password)
                    }
                }}>
                    <Text style={{fontSize: 25,color:'#ff7700', fontWeight:'bold'}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputButton } onPress={() => {this.userLogin(this.state.emailId , this.state.password)}}>
                    <Text style={{fontSize: 25,color:'#ff7700', fontWeight:'bold'}}>Log In</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputs:{
        margin : '2rem',
        width: '25%',
        borderBottomColor: 'black',
        borderBottomWidth: '1px',
        width: '300px',
        height: '40px',
        fontSize:20,
        color: '#ff7700'
        
    },

    inputView:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%'
    },

    inputButton:{
        backgroundColor: '#ffffff',
        padding:'0.7rem',
        borderRadius: 30,
        margin: '0.5rem',
        width: '380px',
        textAlign:'center',
        color: 'orange'
        

    }
})

export default SignUpLoginScreen;
