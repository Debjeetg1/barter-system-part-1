import React from 'react'
import {View , Text, StyleSheet} from 'react-native'

class MyHeader extends React.Component{
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Text style={styles.header} >{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        alignText: 'center',
        fontSize : 40,
        fontWeight:'bold',
        marginBottom: 20,
        color:'#f7b757'
    }
})

export default MyHeader